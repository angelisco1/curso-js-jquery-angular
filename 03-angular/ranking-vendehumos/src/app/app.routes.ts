import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NuevoVendehumoComponent } from './pages/nuevo-vendehumo/nuevo-vendehumo.component';
import { DetalleVendehumoComponent } from './pages/detalle-vendehumo/detalle-vendehumo.component';

export const routes: Routes = [
  { path: 'nuevo-vendehumo', component: NuevoVendehumoComponent },
  { path: 'vendehumos/:id', component: DetalleVendehumoComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
