import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';

import { SidebarService } from '../../services/sidebar.service';
import { CategoryService } from '../../services/Category.service';
import { Category } from '../../interfaces/Category.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  private sidebarService = inject(SidebarService);
  private categoryService = inject(CategoryService);

  sidebarVisible = false;
  statusData = false;

  expandedCategoryId: number | null = null; // Mantiene el estado del ítem expandido
  public categories = signal<Category[]>([]);

  ngOnInit(): void {
    this.sidebarService.sidebarVisible.subscribe(visible => {
      this.sidebarVisible = visible;
    });

    this.getCategories();
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories.set(categories);
    })
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
