import { Component, inject, OnInit } from '@angular/core';
import { CustomTableComponent } from '../components/custom-table/custom-table.component';
import { Family } from '../../interfaces/Category.interface';
import { ColumnDefinition } from '../interfaces/columnDefinition.interface';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { FamilyStore } from './store/family.store';
import { FamilyService } from './services/Family.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-families',
  standalone: true,
  imports: [RouterModule,CustomTableComponent,ButtonModule,ToolbarModule ],
  templateUrl: './families.component.html',
  styleUrl: './families.component.scss'
})
export class FamiliesComponent implements OnInit{
  
  readonly familiyStore = inject(FamilyStore);
  
  router = inject(Router);

  families:Family[] = [];
  
  ngOnInit(): void {
  
  }
  
  columns: ColumnDefinition<Family>[] = [    
    { field: 'name', header: 'Nombre' },    
  ];

  onEdit(data: Family) {       
    this.router.navigate(['/admin/familias/',data.id]); 
  }

  onDelete(data: Family) {    
    this.familiyStore.removeFamily(data.id).then(() => {      
      this.router.navigate(['/admin/familias']); 
    })
    .catch((error) => {      
      console.error('Error al agregar la familia:', error);      
    });
  }  

}
