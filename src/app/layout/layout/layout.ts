import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { NgClass } from '@angular/common';

@Component({
  selector: 'shop-layout',
  imports: [RouterOutlet,Header,Footer,NgClass],
  templateUrl: './layout.html',
})
export class Layout {
  sidebarVisible :boolean = true;
  currentClasses: Record<string, boolean> = {};

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      'with-sidebar': this.sidebarVisible,
      'content-wrapper': true,
    };
  }

}
