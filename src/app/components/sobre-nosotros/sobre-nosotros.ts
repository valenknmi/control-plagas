// src/app/sobre-nosotros/sobre-nosotros.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { DatosEmpresaService } from '../../services/datos-empresa';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './sobre-nosotros.html',
  styleUrls: ['./sobre-nosotros.css']
})
export class SobreNosotrosComponent implements OnInit {
  empresa: any;
  certificaciones: string[] = [];

  constructor(private datosService: DatosEmpresaService) { }

  ngOnInit() {
    this.empresa = this.datosService.getInfoEmpresa();
    this.certificaciones = this.datosService.getCertificaciones();
  }

  getAnosTrayectoria(): number {
    return new Date().getFullYear() - this.empresa.fundacion;
  }
}