import { Component, ViewEncapsulation, inject } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { AppAuthService } from "src/app/global/components/auth/auth.service";
import { OrderDTO } from "src/app/global/model/documents/dto/OrderDTO";
import { AppNavigationService } from "src/app/global/services/navigation.service";
import { OrdersService } from "src/app/private/services/orders.service";
import { AppUsersService } from "src/app/private/services/users.service";

@Component({
  selector: "app-orders-view",
  templateUrl: "./orders.component.html",
  host: { "class": "app-orders-module" },
  encapsulation: ViewEncapsulation.None
})
export class AppOrderListComponent {
  private readonly _navigationService = inject(AppNavigationService);
  private readonly _confirmationService = inject(ConfirmationService);
  private readonly _msgService = inject(MessageService);
  private readonly _userService = inject(AppUsersService);
  private readonly _orderService = inject(OrdersService);
  private readonly _activeSession = inject(AppAuthService).activeSession;

  public orderList: OrderDTO[];

  public listOrders(): void {

    if (this._activeSession.user.role.employee) {
      this._orderService.fetchAll().subscribe({
        next: orders => { this.orderList = orders; },
        error: e => { this._showToast("error", "Erro ao carregar orders..."); }
      });
    } else {
      this._orderService.getByUserId(this._activeSession.user.id).subscribe({
        next: orders => { this.orderList = orders; },
        error: e => { this._showToast("error", "Erro ao carregar orders..."); }
      });
    }
  }


  public listByState() {
    this._orderService.fetchByState(null).subscribe({
      next: orders => { this.orderList = orders; },
      error: e => { this._showToast("error", "Erro ao carregar orders..."); }
    });
  }

  public ship() {
    this._orderService.shipeOrder().subscribe({
      next: order => {
        let index: number;
        this.orderList.filter(o => o.id === order.id).find((d, i) => {
          if (d.id === order.id) {
            index = i;
            return i
          };
          return -1;
        })

        this.orderList.splice(index, 1, order);
      }
    });
  }

  public cancel() {
    this._orderService.cancelOrder().subscribe({
      next: order => {
        let index: number;
        this.orderList.filter(o => o.id === order.id).find((d, i) => {
          if (d.id === order.id) {
            index = i;
            return i
          };
          return -1;
        })

        this.orderList.splice(index, 1, order);
      }
    });
  }

  public complete() {
    this._orderService.completeOrder().subscribe({
      next: order => {
        let index: number;
        this.orderList.filter(o => o.id === order.id).find((d, i) => {
          if (d.id === order.id) {
            index = i;
            return i
          };
          return -1;
        })

        this.orderList.splice(index, 1, order);
      }
    });
  }

  private _showToast(severity: string, detail: string): void { this._msgService.add({ severity, detail }); }
}
