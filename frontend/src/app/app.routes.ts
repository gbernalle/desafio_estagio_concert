import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Maps } from './maps/maps';
import { Settings } from './settings/settings';
import { Machine } from './machine/machine';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'machine', component: Machine },
  { path: 'maps', component: Maps },
  { path: 'settings', component: Settings},
];
