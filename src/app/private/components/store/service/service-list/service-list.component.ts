import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {Router} from "@angular/router";
import {PRIVATE_ROUTES} from "src/app/global/configs";
import {ProductDTO} from "src/app/global/model/cart/dto/ProductDTO";
import {debounceTime, filter, fromEvent} from "rxjs";
import {AppServiceService} from "../../../../services/services.service";
import {ServiceDTO} from "../../../../../global/model/cart/dto/ServiceDTO";

@Component({
  selector: 'app-service-list-view',
  templateUrl: './service-list.component.html',
  host: {"class": "app-service-list-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppServiceListComponent implements OnInit, AfterViewInit {
  /* DEPENDENCIES */
  private readonly _router = inject(Router);
  private readonly servicesService = inject(AppServiceService);

  /* MEMBERS */
  private _services: ServiceDTO[];
  public publicServices: ServiceDTO[];

  @ViewChild("searchField", {read: ElementRef<HTMLInputElement>, static: true}) searchField!: ElementRef<HTMLInputElement>;

  public ngOnInit(): void {
    this.servicesService.fetch().subscribe({
      next: (res) => { this._services = res; }
    });

    fromEvent(this.searchField?.nativeElement, "keyup").pipe(
      debounceTime(500)
    ).subscribe(() => {
      const res = this._services.filter(s => {
        let matchString = s.name.toLowerCase();
        matchString += s.state.toLowerCase();
        matchString += s.code;

        return matchString.includes(this.searchField.nativeElement.value.toLowerCase());
      });

      this.publicServices = !res.length ? this._services : res;
    });
  }

  public ngAfterViewInit(): void {

  }

  public newService(): void { this._router.navigate([PRIVATE_ROUTES.servicesForm]).then(); }
}
