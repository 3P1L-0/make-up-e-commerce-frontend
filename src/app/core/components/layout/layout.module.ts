import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { LayoutComponent } from "./layout.component";
import { HeaderComponent } from "./header/header.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { FooterComponent } from "./footer/footer.component";
import { LayoutService } from "./layout.service";

const declarations = [
  LayoutComponent,
  HeaderComponent,
  SideMenuComponent,
  FooterComponent
]

@NgModule({
  declarations: declarations,
  imports: [SharedModule],
  providers: [
    LayoutService
  ]
})
export class LayoutModule {}
