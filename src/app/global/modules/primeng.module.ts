import { NgModule } from "@angular/core";
import { ColorPickerModule } from "primeng/colorpicker";
import { InplaceModule } from "primeng/inplace";
import { ScrollTopModule } from "primeng/scrolltop";
import { CarouselModule } from "primeng/carousel";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextareaModule} from "primeng/inputtextarea";
import { TooltipModule } from "primeng/tooltip";
import {FileUploadModule} from "primeng/fileupload";

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
    FileUploadModule
  ]
})
export class AppPrimeNgModule {}
