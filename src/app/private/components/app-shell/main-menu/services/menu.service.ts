import { ElementRef, Injectable } from "@angular/core";
import { LAYOUT_CLASSES, MAIN_MENU_ELEMENTS } from "src/app/global/configs";

@Injectable({providedIn: 'root'})
export class AppMenuService {
  /* MEMBERS */
  private toggleClass(elem: HTMLElement | ElementRef<HTMLElement>, cls: string, remove: boolean): void {
    let el = elem instanceof ElementRef ? elem.nativeElement : elem;
    remove ? el.classList.remove(cls) : el.classList.add(cls);
  }
  public shrinkMenu(): void {
    if(this.isMenuShrinked) return;
    this.toggleClass(this.menu, LAYOUT_CLASSES.shrinkItem, false);
  }

  public hideMenu(): void {
    if(this.isMenuHidden) return;
    this.toggleClass(this.menu, LAYOUT_CLASSES.hideItem, true);
  }


  private get isSubmenuExpanded(): boolean { return this.menu.classList.contains(LAYOUT_CLASSES.showItem); }
  private isMenuShrinked(): boolean { return this.menu.classList.contains(LAYOUT_CLASSES.shrinkItem); }
  private isMenuHidden(): boolean { return this.menu.classList.contains(LAYOUT_CLASSES.hideItem); }
  private get menu(): HTMLElement { return document.getElementById(MAIN_MENU_ELEMENTS.menu); }
  public toggleShrinked(): void { this.toggleClass(this.menu, LAYOUT_CLASSES.shrinkItem, this.isMenuShrinked()); }
  public toggleHide(): void { this.toggleClass(this.menu, LAYOUT_CLASSES.hideItem, this.isMenuHidden()); }
  public toggleExpanded() { this.toggleClass(this.menu, LAYOUT_CLASSES.showItem, this.isSubmenuExpanded) }
}
