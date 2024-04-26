import {AfterViewInit, Component, ElementRef, inject, ViewChild} from "@angular/core";
import { MAIN_MENU_ELEMENTS, PRIVATE_ROUTES } from "src/app/global/configs";
import { AppMenuService } from "./services/menu.service";
import {fromEvent} from "rxjs";

@Component({
  selector: "app-main-menu-view",
  templateUrl: "./main-menu.component.html",
  host: {'class': 'app-main-menu-module'}
})
export class AppMainMenuComponent implements AfterViewInit {
  /* DEPENDENCIES */
  private readonly _menuService = inject(AppMenuService);

  /* MEMBERS */
  public readonly routes: typeof PRIVATE_ROUTES;
  public readonly menuParts: typeof MAIN_MENU_ELEMENTS;
  @ViewChild("mainMenu", {read: ElementRef<HTMLDivElement>, static: true}) mainMenu!: ElementRef<HTMLDivElement>;

  constructor () {
    this.routes = PRIVATE_ROUTES;
    this.menuParts = MAIN_MENU_ELEMENTS;
  }

  public ngAfterViewInit(): void {
    const triggers = this.mainMenu.nativeElement.querySelectorAll(".trigger");

    triggers.forEach(trigger => {
      fromEvent(trigger, "click").subscribe((evt) => {
        evt.stopPropagation();
        const expandedClass= "expanded";

        const target = (evt.target as HTMLElement);
        const expandedMenu = this.mainMenu.nativeElement.querySelector("."+expandedClass);

        console.log(target)
        console.log(expandedMenu)
        console.log(target.parentElement.classList.contains(expandedClass))

        if(target.parentElement.classList.contains(expandedClass)) expandedMenu.classList.remove(expandedClass);
        else {
          expandedMenu?.classList.remove(expandedClass);
          target.parentElement.classList.add(expandedClass);
        }
      });
    })
  }

  public toggleShrink(): void { this._menuService.toggleShrinked(); }
  public toggleHide(evt: MouseEvent): void { this._menuService.toggleHide(); }
  public hideMenu(): void { this._menuService.hideMenu(); }
}
