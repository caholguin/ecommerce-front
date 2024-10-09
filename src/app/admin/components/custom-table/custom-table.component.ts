import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss'
})
export class CustomTableComponent {
  @Input() data: any[] = []; // Datos para la tabla
  @Input() columns: { header: string; field: string }[] = [];
  @Output() edit = new EventEmitter<any>(); // Evento para editar
  @Output() delete = new EventEmitter<any>(); // Evento para eliminar

  onEdit(item: any) {
    this.edit.emit(item);
  }

  onDelete(item: any) {
    this.delete.emit(item);
  }
}
