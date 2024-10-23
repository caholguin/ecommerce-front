import { CommonModule } from '@angular/common';
import { Component, effect, input, OnInit, output, signal, WritableSignal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

interface SelectOption {
  name: string;
  id: any;
}

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [DropdownModule, ReactiveFormsModule, CommonModule],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss'
})
export class CustomSelectComponent<T>{

   options = input.required<T[]>();   

   placeholder = signal('Select an option');
 
   control = input.required<FormControl>();
 
   selectedValue = signal<any>(null);
 
   constructor() {
     effect(() => {
       const currentValue = this.control().value;
       if (currentValue !== null) {
         this.selectedValue.set(currentValue);  // Actualizar el valor seleccionado
       }
     });
   }   
   
   setPlaceholder(newPlaceholder: string) {
     this.placeholder.set(newPlaceholder);
   }
 
   
   getSelectedValue() {
     return this.selectedValue();
   }
  
}