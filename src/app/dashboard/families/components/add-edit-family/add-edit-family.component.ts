import { Component, computed, inject, input, OnInit, Signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FamilyStore } from '../../store/family.store';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { emptyFamily } from '../../../../interfaces/Family.interface';

interface FamilyForm {
  name: FormControl<string>;
}


@Component({
  selector: 'app-add-edit-family',
  standalone: true,
  imports: [InputTextModule, ButtonModule, CustomInputComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './add-family.component.html',
  styleUrl: './add-family.component.scss'
})
export class AddFamilyComponent {

  id = input<number>();

  isEditMode = computed(() => !!this.id());
  title = computed(() => this.isEditMode() ? 'Editar familia' : 'Crear familia');
  
  readonly store = inject(FamilyStore);

  private router = inject(Router);


  characterToEdit = computed(
    () => this.store.getFamily(Number(this.id())) ?? emptyFamily,
  );

  familyForm: Signal<FormGroup> = computed(
    () =>
      new FormGroup<FamilyForm>({
        name: new FormControl(this.characterToEdit().name, {
          nonNullable: true,
          validators: [Validators.required],
        })
      })
  );

  onSubmit() {
    if (this.familyForm().valid) {
      const family = {
        ...(this.id() ? { id: Number(this.id()) } : {}),
        ...this.familyForm().value,
      };

      const methodToUse = this.id() ? 'updateFamily' : 'addFamily';

      this.store[methodToUse](family).then(() => {
        this.router.navigate(['/dashboard/familias']);
      }).catch((error) => {
        console.error('Error al procesar la familia:', error);
      });

      this.familyForm().reset();
    }

    /* const familyData = this.familyForm().value;   
    this.store.addFamily(familyData).then(() => {      
      this.router.navigate(['/dashboard/familias']); 
    })
    .catch((error) => {      
      console.error('Error al agregar la familia:', error);      
    }); */
  }
}
