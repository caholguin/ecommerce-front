import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { DashboardComponent } from './dashboard.component';
import { FamilyComponent } from './family/family.component';


export const routes: Routes = [
  {
    path: '', component: DashboardComponent, // Componente raíz de administración
    children: [     
      {
        path: '', component: StartComponent // Ruta hija para el dashboard
      },
      {
        path: 'families', component: FamilyComponent // Ruta hija para el dashboard
      },
    ]
  }
];
