import {NgModule} from "@angular/core";
import {AppFooterComponent} from "./footer.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AppFooterComponent],
  exports: [AppFooterComponent],
  imports: [CommonModule]
})
export class AppFooterModule {}
