import { Component, inject, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{


  sidebarVisible = true;


  private sidebarService = inject(SidebarService);


  toggleSidebar() {
    this.sidebarService.toggleSidebar();  
  }

  ngOnInit(): void {
    this.sidebarService.sidebarVisible.subscribe(visible => {
      this.sidebarVisible = visible;
    });
  }


  

}
