import { Component, inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { emptyString } from "src/app/global/configs/validators/forms/validators";
import { ToastrService } from "ngx-toastr";
import { AppCategoryService } from "../../services/category.service";
import { CategoryDTO } from "src/app/global/model/cart/dto/CategoryDTO";

@Component({
  selector: "app-brands-view",
  templateUrl: "./categories.component.html",
  host: {"class": "app-categories-module"}
})
export class AppCategoriesComponent {
  /* DEPENDENCIES */
  private readonly _categoriesService = inject(AppCategoryService);
  private readonly _diagRef = inject(MatDialogRef<AppCategoriesComponent, any>);
  private readonly _frmBuilder = inject(FormBuilder);
  private readonly _toastrService = inject(ToastrService);

  /* MEMBERS */
  public categoriesForm: FormGroup;
  public readonly

  constructor() {
    this.categoriesForm = this._frmBuilder.group({
      categories: this._frmBuilder.array([])
    });
  }

  private _addBrand(): void {
    this.categoriesFormArray.push(this._frmBuilder.group({
      name: new FormControl(null, [Validators.required, emptyString])
    }));
  }

  public get categoriesFormArray(): FormArray { return this.categoriesForm.get("categories") as FormArray; }

  public newCategory(): void {
    this._addBrand();
  }

  public removeCategory(idx: number): void {
    this.categoriesFormArray.removeAt(idx);
    this._toastrService.warning("Marca eliminada");
  }

  public closeDialog(): void {
    this._diagRef.close();
  }

  public saveCategories(): void {
    const newCategories: CategoryDTO[] = [];

    for(let ctrl of Object.values(this.categoriesFormArray.value)) {
      let c: any = ctrl;

      let brand = new CategoryDTO();
      brand.name = c.name;
      newCategories.push(brand);
    }

    this._categoriesService.createList(newCategories).subscribe(() => {
      this._toastrService.success("Categorias cadastradas com sucesso");
      this.categoriesFormArray.clear();
    });
  }

  public getControl(idx: number): FormControl<any> {
    return (this.categoriesFormArray.controls[idx] as FormGroup).get("name") as FormControl;
  }
}
