import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SubCategoryService } from '../../services/subcategory.service';
import { SubCategory } from '../../interfaces/SubCategory.interface';

@Component({
  selector: 'app-subcategory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subcategory.component.html',
  styleUrl: './subcategory.component.scss'
})
export class SubCategoryComponent implements OnInit{

  public subCategories = signal<SubCategory[]>([]);

  private subCategoryService = inject(SubCategoryService);

  ngOnInit(): void {
    this.getAllSubCategories()
  }

  public getAllSubCategories(){
    this.subCategoryService.getAllSubCategories().subscribe(subCategories => {
      this.subCategories.set(subCategories);
    })
  }

}
