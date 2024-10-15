import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FamilyService } from '../../services/family.service';
import { Family } from '../../interfaces/Family.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  
  private sidebarService = inject(SidebarService);

  private familyService = inject(FamilyService);

  public families = signal<Family[]>([]);
  
  menu = false;
  sidebarVisible = false;
  statusData = false;
  
  ngOnInit(): void {
    this.sidebarService.sidebarVisible.subscribe(visible => {
      this.sidebarVisible = visible;
    });

    this.loadData();
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();  
  }

  dataAcordion(){    
    this.statusData = !this.statusData;
  }


  public loadData(){
    this.familyService.loadPage().subscribe(families => {
        this.families.set(families);
    })
  }
}
