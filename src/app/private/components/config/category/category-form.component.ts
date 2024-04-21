import { Component, inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-category-form",
  templateUrl: "./category-form.component.html"
})
export class AppCategoryFormComponent {
  /* DEPENDENCIES */
  private readonly _dialogRef = inject(MatDialogRef);
  private readonly _categoryService = inject();
}
