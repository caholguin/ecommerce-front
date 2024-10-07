import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild,  } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{
  
  private sidebarService = inject(SidebarService);

  sidebarVisible = false; 

  ngOnInit(): void {
    // Suscríbete al estado de visibilidad del sidebar
    this.sidebarService.sidebarVisible.subscribe(visible => {
      this.sidebarVisible = visible;  // Cambia el estado cuando el servicio lo emita
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
  
}
