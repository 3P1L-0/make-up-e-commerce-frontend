import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: "app-cards-view",
  templateUrl: "./cards.component.html",
  host: {"class": "app-cards-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppCardsComponent {
}
