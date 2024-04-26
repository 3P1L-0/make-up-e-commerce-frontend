import {EventEmitter, Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class AppViewHeaderService {
  public goBackRequested$: EventEmitter<boolean>;

  constructor() {
    this.goBackRequested$ = new EventEmitter();
  }

  public requestGoBack(): void {
    this.goBackRequested$.emit(true);
  }
}
