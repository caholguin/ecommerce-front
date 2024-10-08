import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation  } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
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
