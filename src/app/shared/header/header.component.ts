import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FamilyService } from '../../services/family.service';
import {  Family } from '../../interfaces/Family.interface';
import { CategoryService } from '../../services/Category.service';
import { Category } from '../../interfaces/Category.interface';

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

  private categoryService = inject(CategoryService);

  public families = signal<Family[]>([]);
  public categories = signal<Category[]>([]);
  
  menu = false;
  sidebarVisible = false;
  statusData = false;
  
  ngOnInit(): void {
    this.sidebarService.sidebarVisible.subscribe(visible => {
      this.sidebarVisible = visible;
    });

    this.loadFamilies();
    this.loadCategories();
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


  public loadFamilies(){
    this.familyService.getAllFamilies().subscribe(families => {
        this.families.set(families);
    })
  }

  public loadCategories(){
    this.categoryService.loadCategories().subscribe(categories => {
      this.categories.set(categories);
    })
  }

}
