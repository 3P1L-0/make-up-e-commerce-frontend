import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sale-item-preview-view',
  templateUrl: './sale-item-preview.component.html',
  host: {"class": "sale-item-preview-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppSaleItemPreviewComponent implements OnInit {
  public itemName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
