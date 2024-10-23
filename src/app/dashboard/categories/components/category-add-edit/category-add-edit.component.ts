import { Component, computed, inject, input, Signal } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomSelectComponent } from '../../../components/custom-select/custom-select.component';
import { FamilyStore } from '../../../families/store/family.store';
import { Router, RouterModule } from '@angular/router';
import { emptyCategory } from '../../../../interfaces/Category.interface';
import { CategoryStore } from '../../../categories/store/category.store';
import { CustomInputComponent } from '../../../components/custom-input/custom-input.component';
import { ButtonModule } from 'primeng/button';

interface CategoryForm {
  name: FormControl<string>;
  icon: FormControl<string>,
  familyId: FormControl<number>
}

@Component({
  selector: 'app-category-add-edit',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule, CustomSelectComponent, CustomInputComponent, ButtonModule, RouterModule],
  templateUrl: './category-add-edit.component.html',
  styleUrl: './category-add-edit.component.scss'
})
export class CategoryAddEditComponent {

  id = input<number>();

  familyStore = inject(FamilyStore);
  categoryStore = inject(CategoryStore);

  isEditMode = computed(() => !!this.id());
  title = computed(() => this.isEditMode() ? 'Editar categoria' : 'Crear categoria');

  readonly store = inject(FamilyStore);

  private router = inject(Router);


  categoryToEdit = computed(
    () => this.categoryStore.getCategory(Number(this.id())) ?? emptyCategory,
  );

  categoryForm: Signal<FormGroup> = computed(
    () =>
      new FormGroup<CategoryForm>({
        name: new FormControl(this.categoryToEdit().name, {
          nonNullable: true,
          validators: [Validators.required],
        }),
        icon: new FormControl(this.categoryToEdit().icon, {
          nonNullable: true,
          validators: [Validators.required],
        }),
        familyId: new FormControl(this.categoryToEdit().family.id ?? null, {
          nonNullable: true,
          validators: [Validators.required],
        })
      })
  );

  onSubmit() {
    if (this.categoryForm().valid) {

      const category = {
        ...(this.id() ? { id: Number(this.id()) } : {}),
        ...this.categoryForm().value,
      };

      const methodToUse = this.id() ? 'updateCategory' : 'addCategory';

      this.categoryStore[methodToUse](category).then(() => {
        this.router.navigate(['/dashboard/categorias']);
      }).catch((error) => {
        console.error('Error al procesar la categorias:', error);
      });

      this.categoryForm().reset();
    }

  }

}
