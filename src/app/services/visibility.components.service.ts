import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VisibilityComponentsService {

  private showNav: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  showNav$: Observable<boolean> = this.showNav.asObservable();

  private showFooter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  showFooter$: Observable<boolean> = this.showFooter.asObservable();

  constructor() { }

  toggleNavVisibility(isVisible: boolean): void {
    this.showNav.next(isVisible);
  }

  toggleFooterVisibility(isVisible: boolean): void {
    this.showFooter.next(isVisible);
  }
}
