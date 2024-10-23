import { Routes } from '@angular/router';

export const category: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '',
        loadComponent: () => import('../categories/categories.component').then((m) => m.CategoriesComponent),
      },
      {
        path: 'crear',
        loadComponent: () => import('./components/category-add-edit/category-add-edit.component').then((m) => m.CategoryAddEditComponent),
      },
       {
        path: ':id',
        loadComponent: ()=> import('./components/category-add-edit/category-add-edit.component').then((m) => m.CategoryAddEditComponent),
      }, 
];