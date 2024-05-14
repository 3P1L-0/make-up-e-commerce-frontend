import {Component, EventEmitter, inject, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {UserDTO} from "../../../../../global/model/user/dto/UserDTO";
import {AppNavigationService} from "../../../../../global/services/navigation.service";
import {PRIVATE_ROUTES} from "../../../../../global/configs";
import {ConfirmationService, MessageService} from "primeng/api";
import {AppUsersService} from "../../../../services/users.service";

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  host: {"class": "app-user-list-item-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppUserListItemComponent implements OnInit {
  private readonly _navigationService = inject(AppNavigationService);
  private readonly _confirmationService = inject(ConfirmationService);
  private readonly _msgService = inject(MessageService);
  private readonly _userService = inject(AppUsersService);

  @Input() public user: UserDTO;
  @Output() public updateInList: EventEmitter<UserDTO>;
  @Output() public removeFromList: EventEmitter<UserDTO>;

  constructor() {
    this.updateInList = new EventEmitter<UserDTO>();
    this.removeFromList = new EventEmitter<UserDTO>();
  }

  ngOnInit(): void {
  }

  public info(): void {
    console.log("navigating to ")
    console.log([this.isEmployee() ? PRIVATE_ROUTES.employeesDetails : PRIVATE_ROUTES.clientsDetails, this.user?.id.toString()])
    this._navigationService.navigateTo([this.isEmployee() ? PRIVATE_ROUTES.employeesDetails : PRIVATE_ROUTES.clientsDetails, this.user?.id.toString()]); }

  public trash(): void {
    this._askForConfirmation(
      "Eliminar Utilizador",
      "Deseja remover a conta deste utilizador?",
      () => {
        this._userService.deleteByUserId(this.user.id).subscribe({
          next: () => {
            this._showToast("success", "Utilizador removido com sucesso");
            this.removeFromList.emit(this.user);
          },
          error: () => { this._showToast("error", "Erro ao remover utilizador"); }
        })
      }
    );
  }

  public block(): void {
    this._askForConfirmation(
      "Bloquear Utilizador",
      "Deseja bloquear este utilizador?",
      () => {
        this._userService.blockById(this.user.id).subscribe({
          next: u => {
            this.updateInList.emit(u);
            this._showToast("success", "Utilizador bloqueado");
          },
          error: e => { this._showToast("error", "Erro ao bloquear utilizador"); }
        });
      }
    )
  }

 private isEmployee(): boolean { return this.user?.role.employee; }

  private _showToast(severity: string, detail: string): void { this._msgService.add({severity, detail}); }

  private _askForConfirmation(header: string, message: string, accept: () => void): void { this._confirmationService.confirm({ header, message, accept}); }
}
