import { Component, OnInit, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { AppThemeService } from './services/theme/theme.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCheck, faCirclePlus, faFile, faPaperclip, faPenToSquare, faPlus, faRemove, faXmark } from '@fortawesome/free-solid-svg-icons';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: {'class': "web-app"}
})
export class AppComponent implements OnInit {
  /* DEPENDENCIES */
  private readonly _themeService = inject(AppThemeService);
  private readonly _matIconRegistry = inject(MatIconRegistry);
  public title = 'Inaluma MakeUp';
  private readonly faIconLibrary = inject(FaIconLibrary);
  private readonly primeNgConfig = inject(PrimeNGConfig);

  constructor() {
    document.head.getElementsByTagName('title')[0].innerText = this.title;
    this._matIconRegistry.setDefaultFontSetClass('material-symbols-rounded');
  }

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
    this._themeService.init();
    this.faIconLibrary.addIcons(faPenToSquare, faCirclePlus, faPlus, faPaperclip, faXmark, faCheck, faRemove)
  }
}
