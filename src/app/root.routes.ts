import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {path: 'home', component:Dashboard},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
