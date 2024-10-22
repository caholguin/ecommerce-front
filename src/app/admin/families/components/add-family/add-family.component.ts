import { Component, computed, inject, input, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FamilyStore } from '../../store/family.store';
import { Router } from '@angular/router';

interface FamilyForm {
  name: FormControl<string>;  
}


@Component({
  selector: 'app-add-family',
  standalone: true,
  imports: [InputTextModule, ButtonModule,CustomInputComponent,ReactiveFormsModule],
  templateUrl: './add-family.component.html',
  styleUrl: './add-family.component.scss'
})
export class AddFamilyComponent {

  id = input<number>();

  readonly store = inject(FamilyStore); 

  private router = inject(Router); 

  familyForm: Signal<FormGroup> = computed(
    () =>
      new FormGroup<FamilyForm>({
        name: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        })       
      })
  );


  addFamily() {
    const familyData = this.familyForm().value;   
    this.store.addFamily(familyData).then(() => {      
      this.router.navigate(['/admin/familias']); 
    })
    .catch((error) => {      
      console.error('Error al agregar la familia:', error);      
    });
  } 
}
