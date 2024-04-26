import { Component, OnInit, inject } from '@angular/core';
import { AppThemeService } from './services/theme/theme.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faCirclePlus, faCircleXmark, faFilter,
  faPaperclip,
  faPenToSquare,
  faPlus,
  faRemove, faRightFromBracket, faRightToBracket,
  faSearch, faUserPlus,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { PrimeNGConfig } from 'primeng/api';
import {faShopify} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: {'class': "web-app"}
})
export class AppComponent implements OnInit {
  /* DEPENDENCIES */
  private readonly _themeService = inject(AppThemeService);
  public readonly title = 'Inaluma MakeUp';
  private readonly faIconLibrary = inject(FaIconLibrary);
  private readonly primeNgConfig = inject(PrimeNGConfig);

  constructor() {
    document.head.getElementsByTagName('title')[0].innerText = this.title;
  }

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
    this._themeService.init();
    this.faIconLibrary.addIcons(
      faPenToSquare,
      faCirclePlus,
      faPlus,
      faPaperclip,
      faXmark,
      faCheck,
      faRemove,
      faSearch,
      faRightToBracket,
      faUserPlus,
      faRightFromBracket,
      faShopify,
      faFilter,
      faCircleXmark
    );
  }
}
