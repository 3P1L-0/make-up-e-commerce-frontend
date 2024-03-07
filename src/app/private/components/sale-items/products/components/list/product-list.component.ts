import { Component } from "@angular/core";
import { PRIVATE_ROUTES } from "src/app/global/configs";

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html'
})
export class AppProductListComponent {
  /* DEPENDENCIES */
  /* MEMBERS */
  public readonly routes: typeof PRIVATE_ROUTES;

  constructor() {
    this.routes = PRIVATE_ROUTES;
  }

  public newProduct(): void {

  }
}
