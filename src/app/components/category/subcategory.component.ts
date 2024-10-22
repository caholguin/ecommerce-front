import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SubCategoryStore } from '../../store/subCategory.store';

@Component({
  selector: 'app-subcategory',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './subcategory.component.html',
  styleUrl: './subcategory.component.scss'
})
export class SubCategoryComponent {

  readonly subCategoryStore = inject(SubCategoryStore);   

}
