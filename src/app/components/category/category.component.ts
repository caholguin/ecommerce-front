import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { CategoryService } from '../../services/Category.service';
import { Category } from '../../interfaces/Category.interface';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{

  public categories = signal<Category[]>([]);

  private categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.loadCategories()
  }

  public loadCategories(){
    this.categoryService.loadCategories().subscribe(categories => {
      this.categories.set(categories);
    })
  }

}
