import { Component, inject } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html"
})
export class AppProductFormComponent {
  /* DEPENDENCIES */
  private readonly _formBuilder = inject(FormBuilder);

  /* MEMBERS */
  private readonly productsForm: FormGroup;
  private readonly variantsForm: FormArray;

  constructor() {}
}
