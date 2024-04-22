import { NgModule } from "@angular/core";
import { ColorPickerModule } from "primeng/colorpicker";
import { InplaceModule } from "primeng/inplace";
import { ScrollTopModule } from "primeng/scrolltop";
import { CarouselModule } from "primeng/carousel";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TooltipModule } from "primeng/tooltip";
import { FileUploadModule } from "primeng/fileupload";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { TabViewModule } from "primeng/tabview";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { TriStateCheckboxModule } from "primeng/tristatecheckbox";
import { CheckboxModule } from "primeng/checkbox";
import { TableModule } from "primeng/table";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import {PasswordModule} from "primeng/password";
import {MenuModule} from "primeng/menu";

@NgModule({
  exports: [
    InplaceModule,
    ColorPickerModule,
    ScrollTopModule,
    CarouselModule,
    ToastModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    InputNumberModule,
    InputTextareaModule,
    TooltipModule,
    FileUploadModule,
    ConfirmDialogModule,
    TabViewModule,
    CardModule,
    DividerModule,
    TriStateCheckboxModule,
    CheckboxModule,
    TableModule,
    ToastModule,
    DynamicDialogModule,
    PasswordModule,
    MenuModule
  ],
  providers: [
    ConfirmationService
  ]
})
export class AppPrimeNgModule {}
