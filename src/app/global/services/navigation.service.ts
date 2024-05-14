import {EventEmitter, inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({providedIn: "root"})
export class AppNavigationService {
  private readonly _goBackRequestedSource: EventEmitter<boolean>;
  private readonly _previousRouteRequestedSource: EventEmitter<void>;
  private readonly _previousRouteEmittedSource: EventEmitter<string>;
  private readonly _currentRouteRequestedSource: EventEmitter<void>;
  private readonly _currentRouteEmittedSource: EventEmitter<string>;
  private readonly _viewTitleRequestedSource: EventEmitter<void>;
  private readonly _viewTitleEmittedSource: EventEmitter<string>;
  private readonly _router = inject(Router);

  public readonly goBackRequested$: Observable<boolean>;
  public readonly previousRouteRequested$: Observable<void>;
  public readonly previousRouteEmitted$: Observable<string>;
  public readonly currentRouteRequested$: Observable<void>;
  public readonly currentRouteEmitted$: Observable<string>;
  public readonly viewTitleRequested$: Observable<void>;
  public readonly viewTitleEmitted$: Observable<string>;

  constructor() {
    this._goBackRequestedSource = new EventEmitter();
    this._previousRouteRequestedSource = new EventEmitter();
    this._previousRouteEmittedSource = new EventEmitter();
    this._currentRouteRequestedSource = new EventEmitter();
    this._currentRouteEmittedSource = new EventEmitter();
    this._viewTitleRequestedSource = new EventEmitter();
    this._viewTitleEmittedSource = new EventEmitter();

    this.goBackRequested$ = this._goBackRequestedSource.asObservable();
    this.previousRouteRequested$ = this._previousRouteRequestedSource.asObservable();
    this.previousRouteEmitted$ = this._previousRouteEmittedSource.asObservable();
    this.currentRouteRequested$ = this._currentRouteRequestedSource.asObservable();
    this.currentRouteEmitted$ = this._currentRouteEmittedSource.asObservable();
    this.viewTitleRequested$ = this._viewTitleRequestedSource.asObservable();
    this.viewTitleEmitted$ = this._viewTitleEmittedSource.asObservable();
  }

  public requestGoBack(): void { this._goBackRequestedSource.emit(true); }
  public requestViewTitle(): void { this._viewTitleRequestedSource.emit(); }
  public requestPreviousRoute(): void { this._previousRouteRequestedSource.emit(); }
  public requestCurrentRoute(): void { this._currentRouteRequestedSource.emit(); }
  public requestViewTitleEmitted(title: string): void { this._viewTitleEmittedSource.emit(title); }
  public requestPreviousRouteEmitted(route: string): void { this._previousRouteEmittedSource.emit(route); }

  public requestCurrentRouteEmitted(route: string): void { this._currentRouteEmittedSource.emit(route); }

  public navigateTo(route: string[], extras?: any): void {
    this._router.navigate(route, extras).then();
    this.requestCurrentRoute();
  }
}
