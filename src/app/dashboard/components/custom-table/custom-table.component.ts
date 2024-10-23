import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ColumnDefinition } from '../../interfaces/columnDefinition.interface';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [TableModule,TagModule, CommonModule, ButtonModule ,NgOptimizedImage],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss'
})

export class CustomTableComponent<T> {
  
  columns = input.required<ColumnDefinition<T>[]>();  
  data = input.required<T[]>();
  
  edit = output<T>();
  delete = output<T>();  

  onEdit(rowData: T) {
    this.edit.emit(rowData);
  }

  onDelete(rowData: T) {
    this.delete.emit(rowData);
  }

  resolveField(data: any, field: string | number | symbol): any {
    if (typeof field === 'string') {
      return field.split('.').reduce((acc, part) => acc && acc[part], data);
    }
    return data[field]; // Si el campo no es string, simplemente accede al valor directamente
  }

   // Función para determinar si el valor es una imagen
   isImage(value: any): boolean {
    if (typeof value === 'string') {
      return value.match(/\.(jpeg|jpg|gif|png|svg)$/) != null;
    }
    return false;
  }
}
