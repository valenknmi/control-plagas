import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { Error404 } from './components/error404/error404';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'plagas', component: HomeComponent },
  { path: 'sobre-nosotros', component: HomeComponent },
  { path: 'contacto', component: HomeComponent },
  { path: 'descarga', component: HomeComponent },
  { path: '**', component: Error404 }
];