import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, OnDestroy, OnInit, ViewEncapsulation  } from '@angular/core';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Subscription } from 'rxjs';
import { LayoutService } from '../../services/Layout.service';
import { FooterComponent } from '../shared/footer/footer.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterOutlet,SidebarComponent,HeaderComponent,ButtonModule,HeaderComponent,FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss', 
  encapsulation: ViewEncapsulation.None 

})
export class DashboardComponent {

  constructor(public layoutService: LayoutService){}


  get containerClass() {
    return {
      'layout-theme-light': this.layoutService.config().colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config().colorScheme === 'dark',
      'layout-overlay': this.layoutService.config().menuMode === 'overlay',
      'layout-static': this.layoutService.config().menuMode === 'static',
      'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config().menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'p-input-filled': this.layoutService.config().inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config().ripple
    }
  }






/*   sidebar = false;

  prueba(){
    console.log('llego');
    this.sidebar = !this.sidebar;
    console.log(this.sidebar);
  } */


  
  
}
