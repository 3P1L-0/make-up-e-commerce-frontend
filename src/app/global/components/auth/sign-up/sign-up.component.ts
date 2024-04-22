import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren, inject } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { emptyString, fieldsMismatch, usernameTaken } from "src/app/global/configs/validators/forms/validators";
import { AppAuthService } from "src/app/global/components/auth/auth.service";
import { Router } from "@angular/router";
import { PUBLIC_ROUTES } from "src/app/global/configs";
import { AppGenderService } from "src/app/global/services/gender.service";
import { PersonDTO } from "src/app/global/model/user/dto/PersonDTO";
import { CredentialsDTO } from "src/app/global/model/auth";
import { GenderDTO } from "src/app/global/model/user/dto/GenderDTO";
import { SecurityQuestionDTO } from "src/app/global/model/user/dto/SecurityQuestionDTO";
import { AccountDTO } from "src/app/global/model/user/dto/AccountDTO";
import { UserDTO } from "src/app/global/model/user/dto/UserDTO";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  host: {'class': 'app-signup-module'}
})
export class AppSignUpComponent implements OnInit, AfterViewInit {
  /* DEPENDENCIES */
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _authService = inject(AppAuthService);
  private readonly _router = inject(Router);
  private readonly _genderService = inject(AppGenderService);

  /* MEMBERS */
  public readonly signUpForm: FormGroup;
  public inputType: string;
  public isHidden: boolean;
  public genders: GenderDTO[];
  public sectionTitle: string;
  private currentFormSection: ElementRef<HTMLDivElement>;
  public hideFinish: boolean;
  public hidePrevious: boolean;

  @ViewChildren("formSection") formSections: QueryList<ElementRef<HTMLDivElement>>;

  constructor() {
    this.signUpForm = this._formBuilder.group({
      person: this._formBuilder.group({
        name: new FormControl<string>(null, [Validators.required]),
        surname: new FormControl<string>(null, [Validators.required]),
        gender: this._formBuilder.group({
          id: new FormControl<number>(null, [Validators.required])
        }),
        contact: new FormControl<string>(null, [Validators.required])
      }),
      credentials: this._formBuilder.group({
        username: new FormControl<string>(null, [Validators.required, Validators.minLength(4), emptyString], usernameTaken(this._authService)),
        password: new FormControl<string>(null, [Validators.required, Validators.minLength(6), emptyString]),
        confirm_password: new FormControl<string>(null, [fieldsMismatch('password')])
      }),
      securityQuestions: this._formBuilder.array([
        this._formBuilder.group(
          {
            question: new FormControl<string>(null, [Validators.required, Validators.minLength(6)]),
            answer: new FormControl<string>(null, [Validators.required])
          }
        ),
        this._formBuilder.group(
          {
            question: new FormControl<string>(null, [Validators.required, Validators.minLength(6)]),
            answer: new FormControl<string>(null, [Validators.required])
          }
        ),
        this._formBuilder.group(
          {
            question: new FormControl<string>(null, [Validators.required, Validators.minLength(6)]),
            answer: new FormControl<string>(null, [Validators.required])
          }
        )
      ])
    });

    this.inputType = "password";
    this.isHidden = true;
    this.hideFinish = true;
    this.hidePrevious = false;
  }

  public ngOnInit(): void {
    this._genderService.fetch().subscribe(g => { this.genders = g.map(i => i.getDTO()) });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.currentFormSection = this.formSections.first
      this.sectionTitle = this.currentFormSection.nativeElement.dataset.sectiontitle;
      this.currentFormSection.nativeElement.classList.add("active");
    }, 0);
  }

  public nextSection(): void { this.activateSection(false); }
  public previousSection(): void { this.activateSection(true); }

  public signIn(): void { this._router.navigate([PUBLIC_ROUTES.signIn]).then(); }


  public home(): void {
    this._router.navigate([PUBLIC_ROUTES.home]).then();
  }

  public getPersonControls(name: string): FormControl<any> { return this.getForm("person").get(name) as FormControl; }
  public getGenderControls(name: string): FormControl<any> { return this.getPersonControls("gender").get(name) as FormControl; }
  public getCredentialsControls(name: string): FormControl<any> { return this.getForm("credentials").get(name) as FormControl; }

  public getForm(name: string): FormGroup | FormArray {
    if(name.includes("securityQuestions")) return this.signUpForm.get(name) as FormArray;
    else return this.signUpForm.get(name) as FormGroup;
  }

  public getSecurityQuestions(): FormArray { return this.getForm("securityQuestions") as FormArray; }

  public getSecurityQuestion(idx: number, controlName: string): FormControl<any> {
    return this.getSecurityQuestions().controls[idx].get(controlName) as FormControl<any>;
  }

  public activateSection(previous: boolean): void {
    const currIdx = this.formSections.toArray().indexOf(this.currentFormSection);
    if(previous) {
      if(currIdx === 0) return;
    } else {
      if(currIdx === this.formSections.length) return;
    }

    const newIdx = previous ? currIdx - 1 : currIdx + 1;
    this.currentFormSection.nativeElement.classList.remove("active");
    this.currentFormSection = this.formSections.get(newIdx);
    this.currentFormSection.nativeElement.classList.add("active");
    this.sectionTitle = this.currentFormSection.nativeElement.dataset.sectiotitle;
    this.hideFinish = newIdx !== (this.formSections.length-1);
    this.hidePrevious = newIdx === 0;

    switch(newIdx) {
      case 0:
        this.sectionTitle = "Dados Pessoais";
        break;
      case 1:
        this.sectionTitle = "Credenciais";
        break;
      case 2:
        this.sectionTitle = "Perguntas de Segurança";
        break;
    }
  }

  public signUp(): void {
    if(!this.signUpForm.valid) return;

    const person: PersonDTO = Object.assign(new PersonDTO(), this.signUpForm.value.person);
    const credentials = Object.assign(new CredentialsDTO(), this.signUpForm.value.credentials);
    delete credentials.confirm_password;

    const acc: AccountDTO = new AccountDTO();
    acc.user = new UserDTO();
    acc.user.person = person;
    acc.credentials = credentials;
    acc.securityQuestions = new Array<SecurityQuestionDTO>();

    this.getSecurityQuestions().value.forEach(q => {
      acc.securityQuestions.push(Object.assign(new SecurityQuestionDTO(), q));
    })

    this._authService.signUp(acc);
  }
}
