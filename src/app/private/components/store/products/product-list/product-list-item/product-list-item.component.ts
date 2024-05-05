import {Component, inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ConfirmationService, MenuItem} from "primeng/api";
import {Product} from "../../../../../../global/model/cart/Product";

@Component({
  selector: 'app-product-list-item-view',
  templateUrl: './product-list-item.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {"class": "app-sale-list-item-module"}
})
export class AppProductListItemComponent {
  /* DEPENDENCIES */
  private readonly _confirmationService = inject(ConfirmationService);

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
        command: () => {}
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
