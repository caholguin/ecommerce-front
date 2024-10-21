import { Routes } from "@angular/router";
import { AddFamilyComponent } from './components/add-family/add-family.component';


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
        path: 'add',
        loadComponent: () => import('../families/components/add-family/add-family.component').then((m) => m.AddFamilyComponent),
      },
      {
        path: ':id',
        loadComponent: () => import('../families/families.component').then((m) => m.FamiliesComponent),
      },
];
