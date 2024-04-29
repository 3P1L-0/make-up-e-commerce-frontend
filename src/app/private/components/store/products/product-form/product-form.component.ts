import {Component, ElementRef, inject, OnInit, Type, ViewChild} from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {emptyString} from "src/app/global/configs/validators/forms/validators";
import {BrandDTO} from "src/app/global/model/cart/dto/BrandDTO";
import {CategoryDTO} from "src/app/global/model/cart/dto/CategoryDTO";
import {ProductDTO} from "src/app/global/model/cart/dto/ProductDTO";
import {SaleItemType} from "src/app/global/model/cart/enums/SaleItemType";
import {forkJoin, of, switchMap} from "rxjs";
import {SaleItemState} from "src/app/global/model/cart/enums/SaleItemState";
import {MessageService} from "primeng/api";
import {AppFileService} from "src/app/global/services/file.service";
import {Product} from "src/app/global/model/cart/Product";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {AppProductService} from "../../../../services/product.service";
import {AppBrandService} from "../../../../services/brand.service";
import {AppCategoryService} from "../../../../services/category.service";
import {AppCategoriesComponent} from "../../../utilities/categories/categories.component";
import {AppBrandsComponent} from "../../../utilities/brands/brands.component";
import {AppViewHeaderService} from "../../../view-header/view-header.service";
import {ProductVariantDTO} from "../../../../../global/model/cart/dto/ProductVariantDTO";

@Component({
  selector: "app-public-products-form",
  templateUrl: "./product-form.component.html",
  host: {"class": "app-public-products-form-module"}
})
export class AppProductsFormComponent implements OnInit {
  /* DEPENDENCIES */
  private readonly _frmBuilder = inject(FormBuilder);
  private readonly _productsService = inject(AppProductService);
  private readonly _brandsService = inject(AppBrandService);
  private readonly _categoryService = inject(AppCategoryService);
  private readonly _filesService = inject(AppFileService);
  private readonly _diagService = inject(DialogService);
  private readonly _msgService = inject(MessageService);
  private readonly _navigationService = inject(AppViewHeaderService);

  /* MEMBERS */
  public readonly productsForm: FormGroup;
  public readonly variantsForm: FormGroup;
  public product: Product;
  public categories: CategoryDTO[];
  public brands: BrandDTO[];
  private _selectedImage: File;
  public thumbnailSrc: string;
  public readonly saleItemState: ({key: string, value: string})[];
  private _defaultThumbnail: string;
  private _defaultFile: File;

  /* Component children */
  @ViewChild("file", {read: ElementRef<HTMLInputElement>}) fileInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.saleItemState = [];
    for(let [k,v] of Object.entries(SaleItemState)) this.saleItemState.push({key: k, value: v});

    this.productsForm = this._frmBuilder.group({
      name: new FormControl<string>(null, [Validators.required, emptyString]),
      code: new FormControl<string>(null, [Validators.required, emptyString]),
      state: new FormControl<string>(null, [Validators.required]),
      category: this._frmBuilder.group({
        id: new FormControl<number>(null, [Validators.required])
      }),
      brand: this._frmBuilder.group({
        id: new FormControl<number>(null, [Validators.required])
      }),
      kind: new FormControl<string>(Object.keys(SaleItemType)[0]),
      description: new FormControl<string>(null, [])
    });

    this.variantsForm = this._frmBuilder.group({
      variants: this._frmBuilder.array([])
    });
  }

  public ngOnInit(): void {
    this._fetchData()
    this._addVariant();
    this._filesService.fetchImgThumbnail().pipe(
      switchMap(blob => {
        this._defaultFile = this._selectedImage = new File([blob], "no_image", {type: blob.type});
        return this.readFile(this._selectedImage);
      })
    ).subscribe(base64 => { this.thumbnailSrc = this._defaultThumbnail = base64; });
  }

  public goBack(): void { this._navigationService.requestGoBack(); }

  public clearFields(): void {
    this.productsForm.reset({emitEvent: false});
    this.variantsForm.reset({emitEvent: false});
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
    this._brandsService.fetch().subscribe(res => this.brands = res);
    this._categoryService.fetch().subscribe(res => { this.categories = res; });
  }

  private _addVariant() {
    this.getVariantsFormArray().push(this._frmBuilder.group({
      code: new FormControl<string>(null, [Validators.required]),
      price: new FormControl<number>(null, [Validators.required]),
      color: new FormControl<string>(null),
      density: new FormControl<string>(null),
    }));
  }

  public getVariantsFormArray(): FormArray { return this.variantsForm.get("variants") as FormArray; }

  public newVariant(): void {
    this._addVariant();
  }

  public removeVariant(idx: number): void {
    this.getVariantsFormArray().removeAt(idx);
  }

  public newBrand(): void {
    this._openDynamicDialog(AppBrandsComponent).onClose.pipe(
      switchMap(() => this._brandsService.fetch())
    ).subscribe(res => { this.brands = res; })
  }

  public newCategory(): void {
    this._openDynamicDialog(AppCategoriesComponent).onClose.pipe(
      switchMap(() => this._categoryService.fetch())
    ).subscribe(res => { this.categories = res; })
  }

  public deleteProduct(showToastr: boolean): void {
    if(this.product?.getId()) this._productsService.deleteById(this.product.getId()).subscribe({
      next: success => {
        if(success) {
          this.product = null;
          if(showToastr) this._msgService.add({
            severity: "info",
            detail: "Produto eliminado!"
          });
        }
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

  public canSave(): boolean { return this.productsForm.valid && this.variantsForm.valid; }

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

    this.product = new Product(new ProductDTO());
    Object.assign(this.product.getDTO(), this.productsForm.value);

    this._productsService.newProduct(this.product.getDTO()).pipe(
      switchMap(dto => {
        this.product = new Product(dto);

        // to solve circular dependency issue
        const variants = [...this.getVariantsFormArray().controls.map(c => {
          let v = Object.assign(new ProductVariantDTO(), c.value);
          v.product = dto;
          v.name = c.value.code;
          v.kind = this.product.getDTO().kind;
          v.state = this.product.getDTO().state;
          v.category = this.product.getDTO().category;
          v.productStock = [];
          v.description = "";

          return v;
        })];
        delete dto.variants;

        return this._productsService.createVariantList(variants);
      }),
      switchMap(() => this._filesService.uploadFile(this._selectedImage, this.product.getId(), this.product.getDTO().kind))
    ).subscribe({
      next: () => {
        this._msgService.add({
          severity: "success",
          detail: "Produto cadastrado"
        });
        this.clearFields();
      },
      error: (err) => {
        this._msgService.add({
          severity:"error",
          detail:"Erro ao cadastrar produto"
        });
        this.deleteProduct(false);
      },
    });
  }
}
