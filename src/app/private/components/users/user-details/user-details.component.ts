import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {UserDTO} from "../../../../global/model/user/dto/UserDTO";
import {AppUsersService} from "../../../services/users.service";
import {ActivatedRoute} from "@angular/router";
import {CredentialsDTO} from "../../../../global/model/auth";
import {SecurityQuestionDTO} from "../../../../global/model/user/dto/SecurityQuestionDTO";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-details-view',
  templateUrl: './user-details.component.html',
  host: {"class": "app-user-details-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppUserDetailsComponent implements OnInit {
  private readonly _userService = inject(AppUsersService);
  private readonly _activatedRoute = inject(ActivatedRoute);

  public user: UserDTO;
  public credentials: CredentialsDTO;
  public securityQuestions: SecurityQuestionDTO[];
  public userForm: FormGroup;
  public securityQuestionsForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this._userService.fetchByUserId(Number(this._activatedRoute.snapshot.params.id)).subscribe({
      next: u => this.user = u,
      error: () => {}
    })
  }

  public get registrationDate(): Date {
    return new Date(Date.parse(this.user?.createdAt))
  }

  public get userStatus(): string { return this.user?.blocked ? "Bloqueado" : "Activo" }

  public get lastModificationDate(): Date { return new Date(Date.parse(this.user?.lastModifiedAt))}
}
