import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation  } from '@angular/core';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterOutlet,SidebarComponent,HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss', 
  encapsulation: ViewEncapsulation.None 

})
export class DashboardComponent {




  sidebar = false;

  prueba(){
    console.log('llego');
    this.sidebar = !this.sidebar;
    console.log(this.sidebar);
  }


  
  
}
