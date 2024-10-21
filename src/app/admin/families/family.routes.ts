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
        path: ':id',
        loadComponent: () => import('../families/families.component').then((m) => m.FamiliesComponent),
      },
];
