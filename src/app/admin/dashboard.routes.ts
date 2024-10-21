import { Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { DashboardComponent } from './dashboard.component';


export const dashboard: Routes = [
  {
    path: '', component: DashboardComponent, // Componente raíz de administración
    children: [     
      {
        path: '', component: StartComponent // Ruta hija para el dashboard
      },   

      { 
        path: 'familias', 
        loadChildren: () => import('../admin/families/family.routes').then(m => m.family),
    },
    ]
  }
];
