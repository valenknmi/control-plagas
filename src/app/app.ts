import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header';
import { InicioComponent } from './components/inicio/inicio';
import { PlagasImportantes } from './components/plagas-importantes/plagas-importantes';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros';
import { ContactoComponent } from './components/contacto/contacto';
import { DescargaComponent } from './components/descarga/descarga';
import { FooterComponent } from './components/footer/footer';
import { DatosEmpresaService } from './services/datos-empresa';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    InicioComponent,
    PlagasImportantes,
    SobreNosotrosComponent,
    ContactoComponent,
    DescargaComponent,
    FooterComponent
  ],
  template: `
    <div class="app-container">
      <!-- Header Navigation -->
      <app-header></app-header>
      
      <!-- Main Content -->
      <main>
        <!-- Hero Section -->
        <section id="inicio">
          <app-inicio></app-inicio>
        </section>
        
        <!-- Plagas Section -->
        <section id="plagas">
          <app-plagas-importantes></app-plagas-importantes>
        </section>
        
        <!-- About Section -->
        <section id="sobre-nosotros">
          <app-sobre-nosotros></app-sobre-nosotros>
        </section>
        
        <!-- Contact Section -->
        <section id="contacto">
          <app-contacto></app-contacto>
        </section>
        
        <!-- Download Section -->
        <section id="descarga">
          <app-descarga></app-descarga>
        </section>
      </main>
      
      <!-- Footer -->
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex: 1;
    }

    section {
      scroll-margin-top: 80px;
    }
  `]
})
export class App implements OnInit {
  title = 'AgroProtect - Control de Plagas en Caña';
  
  constructor(private datosService: DatosEmpresaService) {}

  ngOnInit() {}
}