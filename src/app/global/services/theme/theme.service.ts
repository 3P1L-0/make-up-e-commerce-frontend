import { Injectable, inject, RendererFactory2, Renderer2 } from "@angular/core";
import { THEME_MODE, LOCAL_STORAGE } from "../../configs";

@Injectable({providedIn: 'root'})
export class AppThemeService {
  /* DEPENDENCIES */
  private readonly _rendererFactory = inject(RendererFactory2);

  /* MEMBERS */
  private _renderer: Renderer2;

  constructor() { this._renderer = this._rendererFactory.createRenderer(null, null); }

  /** Sets the theme mode to its default */
  public init(): void { this.setTheme(THEME_MODE.dark); }

  /** Reads the currently set theme */
  public get getCurrentThemeLS(): THEME_MODE {
    try {
      return localStorage.getItem(LOCAL_STORAGE.theme) as THEME_MODE;
    } catch(err) {
      alert('Epa, faltam-nos palavras...! Um erro aconteceu e pedimos que volte a iniciar sessão. Obrigado');
      localStorage.clear();
      window.location.reload();
    }
  }

  public isDarkMode(): boolean { return this.getCurrentThemeLS === THEME_MODE.dark; }

  /**
  * This method simply changes a theme to it's dark or light mode, to change to a different
  * theme, use {@link setTheme}
  */
  public toggleDarkMode(): boolean {
    this.setTheme(this.isDarkMode() ? THEME_MODE.light : THEME_MODE.dark);
    return this.isDarkMode();
  }

  public setTheme(theme: THEME_MODE): void { this._activateMode(theme); }

  /** activates new theme mode */
  private _activateMode(theme: THEME_MODE): void {
    this._deactivateMode();

    this._renderer.addClass(document.body, theme);
    localStorage.setItem(LOCAL_STORAGE.theme, theme);
  }

  /** Deactivate old theme mode */
  private _deactivateMode(): void {
    const theme = this.getCurrentThemeLS;

    if(theme == null) return;

    this._renderer.removeClass(document.body, theme);
    localStorage.removeItem(LOCAL_STORAGE.theme);
  }
}
