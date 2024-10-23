import { Component, inject } from '@angular/core';
import { CustomTableComponent } from '../components/custom-table/custom-table.component';
import { ColumnDefinition } from '../interfaces/columnDefinition.interface';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { FamilyStore } from './store/family.store';
import { FamilyService } from './services/Family.service';
import { Router, RouterModule } from '@angular/router';
import { Family } from '../../interfaces/Family.interface';

@Component({
  selector: 'app-families',
  standalone: true,
  imports: [RouterModule,CustomTableComponent,ButtonModule,ToolbarModule ],
  templateUrl: './families.component.html',
  styleUrl: './families.component.scss'
})
export class FamiliesComponent {
  
  readonly familiyStore = inject(FamilyStore);
  
  router = inject(Router); 
  
  columns: ColumnDefinition<Family>[] = [    
    { field: 'name', header: 'Nombre' },    
  ];

  onEdit(data: Family) {       
    this.router.navigate(['/dashboard/familias/',data.id]); 
  }

  onDelete(data: Family) {    
    this.familiyStore.removeFamily(data.id).then(() => {      
      this.router.navigate(['/dashboard/familias']); 
    })
    .catch((error) => {      
      console.error('Error al agregar la familia:', error);      
    });
  }  

}
