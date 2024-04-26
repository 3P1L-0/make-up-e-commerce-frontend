import { Component, inject } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { emptyString } from "src/app/global/configs/validators/forms/validators";
import { CategoryDTO } from "src/app/global/model/cart/dto/CategoryDTO";
import {MessageService} from "primeng/api";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {AppCategoryService} from "../../../services/category.service";
import {AppSpecialtyService} from "../../../services/specialty.service";
import {SpecialtyDTO} from "../../../../global/model/cart/dto/SpecialtyDTO.ts";

@Component({
  selector: "app-specialties-view",
  templateUrl: "./specialties.component.html",
  host: {"class": "simple-utility-form-view"}
})
export class AppSpecialtiesComponent {
  /* DEPENDENCIES */
  private readonly _specialtiesService = inject(AppSpecialtyService)
  private readonly _diagRef = inject(DynamicDialogRef);
  private readonly _frmBuilder = inject(FormBuilder);
  private readonly _toastrService = inject(MessageService);

  /* MEMBERS */
  public specialtiesForm: FormGroup;

  constructor() {
    this.specialtiesForm = this._frmBuilder.group({ specialties: this._frmBuilder.array([]) });
  }

  private _addSpecialty(): void {
    this.specialtiesFormArray.push(this._frmBuilder.group({
      name: new FormControl(null, [Validators.required, emptyString])
    }));
  }

  public get specialtiesFormArray(): FormArray { return this.specialtiesForm.get("specialties") as FormArray; }

  public newSpecialty(): void { this._addSpecialty(); }

  public removeSpecialty(idx: number): void { this.specialtiesFormArray.removeAt(idx); }

  public closeDialog(): void { this._diagRef.close(); }

  public saveCategories(): void {
    if(!this.canSave()) return;

    this._specialtiesService.createList(Object.values(this.specialtiesFormArray.value).map(c => Object.assign(new SpecialtyDTO(), c))).subscribe(
      {
        next: () => this._onSuccess(),
        error: (err) => this._onError(err)
      }
    );
  }

  private _onSuccess(): void {
    this._toastrService.add({
      severity: "success",
      detail: "Especialidades cadastradas com sucesso",
      key: "specialties-toast"
    });
    this.specialtiesFormArray.clear();
  }

  private _onError(err): void {
    console.log(err);

    this._toastrService.add({
      severity: "warning",
      detail: "Erro ao cadastrar especialidades!",
      key: "specialties-toast",
      icon: "pi pi-exclamation-triangle"
    });
  }

  public canSave(): boolean { return this.specialtiesFormArray.length > 0 && this.specialtiesForm.valid; }

  public getControl(idx: number): FormControl<any> {
    return (this.specialtiesFormArray.controls[idx] as FormGroup).get("name") as FormControl;
  }
}
