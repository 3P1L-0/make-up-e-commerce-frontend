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
import {ConfirmationService, MessageService} from "primeng/api";
import { TabViewModule } from "primeng/tabview";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { TriStateCheckboxModule } from "primeng/tristatecheckbox";
import { CheckboxModule } from "primeng/checkbox";
import { TableModule } from "primeng/table";
import {DialogService, DynamicDialogConfig, DynamicDialogModule} from "primeng/dynamicdialog";
import {PasswordModule} from "primeng/password";
import {MenuModule} from "primeng/menu";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {ChipsModule} from "primeng/chips";
import {ChipModule} from "primeng/chip";
import {MultiSelectModule} from "primeng/multiselect";
import {SpeedDialModule} from "primeng/speeddial";
import {PanelModule} from "primeng/panel";
import {RadioButtonModule} from "primeng/radiobutton";
import {CalendarModule} from "primeng/calendar";

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
    MenuModule,
    BreadcrumbModule,
    ChipModule,
    ChipsModule,
    MultiSelectModule,
    SpeedDialModule,
    PanelModule,
    RadioButtonModule,
    CalendarModule
  ],
  providers: [
    ConfirmationService,
    DialogService,
  ]
})
export class AppPrimeNgModule {}
