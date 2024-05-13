import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  host: {"class": "app-checkout-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppCheckoutComponent implements OnInit {
  private readonly _formBuilder = inject(FormBuilder);
  public billingAddressForm: FormGroup;
  public paymentForm: FormGroup;

  constructor() {
    this.billingAddressForm = this._formBuilder.group({
      name: new FormControl<string>(null, Validators.required),
      surname: new FormControl<string>(null, Validators.required),
      country: new FormControl<string>(null, Validators.required),
      zipcode: new FormControl<string>(null),
      addressLine1: new FormControl<string>(null),
      addressLine2: new FormControl<string>(null),
      contactNumber: new FormControl(null, Validators.required),
    });

    this.paymentForm = this._formBuilder.group({
      methodDetails: this._formBuilder.group({
        cardNumber: new FormControl(null, Validators.required),
        cardName: new FormControl(null, Validators.required),
        expiryMonth: new FormControl(null, Validators.required),
        expiryYear: new FormControl(null, Validators.required),
        cve: new FormControl(null, Validators.required)
      })
    });
  }

  ngOnInit(): void {
  }

}
