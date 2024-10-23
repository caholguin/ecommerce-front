import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


export const dashboard: Routes = [
  {
    path: '', component: DashboardComponent, // Componente raíz de administración
    children: [     
      /* {
        path: '', component: StartComponent // Ruta hija para el dashboard
      },    */

      { 
        path: 'familias', 
        loadChildren: () => import('../dashboard/families/family.routes').then(m => m.family),
      },
      {
        path: 'categorias',
        loadChildren: () => import('../dashboard/categories/category.routes').then(m => m.category)
      }
    ]
  }
];
