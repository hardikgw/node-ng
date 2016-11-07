import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo : '/home' , pathMatch : 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

export const appRoutingProviders: any[] = [
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
