import {Component, inject, ViewEncapsulation} from "@angular/core";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {StockOperationType} from "../../../../../../global/model/cart/enums/StockOperationType";

@Component({
  selector: 'app-add-stock-dialog-view',
  templateUrl: './add-stock-dialog.component.html',
  host: {"class": "app-add-stock-dialog-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppAddStockDialogComponent {
  /* DEPENDENCIES */
  private readonly _diagRef = inject(DynamicDialogRef);
  private readonly _frmBuilder = inject(FormBuilder);

  /* MEMBERS */
  public readonly variant = inject(DynamicDialogConfig).data.variant;
  public readonly stockForm: FormGroup;
  public readonly operationTypes: typeof StockOperationType;

  constructor() { this.operationTypes = StockOperationType; }

  public persist(): void {

  }

  public discard(): void {}

  private closeDiag(persist: boolean): void { this._diagRef.close(persist); }
  public canSave(): boolean { return this.stockForm.valid; }
}
