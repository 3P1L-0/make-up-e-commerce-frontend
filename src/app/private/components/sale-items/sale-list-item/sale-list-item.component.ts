import { Component } from "@angular/core";

@Component({
  selector: 'app-sale-list-item',
  templateUrl: './sale-list-item.component.html'
})
export class AppSaleListItemComponent {
  /* DEPENDENCIES */
  /* MEMBERS */
  public get name(): string { return 'Product Name'; }
  public get code(): string { return 'Product Code'; }
  public get price(): string { return 'AOA 12324'; }
  public get state(): string { return 'Available'; }

  public get img(): string { return '/assets/images/capa.png.jpg'; }
  public get isOnSale(): boolean { return true; }
}
