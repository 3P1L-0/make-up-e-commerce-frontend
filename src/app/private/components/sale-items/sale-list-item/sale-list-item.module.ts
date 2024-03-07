import { NgModule } from "@angular/core";
import { AppSaleListItemComponent } from "./sale-list-item.component";
import { AppCommomImportsModule } from "src/app/global/modules/commom-imports.module";

const declarations = [AppSaleListItemComponent];

@NgModule({
  declarations: declarations,
  imports: [
    AppCommomImportsModule
  ],
  exports: [
    ...declarations
  ]
})
export class AppSaleListItemModule {}
