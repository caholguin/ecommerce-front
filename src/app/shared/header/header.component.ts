import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FamilyStore } from '../../store/Family.store';
import { CategoryStore } from '../../store/category.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  private sidebarService = inject(SidebarService);

  readonly familiyStore = inject(FamilyStore);
  readonly categoryStore = inject(CategoryStore);

  menu = false;
  sidebarVisible = false;
  statusData = false;

  ngOnInit(): void {
    this.sidebarService.sidebarVisible.subscribe(visible => {
      this.sidebarVisible = visible;
    });
  }

  toggleMenu() {
    this.menu = !this.menu;
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  dataAcordion() {
    this.statusData = !this.statusData;
  }

}
