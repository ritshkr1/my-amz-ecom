import { Component } from '@angular/core';
import { Loader } from 'src/app/common/components/loader/loader';
import { NgClass } from '@angular/common';
import { ClickOutside } from 'src/app/common/directive/click-outside';

@Component({
  selector: 'shop-dashboard',
  imports: [Loader,NgClass,ClickOutside],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  openDropdownSales:boolean = false;
  openDropdownTarget:boolean = false;
  isLoaded = false;
  constructor(){
    setTimeout(() => {
      this.isLoaded = true;
    }, 5000);
  }

  salesDropDown(){
    this.openDropdownSales = !this.openDropdownSales;
  }

  targetDropdown(){
    this.openDropdownTarget = !this.openDropdownTarget;
  }

}
