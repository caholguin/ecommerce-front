import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, OnInit, output, Output, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ColumnDefinition } from '../../interfaces/columnDefinition.interface';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [TableModule,TagModule, CommonModule, ButtonModule ],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss'
})



export class CustomTableComponent<T> implements OnInit{
  
  columns = input.required<ColumnDefinition<T>[]>();  
  data = input.required<T[]>();
  
  edit = output<T>();
  delete = output<T>();  
  
  ngOnInit(): void {
    console.log(this.data); // Verifica que los datos se reciban correctamente
  }

  onEdit(rowData: T) {
    this.edit.emit(rowData);
  }

  onDelete(rowData: T) {
    this.delete.emit(rowData);
  }
}
