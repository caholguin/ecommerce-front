import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';

import { SidebarService } from '../../services/sidebar.service';
import { CategoryService } from '../../services/Category.service';
import { Category } from '../../interfaces/Category.interface';
import { CategoryStore } from '../../store/category.store';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  private sidebarService = inject(SidebarService);  

  readonly categoryStore = inject(CategoryStore);

  sidebarVisible = false;
  statusData = false;

  expandedCategoryId: number | null = null; // Mantiene el estado del ítem expandido
 

  ngOnInit(): void {
    this.sidebarService.sidebarVisible.subscribe(visible => {
      this.sidebarVisible = visible;
    });
   
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  // Controla la expansión del ítem individual
  toggleAccordion(categoryId: number) {
    if (this.expandedCategoryId === categoryId) {
      this.expandedCategoryId = null; // Cierra si se hace clic de nuevo
    } else {
      this.expandedCategoryId = categoryId; // Expande el seleccionado
    }
  }
}
