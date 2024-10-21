import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './admin/dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },

    { 
        path: 'admin', 
        loadChildren: () => import('./admin/dashboard.routes').then(m => m.dashboard),
    },
];
