import {Component, ElementRef, inject, OnInit, Type, ViewChild} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {emptyString} from "src/app/global/configs/validators/forms/validators";
import {SaleItemType} from "src/app/global/model/cart/enums/SaleItemType";
import {Observable, of, switchMap} from "rxjs";
import {SaleItemState} from "src/app/global/model/cart/enums/SaleItemState";
import {MessageService} from "primeng/api";
import {AppFileService} from "src/app/global/services/file.service";
import {FileDTO} from "src/app/global/model/FileDTO";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {AppBrandService} from "../../../../services/brand.service";
import {AppViewHeaderService} from "../../../view-header/view-header.service";
import {HttpClient} from "@angular/common/http";
import {Service} from "../../../../../global/model/cart/Service";
import {SpecialtyDTO} from "../../../../../global/model/cart/dto/SpecialtyDTO.ts";
import {AppServiceService} from "../../../../services/services.service";
import {AppSpecialtyService} from "../../../../services/specialty.service";
import {AppSpecialtiesComponent} from "../../../utilities/especialties/specialties.component";
import {ServiceSpecialtyDTO} from "../../../../../global/model/cart/dto/ServiceSpecialtyDTO";

@Component({
  selector: "app-service-form",
  templateUrl: "./service-form.component.html",
  host: {"class": "app-service-form-module"}
})
export class AppServiceFormComponent implements OnInit {
  /* DEPENDENCIES */
  private readonly _frmBuilder = inject(FormBuilder);
  private readonly _brandsService = inject(AppBrandService);
  private readonly _filesService = inject(AppFileService);
  private readonly _diagService = inject(DialogService);
  private readonly _msgService = inject(MessageService);
  private readonly _navigationService = inject(AppViewHeaderService);
  private readonly _serviceService = inject(AppServiceService);
  private readonly  _specialtyService = inject(AppSpecialtyService);
  private readonly  _http = inject(HttpClient);

  /* MEMBERS */
  public readonly servicesForm: FormGroup;
  public service: Service;
  public specialties: SpecialtyDTO[];
  private _selectedImage: File;
  public thumbnailSrc: string;
  public readonly saleItemState: ({key: string, value: string})[];
  private _defaultThumbnail: string;
  private _defaultFile: File;

  /* Component children */
  @ViewChild("file", {read: ElementRef<HTMLInputElement>}) fileInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.saleItemState = [];

    this.servicesForm = this._frmBuilder.group({
      description: new FormControl<string>(null),
      code: new FormControl<string>(null, [Validators.required, emptyString]),
      name: new FormControl<string>(null, [Validators.required, emptyString]),
      state: new FormControl<string>(null, [Validators.required]),
      kind: new FormControl<string>(Object.keys(SaleItemType)[1]),
      duration: this._frmBuilder.group({
        days: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
        hours: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
        minutes: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
      }),
      price: new FormControl<number>(null, [Validators.required]),
      specialties:new FormControl<number[]>(null, [Validators.required])
    });

    this.servicesForm.get("specialties").valueChanges.subscribe(v => this.specialties = v);

    for(let [k,v] of Object.entries(SaleItemState)) this.saleItemState.push({key: k, value: v});
  }

  public ngOnInit(): void {
    this._fetchData()
    this._filesService.fetchImgThumbnail().pipe(
      switchMap(blob => {
        this._defaultFile = this._selectedImage = new File([blob], "no_image", {type: blob.type});
        return this.readFile(this._selectedImage);
      })
    ).subscribe(base64 => { this.thumbnailSrc = this._defaultThumbnail = base64; });
  }

  public goBack(): void { this._navigationService.requestGoBack(); }

  public clearFields(): void {
    this.servicesForm.reset({emitEvent: false});
  }

  public handleSelectFile(evt): void {
    of(evt).pipe(
      switchMap((evt: any) => {
        if(evt.target.files.length) {
          this._selectedImage = evt.target.files[0];
          return this.readFile(this._selectedImage);
        } else {
          this._selectedImage = this._defaultFile;
          return of(this._defaultThumbnail)
        }
      })
    ).subscribe(imgSrc => { this.thumbnailSrc = imgSrc; });
  }

  private _fetchData(): void {
    this._specialtyService.fetch().subscribe(res => { this.specialties = res; });
  }

  public newSpecialty(): void {
    this._openDynamicDialog(AppSpecialtiesComponent).onClose.pipe(
      switchMap(() => this._specialtyService.fetch())
    ).subscribe(res => { this.specialties = res; })
  }

  public deleteService(showToastr: boolean): void {
    this._serviceService.deleteById(this.service.getId()).subscribe({
      next: () => {
        this.service = null;
        if(showToastr) this._msgService.add({
          severity: "info",
          detail: "Serviço eliminado!"
        });
      }
    })
  }

  private readFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.addEventListener("loadend", evt => { resolve((evt.currentTarget as FileReader).result as string); });
      fileReader.addEventListener("error", evt => { reject(evt); });
      fileReader.readAsDataURL(file);
    });
  }

  public canSave(): boolean { return this.servicesForm.valid; }

  private _openDynamicDialog(componentName: Type<any>): DynamicDialogRef {
    return this._diagService.open(
      componentName,
      {
        closeOnEscape: false,
        closable: false,
        showHeader: false,
        resizable: false,
        draggable: false,
        width: "40%",
        height: "70%"
      }
    );
  }

  public save(): void {
    if(!this.canSave()) return;

    this.service = new Service();
    Object.assign(this.service.getDTO(), this.servicesForm.value);

    this.service.getDTO().specialties = [...(this.servicesForm.value.specialties as Array<number>).map(id => {
      let s = new ServiceSpecialtyDTO();
      s.specialty = this.specialties.find(specialty => specialty.id === id);
      return s
    })];

    this._serviceService.createService(this.service.getDTO()).pipe(
      switchMap((serv) =>  {
        const file = new FileDTO();
        file.service = serv;
        return this._filesService.uploadFile(this._selectedImage, this.service.getDTO().id, "service");
      })
    ).subscribe({
      next: () => {
        this._msgService.add({ severity: "success", detail: "Serviço cadastrado" });
        this.clearFields();
      },
      error: (err) => { this._handleObservableError(err) },
    });
  }

  private _handleObservableError(err): void {
    this._msgService.add({
      severity:"error",
      detail:"Erro ao cadastrar serviço"
    });
    console.log(err.error);
    console.log(err.detail?.message);
    console.log(err);
    this.deleteService(false);
  }
}
