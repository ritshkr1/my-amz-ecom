import { Component, inject, effect,computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { Logo } from './logo/logo';
import { ToggleSidebarService } from 'src/app/common/services/toggle-sidebar';


@Component({
  selector: 'shop-header',
  imports: [NgClass,Logo],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  sidebarToggle = computed(() => {
    console.log("sidebarToggle called");
    return this.toggleService.toggleSidebar()});
  menuToggleMobile: boolean = false;
  darkMode: boolean = false;
  dropdownOpen:boolean = false;
  notifying:boolean = true;
  isProfileOpen:boolean = false

  private toggleService = inject(ToggleSidebarService);

  constructor(){}

  toggleSidebar(){
    if(this.sidebarToggle() === false){
      this.toggleService.open();
    }
  }

  menuToggleMob(){
    this.menuToggleMobile = !this.menuToggleMobile;
  }

  showNotification(){
    this.dropdownOpen = !this.dropdownOpen;
    this.notifying = false;
    console.log(this.dropdownOpen)
  }

  openProfile(){
    this.isProfileOpen = !this.isProfileOpen;
  }

  toggleDarkMode() {
  this.darkMode = !this.darkMode
  const element = document.getElementById('main-body') || document.documentElement;
  element.classList.remove('dark');
  if(this.darkMode) element.classList.add('dark');

}
}
