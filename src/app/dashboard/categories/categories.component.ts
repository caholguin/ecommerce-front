import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CategoryStore } from './store/category.store';
import { ColumnDefinition } from '../interfaces/columnDefinition.interface';
import { Category } from '../../interfaces/Category.interface';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CustomTableComponent } from '../components/custom-table/custom-table.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ButtonModule,CustomTableComponent,RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  readonly categoryStore = inject(CategoryStore);

  router = inject(Router); 

  columns: ColumnDefinition<Category>[] = [    
    { field: 'name', header: 'Nombre' },    
    { field: 'family.name', header: 'Familia' },    
    { field: 'icon', header: 'icono' },    
  ];


  onEdit(data: Category) {       
    this.router.navigate(['/dashboard/categorias/',data.id]); 
  }

  onDelete(data: Category) {    
   /*  this.familiyStore.removeFamily(data.id).then(() => {      
      this.router.navigate(['/dashboard/familias']); 
    })
    .catch((error) => {      
      console.error('Error al agregar la familia:', error);      
    }); */
  }  
}
