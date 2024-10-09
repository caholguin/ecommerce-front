import { Component } from '@angular/core';
import { CustomTableComponent } from '../../components/custom-table/custom-table.component';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [CustomTableComponent],
  templateUrl: './family.component.html',
  styleUrl: './family.component.scss'
})
export class FamilyComponent {



  tableData1 = [
    { name: 'John Doe', orderDate: '14-08-2023', status: 'Completed', image: 'images/profile-1.jpg' },
    { name: 'Jane Smith', orderDate: '15-08-2023', status: 'Pending', image: 'images/profile-2.jpg' },
  ];
  
  tableData2 = [
    { productName: 'Producto A', purchaseDate: '01-09-2023', availability: 'In Stock', picture: 'images/product-a.jpg' },
    { productName: 'Producto B', purchaseDate: '02-09-2023', availability: 'Out of Stock', picture: 'images/product-b.jpg' },
  ];


  handleEdit(item: any) {   
    console.log('Editar:', item);    
  }
  
  handleDelete(item: any) {    
    console.log('Eliminar:', item);
  }
    
  
}
