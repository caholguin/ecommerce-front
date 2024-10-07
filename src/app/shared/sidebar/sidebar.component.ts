import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild,  } from '@angular/core';

import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{
  
  private sidebarService = inject(SidebarService);

  sidebarVisible = false;  
  statusData = false;

  ngOnInit(): void {    
    this.sidebarService.sidebarVisible.subscribe(visible => {
      this.sidebarVisible = visible;  
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  dataAcordion(){    
    this.statusData = !this.statusData;
  }
  
}
