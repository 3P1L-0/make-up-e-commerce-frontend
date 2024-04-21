import { Component, inject } from "@angular/core";
import { AppBrandService } from "../../services/brand.service";
import { MatDialogRef } from "@angular/material/dialog";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { emptyString } from "src/app/global/configs/validators/forms/validators";
import { BrandDTO } from "src/app/global/model/cart/dto/BrandDTO";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-brands-view",
  templateUrl: "./brands.component.html",
  host: {"class": "app-brands-module"}
})
export class AppBrandsComponent {
  /* DEPENDENCIES */
  private readonly _brandsService = inject(AppBrandService);
  private readonly _diagRef = inject(MatDialogRef<AppBrandsComponent, any>);
  private readonly _frmBuilder = inject(FormBuilder);
  private readonly _toastrService = inject(ToastrService);

  /* MEMBERS */
  public brandsForm: FormGroup;
  public readonly

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
    this._toastrService.warning("Marca eliminada");
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
      this._toastrService.success("Marcas cadastradas com sucesso");
      this.brandsFormArray.clear();
    });
  }

  public getControl(idx: number): FormControl<any> {
    return (this.brandsFormArray.controls[idx] as FormGroup).get("name") as FormControl;
  }
}
