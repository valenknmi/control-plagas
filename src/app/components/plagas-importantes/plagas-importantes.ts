// src/app/plagas-importantes/plagas-importantes.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatosEmpresaService } from '../../services/datos-empresa';
import { PlagaCardComponent } from '../../plaga-card/plaga-card';

@Component({
  selector: 'app-plagas-importantes',
  standalone: true,
  imports: [CommonModule, FormsModule, PlagaCardComponent],
  templateUrl: './plagas-importantes.html',
  styleUrls: ['./plagas-importantes.css']
})
export class PlagasImportantes implements OnInit {
  plagas: any[] = [];
  filtroActual: string = 'todas';
  searchTerm: string = '';

  // ✅ PROPIEDADES COMPUTADAS - Solución al error
  get totalPlagas(): number {
    return this.plagas.length;
  }

  get plagasAltoRiesgo(): number {
    return this.plagas.filter(p => p.riesgo === 'Alto').length;
  }

  get plagasMedioRiesgo(): number {
    return this.plagas.filter(p => p.riesgo === 'Medio').length;
  }

  get plagasBajoRiesgo(): number {
    return this.plagas.filter(p => p.riesgo === 'Bajo').length;
  }

  get metodosControl(): number {
    return 18; // Valor fijo o calcular de tus datos
  }

  constructor(private datosService: DatosEmpresaService) {}

  ngOnInit() {
    this.plagas = this.datosService.getPlagasImportantes();
  }

  filtrarPorRiesgo(riesgo: string) {
    this.filtroActual = riesgo;
  }

  get plagasFiltradas() {
    let filtradas = this.plagas;
    
    if (this.filtroActual !== 'todas') {
      filtradas = filtradas.filter(p => p.riesgo === this.filtroActual);
    }
    
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtradas = filtradas.filter(p => 
        p.nombre.toLowerCase().includes(term) ||
        p.nombreCientifico.toLowerCase().includes(term) ||
        p.descripcion.toLowerCase().includes(term)
      );
    }
    
    return filtradas;
  }

  limpiarFiltros() {
    this.filtroActual = 'todas';
    this.searchTerm = '';
  }

  scrollToContacto() {
    const contacto = document.getElementById('contacto');
    if (contacto) {
      contacto.scrollIntoView({ behavior: 'smooth' });
    }
  }
}