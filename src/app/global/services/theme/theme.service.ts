import { Injectable, inject, RendererFactory2, Renderer2 } from "@angular/core";
import { OverlayContainer } from "ngx-toastr";
import { THEME_MODE, LOCAL_STORAGE } from "../../configs";

@Injectable({providedIn: 'root'})
export class AppThemeService {
  /* DEPENDENCIES */
  private readonly _rendererFactory = inject(RendererFactory2);
  private readonly _overLayContainer = inject(OverlayContainer);

  /* MEMBERS */
  private _renderer: Renderer2;

  constructor() { this._renderer = this._rendererFactory.createRenderer(null, null); }

  /** Sets the theme mode to its default */
  public init(): void { this.setTheme(THEME_MODE.dark); }

  /** Reads the currently set theme */
  public get getCurrentThemeLS(): THEME_MODE {
    try {
      const currTheme = localStorage.getItem(LOCAL_STORAGE.theme);
      return currTheme as THEME_MODE;
    } catch(err) {
      alert('Epa, faltam-nos palavras...! Um erro aconteceu e pedimos que volte a iniciar sessão. Obrigado');
      localStorage.clear();
      window.location.reload();
    }
  }

  public isDarkMode(): boolean { return this.getCurrentThemeLS == THEME_MODE.dark; }

  /** Deactivate old theme mode */
  private _deactivateMode(): void {
    const theme = this.getCurrentThemeLS;

    if(theme == null) return;

    this._renderer.removeClass(document.body, theme);
    this._overLayContainer.getContainerElement().classList.remove(theme);
  }

  /** activates new theme mode */
  private _activateMode(theme: THEME_MODE): void {
    this._deactivateMode();

    console.log("setting the theme to " + theme);
    this._renderer.addClass(document.body, theme);
    this._overLayContainer.getContainerElement().classList.add(theme);
  }

  /**
  * @description Checks whether the currently set theme is dark or light
  * @returns `true` if the currently set theme is dark and `false`if it is not.
  */
  public isDarkThemeMode(): boolean { return this.getCurrentThemeLS == THEME_MODE.dark; }

  /**
  * This method simply changes a theme to it's dark or light mode, to change to a different
  * theme, use {@link setTheme}
  */
  public toggleDarkMode(): void {
    var themeMode = this.isDarkMode ? THEME_MODE.light : THEME_MODE.dark;

    this.setTheme(themeMode);
  }

  public setTheme(theme: THEME_MODE): void {
    this._activateMode(theme);
    localStorage.setItem(LOCAL_STORAGE.theme, theme);
  }
}
