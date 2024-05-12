import {Component, inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ConfirmationService, MenuItem} from "primeng/api";
import {Product} from "../../../../../../global/model/cart/Product";
import {Router} from "@angular/router";
import {PRIVATE_ROUTES} from "../../../../../../global/configs";

@Component({
  selector: 'app-product-list-item-view',
  templateUrl: './product-list-item.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {"class": "app-sale-list-item-module"}
})
export class AppProductListItemComponent {
  /* DEPENDENCIES */
  private readonly _confirmationService = inject(ConfirmationService);
  private readonly _router = inject(Router);

  /* MEMBERS */
  public readonly menuModel: MenuItem[];
  @Input() product: Product;

  constructor() {
    this.menuModel = [
      {
        tooltipOptions: {
          tooltipLabel: "Editar",
          tooltipPosition: "left"
        },
        icon: "pi pi-pencil",
        command: () => {}
      },
      {
        tooltipOptions: {
          tooltipLabel: "Detalhes",
          tooltipPosition: "left"
        },
        icon: "pi pi-info",
        command: () => {
          console.log("navigating to details!");
          this._router.navigate([PRIVATE_ROUTES.productsDetails, this.product.getId()]).then();
        }
      },
      {
        tooltipOptions: {
          tooltipLabel: "Eliminar",
          tooltipPosition: "left"
        },
        icon: "pi pi-trash",
        command: () => this._askForConfirmation()
      }
    ]
  }

  private _askForConfirmation(): void {
    this._confirmationService.confirm({
      message: "Tem a certeza que deseja eliminar este produto?",
      accept: () => {}
    });
  }
}
