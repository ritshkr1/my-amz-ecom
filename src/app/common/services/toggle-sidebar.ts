import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleSidebarService {
  private _toggleSidebar = signal<boolean>(false);
  public toggleSidebar = this._toggleSidebar.asReadonly();

  constructor() { }

  open(){
    this._toggleSidebar.set(true);
  }

  close(){
    this._toggleSidebar.set(false);
  }

  toggle(){
    this._toggleSidebar.update(val => !val);
  }
}
