// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio';
import { PlagasImportantes } from './components/plagas-importantes/plagas-importantes';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros';
import { ContactoComponent } from './components/contacto/contacto';
import { DescargaComponent } from './components/descarga/descarga';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'plagas', component: PlagasImportantes },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'descarga', component: DescargaComponent },
  { path: '**', redirectTo: '/inicio' }
];