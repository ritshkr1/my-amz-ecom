import { Component } from '@angular/core';
import { ClickOutside } from 'src/app/common/directive/click-outside';
import { ToggleSidebarService } from 'src/app/common/services/toggle-sidebar';

@Component({
  selector: 'shop-sidebar',
  imports: [ClickOutside],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  constructor(private toggleService: ToggleSidebarService) {}

  sidebarToggle(){
    this.toggleService.toggle();
  }

}
