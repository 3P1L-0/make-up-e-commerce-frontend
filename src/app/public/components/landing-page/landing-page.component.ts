import {Component, inject} from "@angular/core";
import {map, take} from "rxjs";
import {ServiceDTO} from "../../../global/model/cart/dto/ServiceDTO";
import {PUBLIC_ROUTES} from "../../../global/configs";
import {AppProductService} from "../../../private/services/product.service";
import {AppServiceService} from "../../../private/services/services.service";
import {ProductDTO} from "../../../global/model/cart/dto/ProductDTO";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  host: {'class': 'app-landing-page-module'}
})
export class AppLandingPageComponent {
  /* DEPENDENCIES */
  private readonly _productsService = inject(AppProductService);
  private readonly _servicesService = inject(AppServiceService);

  /* MEMBERS */
  public produtos: ProductDTO[];
  public servicos: ServiceDTO[];
  public readonly routes = PUBLIC_ROUTES;

  constructor() {
    this._productsService.fetch().pipe(
      take(4),
      map(v => v.map(p => p.getDTO()))
    ).subscribe(items => { this.produtos = items });
    this._servicesService.fetch().pipe(take(4)).subscribe(items => { this.servicos = items });
  }
}
