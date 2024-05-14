import {Component, inject, OnInit, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserDTO} from "../../../../global/model/user/dto/UserDTO";
import {AppUsersService} from "../../../services/users.service";
import {MessageService} from "primeng/api";
import {AppNavigationService} from "../../../../global/services/navigation.service";
import {PRIVATE_ROUTES} from "../../../../global/configs";

@Component({
  selector: "app-users-view",
  templateUrl: "./users.component.html",
  host: {"class": "app-users-list-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppUsersComponent implements OnInit {
  /* DEPENDENCIES */
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _usersService = inject(AppUsersService);
  private readonly _msgService = inject(MessageService);
  private readonly _navigationService = inject(AppNavigationService);

  /* MEMBERS */
  public isEmployee: boolean;
  public users: UserDTO[];

  constructor() {
    this.isEmployee = this._activatedRoute.snapshot.data.isEmployee;
  }

  public ngOnInit(){
    if(this.isEmployee) this._usersService.fetchEmployees().subscribe({
      next: users => { this.users = users; },
      error: e => { this._showToast("error", "Erro ao carregar funcionários"); }
    });
    else this._usersService.fetchUsers().subscribe({
      next: users => { this.users = users; },
      error: e => { this._showToast("error", "Erro ao carregar utilizadores"); }
    })
  }

  public newEmployee(): void { this._navigationService.navigateTo([this.isEmployee ? PRIVATE_ROUTES.employeesNew : PRIVATE_ROUTES.employeesNew]); }

  public onUpdate(usr: UserDTO): void { this.users[this.users.indexOf(usr)] = usr; }
  public onRemove(usr: UserDTO): void { this.users.splice(this.users.indexOf(usr), 1); }

  private _showToast(severity: string, detail: string): void { this._msgService.add({severity, detail}); }
}
