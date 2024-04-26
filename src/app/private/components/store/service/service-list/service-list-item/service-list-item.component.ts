import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {ConfirmationService, MenuItem} from "primeng/api";

@Component({
  selector: 'app-service-list-item-view',
  templateUrl: './service-list-item.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {"class": "app-service-list-item-module"}
})
export class ServiceListItemComponent implements OnInit {
  /* DEPENDENCIES */
  private readonly _confirmationService = inject(ConfirmationService);
  /* MEMBERS */
  public readonly menuModel: MenuItem[];

  constructor() {
    this.menuModel = [
      {
        tooltipOptions: {
          tooltipLabel: "Editar",
          tooltipPosition: "left"
        },
        icon: "pi pi-pencil",
        command: () => {}
      },
      {
        tooltipOptions: {
          tooltipLabel: "Detalhes",
          tooltipPosition: "left"
        },
        icon: "pi pi-info",
        command: () => {}
      },
      {
        tooltipOptions: {
          tooltipLabel: "Eliminar",
          tooltipPosition: "left"
        },
        icon: "pi pi-trash",
        command: () => this._askForConfirmation()
      }

    ]
  }

  private _askForConfirmation(): void {
    this._confirmationService.confirm({
      message: "Tem a certeza que deseja eliminar este serviço?",
      accept: () => {}
    });
  }

  ngOnInit(): void {
  }
}
