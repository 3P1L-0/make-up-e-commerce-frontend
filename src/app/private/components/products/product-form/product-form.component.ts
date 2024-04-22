import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject, Type} from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { emptyString } from "src/app/global/configs/validators/forms/validators";
import { BrandDTO } from "src/app/global/model/cart/dto/BrandDTO";
import { CategoryDTO } from "src/app/global/model/cart/dto/CategoryDTO";
import { ProductDTO } from "src/app/global/model/cart/dto/ProductDTO";
import { SaleItemType } from "src/app/global/model/cart/enums/SaleItemType";
import { Observable, concatMap, delay, fromEvent, map, of, switchMap, tap } from "rxjs";
import { SaleItemState } from "src/app/global/model/cart/enums/SaleItemState";
import {ConfirmationService, MessageService} from "primeng/api";
import { PUBLIC_ROUTES } from "src/app/global/configs";
import { AppFileService } from "src/app/global/services/file.service";
import { FileDTO } from "src/app/global/model/FileDTO";
import { Product } from "src/app/global/model/cart/Product";
import { ProductVariantDTO } from "src/app/global/model/cart/dto/ProductVariantDTO";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {AppProductService} from "../../../services/product.service";
import {AppBrandService} from "../../../services/brand.service";
import {AppCategoryService} from "../../../services/category.service";
import {AppBrandsComponent} from "../../utilities/brands/brands.component";
import {AppCategoriesComponent} from "../../utilities/categories/categories.component";

@Component({
  selector: "app-public-products-form",
  templateUrl: "./product-form.component.html",
  host: {"class": "app-public-products-form-module"}
})
export class AppPublicProductsFormComponent implements OnInit, AfterViewInit {
  /* DEPENDENCIES */
  private readonly _frmBuilder = inject(FormBuilder);
  private readonly _productsService = inject(AppProductService);
  private readonly _brandsService = inject(AppBrandService);
  private readonly _categoryService = inject(AppCategoryService);
  private readonly _activeRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  private readonly _filesService = inject(AppFileService);
  private readonly _diagService = inject(DialogService);
  private readonly _confirmationService = inject(ConfirmationService);
  private readonly _msgService = inject(MessageService);

  /* MEMBERS */
  public readonly productsForm: FormGroup;
  public readonly variantsForm: FormGroup;
  public product: Product;
  public categories: CategoryDTO[];
  public brands: BrandDTO[];
  private _selectedImage: File;
  public thumbnailSrc: string;
  public readonly saleItemState: ({key: string, value: string})[];
  private _products: Product[];
  public publicProducts: Product[];
  private _defaultThumbnail: string;
  private _dafaultFile: File;
  public variants: any[];

  /* FLAGS */
  private _editindProduct: boolean;
  private _editingVariants: boolean;
  public allVariantsSelected: boolean;

  /* Component children */
  @ViewChild('searchInput', {read: ElementRef<HTMLInputElement>}) searchInput!: ElementRef<HTMLInputElement>;
  @ViewChild("file", {read: ElementRef<HTMLInputElement>}) fileInput!: ElementRef<HTMLInputElement>;


  constructor() {
    this.variants = [];
    this.productsForm = this._frmBuilder.group({
      name: new FormControl<string>(null, [Validators.required, emptyString]),
      code: new FormControl<string>(null, [Validators.required, emptyString]),
      state: new FormControl<string>(null, [Validators.required]),
      category: new FormControl<number>(null, [Validators.required]),
      brand: new FormControl<number>(null, [Validators.required]),
      kind: new FormControl<string>(Object.keys(SaleItemType)[0]),
      description: new FormControl<string>(null, [])
    });

    this.variantsForm = this._frmBuilder.group({
      variants: this._frmBuilder.array([])
    });

    this.saleItemState = [];
    for(let [k,v] of Object.entries(SaleItemState)) this.saleItemState.push({key: k, value: v});
  }

  public ngOnInit(): void {
    const productId = Number(this._activeRoute.snapshot.params.id);
    this.publicProducts = [];

    if((this._editindProduct = Number.isFinite(productId))) {
      this._productsService.fetchByID(productId).pipe(
        map(res => this.product = new Product(res)),
        switchMap(prod => this.serveImg(prod.getDTO().img.fileHash))
      ).subscribe(base64 => { // viewing the details of an existing product
        this.product.base64Img = base64;
        this.toggleEditingVariants();

        this._productsService.fetchVariants().subscribe(dtos => {
          dtos.forEach(dto => this.variants.push([dto, false]));
        })
      });
    } else { // adding new product
      this._fetchData()
      this._addVariant();
      this._filesService.fetchImgThumbnail().pipe(
        switchMap(blob => {
          this._dafaultFile = this._selectedImage = new File([blob], "no_image", {type: blob.type});
          return this.readFile(this._selectedImage);
        })
      ).subscribe(base64 => { this.thumbnailSrc = this._defaultThumbnail = base64; });
    };

    this._fillSideMenu();
  }

  public ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      concatMap((evt: KeyboardEvent) => (evt.target as HTMLInputElement).value),
      delay(1000),
      concatMap(str => this?.filterProducts(str)),
      map(res => res ?? this._products)
    ).subscribe({
      next: prods => this.publicProducts = prods
    });
  }

  public handleSelectFile(evt): void {
    of(evt).pipe(
      switchMap((evt: any) => {
        if(evt.target.files[0]) {
          this._selectedImage = evt.target.files[0];
          return this.readFile(this._selectedImage);
        } else {
          this._selectedImage = this._dafaultFile;
          return of(this._defaultThumbnail)
        };
      })
    ).subscribe(imgSrc => { this.thumbnailSrc = imgSrc; });
  }

  private _fetchData(): void {
    this._brandsService.fetch().subscribe(res => this.brands = res);
    this._categoryService.fetch().subscribe(res => { this.categories = res; });
  }

  private _fillSideMenu(): void {
    this._productsService.fetch().pipe(
      map(dtos => this._products = dtos.map(dto => new Product(dto))),
      tap(prods => { prods.forEach(prod => this.serveImg(prod.getDTO().img.fileHash).subscribe(base64 => prod.base64Img = base64)) })
    ).subscribe({
      next: prods => this._products = this.publicProducts = prods
    });
  }

  public filterProducts(filterString: string): Observable<Product[]> {
    return of(this._products).pipe(
      map(ps => ps?.filter(p => {
        let matchstring = p.getDTO().brand.name;
        matchstring += p.getDTO().category.name;
        matchstring += p.getDTO().code;
        matchstring += p.getDTO().state

        return matchstring.toLowerCase().includes(filterString.toLowerCase());
      }))
    );
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

  public get isEditingProduct(): boolean { return this._editindProduct; }

  public get isEditingVariants(): boolean { return this._editingVariants; }

  public get canEditVariant(): boolean { return !!this.product; }

  public newBrand(): void {
    this._openDynamicDialog(AppBrandsComponent).onClose.pipe(
      switchMap(() => this._brandsService.fetch())
    ).subscribe(res => { this.brands = res; })
  }

  public newCategory(): void {
    this._openDynamicDialog(AppCategoriesComponent).onClose.pipe(
      switchMap(() => this._brandsService.fetch())
    ).subscribe(res => { this.brands = res; })
  }

  public abortOperation(): void {
    this._confirmationService.confirm({
      message: "Deseja cancelar esta operação?",
      closeOnEscape: false,
      dismissableMask: false,
      acceptLabel: "Sim",
      rejectLabel: "Não",
      defaultFocus: "reject",
      accept: () => {
        this._router.navigate([PUBLIC_ROUTES.products])
      }
    })
  }

  public saveVariants(): void {

  }

  public saveProduct(): void {
    if(this.productsForm.invalid) return;

    this.product = new Product(new ProductDTO());
    Object.assign(this.product, this.productsForm.value);

    this.product.getDTO().category = new CategoryDTO();
    this.product.getDTO().category.id = this.productsForm.value.category;

    this.product.getDTO().brand = new BrandDTO();
    this.product.getDTO().brand.id = this.productsForm.value.brand;

    this._productsService.newProduct(this.product.getDTO()).pipe(
      switchMap(dto => {
        this.product = new Product(dto);

        const file = new FileDTO();
        file.product = dto;

        return this._filesService.uploadFile(this._selectedImage, dto.id, "product");
      }),
      switchMap(imgDTO => this.serveImg(imgDTO.fileHash))
    ).subscribe({
      next: (base64) => {
        this.product.base64Img = base64;
        this._msgService.add({
          severity: "success",
          detail: "Producto cadastrado"
        });
        this._fillSideMenu();
        this.toggleEditProduct();
      },
      error: () => {
        this._msgService.add({
          severity:"error",
          detail:"Erro ao cadastrar produto"
        });
        this.deleteProduct(false);
      },
    });
  }

  public deleteProduct(showToastr: boolean): void {
    this._productsService.deleteById(this.product.getId()).subscribe({
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

  public toggleEditProduct(): void {
    if(!this.product) this._editindProduct = false;
    else this._editindProduct = !this._editindProduct;
  }

  public toggleEditingVariants(): void {
    if(!this.canEditVariant) this._editingVariants = false;
    else this._editingVariants = !this._editingVariants;
  }

  public handleSelectAll(evt): void {

  }

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

  public serveImg(imgHash: string): Observable<string> { return this._filesService.downloadFile(imgHash).pipe(switchMap(blob => this.readFile(blob))); }
}
