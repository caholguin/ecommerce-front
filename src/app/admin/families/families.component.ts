import { Component, inject, OnInit } from '@angular/core';
import { CustomTableComponent } from '../components/custom-table/custom-table.component';
import { Family } from '../../interfaces/Category.interface';
import { ColumnDefinition } from '../interfaces/columnDefinition.interface';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { FamilyStore } from './store/family.store';
import { FamilyService } from './services/Family.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-families',
  standalone: true,
  imports: [RouterModule,CustomTableComponent,ButtonModule,ToolbarModule ],
  templateUrl: './families.component.html',
  styleUrl: './families.component.scss'
})
export class FamiliesComponent implements OnInit{
  
  readonly familiyStore = inject(FamilyStore);
  private familyService = inject(FamilyService);

  families:Family[] = [];
  
  ngOnInit(): void {
   
  }
  
  columns: ColumnDefinition<Family>[] = [    
    { field: 'name', header: 'Nombre' },    
  ];

  data: Family[] = [
    { id:1, name: 'Producto 1'  },
    { id:2, name: 'Producto 2' },    
  ];

  onEdit(product: any) {
    console.log('Editing product:', product);
    // Aquí iría la lógica para editar el producto
  }

  onDelete(product: any) {
    console.log('Deleting product:', product);
    // Aquí iría la lógica para eliminar el producto
  }
  
}
