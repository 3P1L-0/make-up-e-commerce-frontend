import { ElementRef, Injectable, RendererFactory2, inject } from "@angular/core";
import { LAYOUT_CLASSES, MAIN_MENU_ELEMENTS } from "../../configs";

@Injectable({providedIn: 'root'})
export class AppMenuService {
  /* MEMBERS */
  private toggleClass(elem: HTMLElement | ElementRef<HTMLElement>, cls: string, remove: boolean): void {
    let el = elem instanceof ElementRef ? elem.nativeElement : elem;
    console.log("removing? " + (remove ? 'yes' : 'no'));
    console.log("class: " + cls);
    remove ? el.classList.remove(cls) : el.classList.add(cls);
  }

  private isMenuShrinked(): boolean { return this.menu.classList.contains(LAYOUT_CLASSES.shrinkItem); }
  private isMenuShowing(): boolean { return this.nav.classList.contains(LAYOUT_CLASSES.showItem); }

  private get menu(): HTMLElement { return document.getElementById(MAIN_MENU_ELEMENTS.menu); }
  private get nav(): HTMLElement { return document.getElementById(MAIN_MENU_ELEMENTS.navSection); }

  public toggleShrinked(): void { this.toggleClass(this.menu, LAYOUT_CLASSES.shrinkItem, this.isMenuShrinked()); }
  public toggleHide(): void {
    console.log(this.nav)
    this.toggleClass(this.nav, LAYOUT_CLASSES.showItem, this.isMenuShowing());
    console.log(this.nav)
  }

  public shrinkMenu(): void {
    if(this.isMenuShrinked) return;
    this.toggleClass(this.menu, LAYOUT_CLASSES.shrinkItem, false);
  }

  public hideMenu(): void {
    if(!this.isMenuShowing) return;
    this.toggleClass(this.nav, LAYOUT_CLASSES.showItem, true);
  }
}
