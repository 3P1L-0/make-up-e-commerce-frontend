import {Component, inject, OnInit, Type, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, fromEvent, map, Observable, of, switchMap} from "rxjs";
import {Product} from "../../../../../global/model/cart/Product";
import {AppProductService} from "../../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppFileService} from "../../../../../global/services/file.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAXIMUM_DESCRIPTION_SIZE, PRIVATE_ROUTES} from "../../../../../global/configs";
import {emptyString} from "../../../../../global/configs/validators/forms/validators";
import {SaleItemType} from "../../../../../global/model/cart/enums/SaleItemType";
import {AppBrandService} from "../../../../services/brand.service";
import {AppCategoryService} from "../../../../services/category.service";
import {BrandDTO} from "../../../../../global/model/cart/dto/BrandDTO";
import {CategoryDTO} from "../../../../../global/model/cart/dto/CategoryDTO";
import {SaleItemState} from "../../../../../global/model/cart/enums/SaleItemState";
import {AppBrandsComponent} from "../../../utilities/brands/brands.component";
import {AppCategoriesComponent} from "../../../utilities/categories/categories.component";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ProductVariantDTO} from "../../../../../global/model/cart/dto/ProductVariantDTO";
import {AppAddStockDialogComponent} from "./add-stock-dialog/add-stock-dialog.component";
import {AppNavigationService} from "../../../../../global/services/navigation.service";

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details.component.html',
  host: {"class": "app-product-details-module app-sale-item-details-module"},
  encapsulation: ViewEncapsulation.None
})
export class AppProductDetailsComponent implements OnInit {
  /* DEPENDENCIES */
  private readonly _productsService = inject(AppProductService);
  private readonly _filesService = inject(AppFileService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _navigationService = inject(AppNavigationService);
  private readonly _msgService = inject(MessageService);
  private readonly _diagService = inject(DialogService);
  private readonly _frmBuilder = inject(FormBuilder);
  private readonly _brandsService = inject(AppBrandService);
  private readonly _categoryService = inject(AppCategoryService);
  private readonly _router = inject(Router);
  private _confirmationService = inject(ConfirmationService);

  /* MEMBERS */
  public product: Product;
  public productImage$: Observable<string>;
  public productInReadMode: boolean;
  public productsForm: FormGroup;
  public maxDescriptionLength: number;
  public brands$: BehaviorSubject<BrandDTO[]>;
  public categories$: BehaviorSubject<CategoryDTO[]>;
  private _file: File;
  public saleItemState: string[];
  public selectedBrand: number;
  public selectedCategory: number;
  public selectedState: string;
  public variantsFormMap: Map<number, FormGroup>;
  public variantsFlagMap: Map<number, Boolean>;
  public variantsForms$: BehaviorSubject<FormGroup[]>;

  public constructor() {
    this.productInReadMode = true;
    this.maxDescriptionLength = MAXIMUM_DESCRIPTION_SIZE;
    this.brands$ = new BehaviorSubject([]);
    this.categories$ = new BehaviorSubject([]);
    this.variantsFormMap = new Map();
    this.variantsFlagMap = new Map();
    this.variantsForms$ = new BehaviorSubject([]);

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
      description: new FormControl<string>(null)
    });
    this.saleItemState = [...Object.values(SaleItemState)];
  }

  public ngOnInit() {
    if (!this._activatedRoute.snapshot.params.id) this._navigationService.requestGoBack();

    this._fetchProductById();
  }

  public handleSelectFile(evt): void {
    of(evt).subscribe(evt => this.productImage$ = (this._file = evt.target.files[0]) ?  this.readFile(this._file): of(this.product?.getDTO().img.url))
  }

  private _fetchData(): void {
    this._brandsService.fetch().subscribe(res => this.brands$.next(res));
    this._categoryService.fetch().subscribe(res => this.categories$.next(res));
  }

  private _fetchProductById(): void {
    this._productsService.fetchByID(this._activatedRoute.snapshot.params.id).subscribe({
      next: p => {
        this.product = p;
        this.productImage$ = of(p.getDTO().img.url);
        this._updateVariantsMap(...this.product.getDTO().variants);
      },
      error: () => {
        this._showToast("error", "Erro ao carregar producto");
        this.goBack();
      }
    });
  }

  private _updateVariantsMap(...variants: ProductVariantDTO[]): void {
    for(let p of variants){
      if(this.variantsFlagMap.has(p.id)) continue;
      if(!this.getVariantById(p.id)) this.product.getDTO().variants.push(p);
      this.variantsFlagMap.set(p.id, false);
    }
  }

  private readFile(file: File): Observable<string> {
    const fileReader = new FileReader();
    const src$ = fromEvent(fileReader, "loadend").pipe(map(evt => (evt.currentTarget as FileReader).result as string));
    fileReader.readAsDataURL(file);

    return src$;
  }

  public uploadImage(): void {
    this._filesService.uploadFile(this.productsForm.value.file, this.product.getId(), "product").subscribe({
      next: p => {
        this._fetchProductById();
        this.productsForm.reset({emitEvent: false});
        this._showToast("success", "Imagem actualizada com sucesso");
      },
      error: () => this._showToast("error", "Erro ao atualizar imagem"),
    });
  }

  public goBack(): void { this._navigationService.requestGoBack(); }

  private _showToast(severity: string, detail: string): void { this._msgService.add({severity, detail}); }

  public showSaveImg(): boolean { return this.productsForm.get("file")?.value?.file }

  public newProduct(): void { this._router.navigate([PRIVATE_ROUTES.productsForm]).then(); }

  public saveChanges(): void {
    this.product = new Product();
    Object.assign(this.product.getDTO(), this.productsForm.value);

    this._productsService.update(this.product.getDTO()).subscribe({
      next: (p) => {
        this.product = p;
        this._msgService.add({
          severity: "success",
          detail: "Produto editado com sucesso"
        });
        this.productsForm.reset({emitEvent: false});
        this._toggleProductEditMode();
      },
      error: (err) => { this._showToast("error", "Erro ao editar dados do produto") }
    });
  }

  public editProduct(): void { this._toggleProductEditMode(); }

  private _toggleProductEditMode(): void {
    if(!(this.productInReadMode = !this.productInReadMode)) {
      this.productsForm.patchValue({
        name: this.product.getDTO().name,
        code: this.product.getDTO().code,
        state: this.product.getDTO().state,
        category: this._frmBuilder.group({
          id: this.product.getDTO().category.id
        }),
        brand: this._frmBuilder.group({
          id: this.product.getDTO().brand.name
        }),
        kind: this.product.getDTO().kind,
        description: this.product.getDTO().description
      });

      this.selectedBrand = this.product.getDTO().brand.id;
      this.selectedCategory = this.product.getDTO().category.id;
      this.selectedState = this.product.getDTO().state;

      this._fetchData();
    }
  }

  public newBrand(): void {
    this._openDynamicDialog(AppBrandsComponent).onClose.pipe(
      switchMap(() => this._brandsService.fetch())
    ).subscribe(res => { this.brands$.next(res); })
  }

  public newCategory(): void {
    this._openDynamicDialog(AppCategoriesComponent).onClose.pipe(
      switchMap(() => this._categoryService.fetch())
    ).subscribe(res => { this.categories$.next(res); })
  }

  private _openDynamicDialog(componentName: Type<any>, data: any = null): DynamicDialogRef {
    return this._diagService.open(
      componentName,
      {
        closeOnEscape: false,
        closable: false,
        showHeader: false,
        resizable: false,
        draggable: false,
        width: "40%",
        height: "70%",
        data: data
      }
    );
  }

  private _askForConfirmation(header: string, message: string, accept: () => void): void { this._confirmationService.confirm({ header, message, accept}); }

  public toggleVariantReadMode(variantId: number): void {
    this.variantsFlagMap.set(variantId, !this.isVariantInEditMode(variantId));
    if (this.isVariantInEditMode(variantId)) this.newVariant(this.getVariantById(variantId));
  }

  public newVariant(variant: ProductVariantDTO = null): void {
    const patch = variant !== null;

    this.variantsFormMap.set(this.variantsFormMap.size, this._frmBuilder.group({
      id: new FormControl<number>(patch ? variant.id : NaN),
      code: new FormControl<string>(patch ? variant.code : null, [Validators.required]),
      price: new FormControl<number>(patch ? variant.price : null, [Validators.required]),
      color: new FormControl<string>(patch ? variant.color : null),
      density: new FormControl<string>(patch ? variant.density : null),
    }));

    this._updateView();
  }

  private _updateView(): void {
    this.variantsForms$.next([...this.variantsFormMap.values()]);
  }

  public isVariantInEditMode(variantId: number): boolean { return this.variantsFlagMap.get(variantId).valueOf(); }

  public deleteVariant(variantId: number): void {
    this._askForConfirmation(
      "Eliminar Variante",
      "Tem a certeza de que deseja eliminar esta variante?",
      () => {
        this._productsService.deleteVariantById(this.getVariantById(variantId).id).subscribe({
          next: () => this.variantsFlagMap.delete(variantId),
          error: error => this._showToast("error", "Erro ao eliminar Variante"),
        })
      }
    );
  }

  public discardChangesForVariant(formMapKey: number, askForConfirmation = true): void {
    const variantId = this._getVariantForm(formMapKey).value.id;

    if(this.variantsFormMap.get(formMapKey).untouched) {
      if (isFinite(variantId)) this.toggleVariantReadMode(variantId);
      this.variantsFormMap.delete(formMapKey);
      this._updateView();
      return;
    }

    if(askForConfirmation) {
      this._askForConfirmation(
        "Descartar Alterações",
        "Deseja descartar todas as alterações?",
        () => {
          if (isFinite(variantId)) this.toggleVariantReadMode(variantId);
          this.variantsFormMap.delete(formMapKey);
          this._updateView();
        }
      );
    }
  }

  public saveVariantChanges(formMapKey: number): void {
    const variant = Object.assign(new ProductVariantDTO(), this.variantsFormMap.get(formMapKey).value) as ProductVariantDTO;
    variant.product = this.product.getDTO();
    variant.category = this.product.getDTO().category;
    variant.kind = this.product.getDTO().kind;
    variant.state = this.product.getDTO().state;
    variant.name = variant.code;

    let verb = "editada";

    const success = (v: ProductVariantDTO) => {
      this._showToast("success", `Variante ${verb} com sucesso`);
      this.discardChangesForVariant(formMapKey, false);
      this._updateVariantsMap(v);
    };

    const error = () => this._showToast("error", `Erro ao ${verb} variante`);

    if(isNaN(variant.id)) {
      delete variant.id;
      this._productsService.newVariant(variant).subscribe({ next: v => {
        verb = "criada";
          success(v);
        }, error: () => {
          verb = "criar";
          error();
        }
      });

      return;
    }

    this._productsService.updateVariant(variant).subscribe({
      next: (v) => success(v),
      error: () => {
        verb = "editar";
        error();
      }
    });
  }

  public getVariantById(variantId: number) { return this.product.getDTO().variants.find(v => v.id === variantId); }
  private _getVariantForm(variantKey: number): FormGroup { return this.variantsFormMap.get(variantKey); }

  public editStock(variant: ProductVariantDTO): void {
    this._openDynamicDialog(AppAddStockDialogComponent, {variant}).onClose.pipe(
      switchMap((v: ProductVariantDTO) => this._productsService.fetchVariantById(v.id))
    ).subscribe(res => this._updateVariantsMap(res));
  }

  public purgeVariants(): void {
    this._askForConfirmation(
      "Eliminar Variantes",
      "Deseja eliminar todas as variantes?",
      () => {
        this._productsService.deleteVariantsList(this.product.getDTO().variants).subscribe({
          next: v => {
            this.product.getDTO().variants = [];
            this.variantsFormMap.clear();
            this.variantsFlagMap.clear();
            this._updateView();
            this._showToast("success", "Variantes eliminadas com sucesso");
          },
          error: () => this._showToast("error", "Error ao eliminar variantes")
        });
      }
    );
  }

  public editVariants(): void {
    for(let v of this.product.getDTO().variants) {
      if(this.isVariantInEditMode(v.id)) continue;
      this.toggleVariantReadMode(v.id);
    }
  }
}
