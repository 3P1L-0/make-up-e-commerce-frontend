import { Component, OnInit, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { AppThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  /* DEPENDENCIES */
  private readonly _themeService = inject(AppThemeService);
  private readonly _matIconRegistry = inject(MatIconRegistry);
  public title = 'Inaluma MakeUp';

  constructor() {
    document.head.getElementsByTagName('title')[0].innerText = this.title;
    this._matIconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }

  ngOnInit(): void {
    this._themeService.init();
  }
}
