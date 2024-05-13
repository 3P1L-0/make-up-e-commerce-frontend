import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-item-view',
  templateUrl: './sale-item.component.html',
  host: {"class": "sale-item-module"}
})
export class AppSaleItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
