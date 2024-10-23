import { Routes } from "@angular/router";

export const family: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '',
        loadComponent: () => import('../families/families.component').then((m) => m.FamiliesComponent),
      },
      {
        path: 'crear',
        loadComponent: () => import('./components/add-edit-family/add-edit-family.component').then((m) => m.AddFamilyComponent),
      },
      {
        path: ':id',
        loadComponent: () => import('./components/add-edit-family/add-edit-family.component').then((m) => m.AddFamilyComponent),
      },
];
