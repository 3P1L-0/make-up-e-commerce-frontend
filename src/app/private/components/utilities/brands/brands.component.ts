import { Component, inject } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { emptyString } from "src/app/global/configs/validators/forms/validators";
import { BrandDTO } from "src/app/global/model/cart/dto/BrandDTO";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {AppBrandService} from "../../../services/brand.service";

@Component({
  selector: "app-brands-view",
  templateUrl: "./brands.component.html",
  host: {"class": "simple-utility-form-view"}
})
export class AppBrandsComponent {
  /* DEPENDENCIES */
  private readonly _brandsService = inject(AppBrandService);
  private readonly _diagRef = inject(DynamicDialogRef);
  private readonly _frmBuilder = inject(FormBuilder);
  private readonly _toastrService = inject(MessageService);

  /* MEMBERS */
  public brandsForm: FormGroup;
  public readonly a;

  constructor() {
    this.brandsForm = this._frmBuilder.group({
      brands: this._frmBuilder.array([])
    });
  }

  private _addBrand(): void {
    this.brandsFormArray.push(this._frmBuilder.group({
      name: new FormControl(null, [Validators.required, emptyString])
    }));
  }

  public get brandsFormArray(): FormArray { return this.brandsForm.get("brands") as FormArray; }

  public newBrand(): void {
    this._addBrand();
  }

  public removeBrand(idx: number): void {
    this.brandsFormArray.removeAt(idx);
    this._toastrService.add({
      severity: "info",
      detail: "Marca eliminada"
    });
  }

  public closeDialog(): void {
    this._diagRef.close();
  }

  public saveBrands(): void {
    const newBrands: BrandDTO[] = [];

    for(let ctrl of Object.values(this.brandsFormArray.value)) {
      let c: any = ctrl;

      let brand = new BrandDTO();
      brand.name = c.name;
      newBrands.push(brand);
    }

    this._brandsService.createList(newBrands).subscribe(() => {
      this._toastrService.add({
        severity: "success",
        detail: "Marcas cadastradas com sucesso"
      });
      this.brandsFormArray.clear();
    });
  }

  public getControl(idx: number): FormControl<any> {
    return (this.brandsFormArray.controls[idx] as FormGroup).get("name") as FormControl;
  }
}
