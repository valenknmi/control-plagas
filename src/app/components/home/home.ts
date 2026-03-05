import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header';
import { Inicio } from '../inicio/inicio';
import { PlagasImportantes } from '../plagas-importantes/plagas-importantes';
import { SobreNosotrosComponent } from '../sobre-nosotros/sobre-nosotros';
import { ContactoComponent } from '../contacto/contacto';
import { DescargaComponent } from '../descarga/descarga';
import { FooterComponent } from '../footer/footer';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        HeaderComponent,
        Inicio,
        PlagasImportantes,
        SobreNosotrosComponent,
        ContactoComponent,
        DescargaComponent,
        FooterComponent
    ],
    templateUrl: './home.html',
    styles: [`
    .home-container {
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
export class HomeComponent implements OnInit {
    ngOnInit() { }
}
