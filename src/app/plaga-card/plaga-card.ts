// src/app/plaga-card/plaga-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Plaga {
  id: number;
  nombre: string;
  nombreCientifico: string;
  descripcion: string;
  danos: string;
  imagen: string;
  riesgo: 'Alto' | 'Medio' | 'Bajo';
  control: string[];
}

@Component({
  selector: 'app-plaga-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plaga-card.html',
  styleUrls: ['./plaga-card.css']
})
export class PlagaCardComponent {
  @Input() plaga!: Plaga;

  getRiesgoClass(): string {
    switch(this.plaga.riesgo) {
      case 'Alto': return 'riesgo-alto';
      case 'Medio': return 'riesgo-medio';
      case 'Bajo': return 'riesgo-bajo';
      default: return '';
    }
  }

  getRecomendacion(): string {
    switch(this.plaga.riesgo) {
      case 'Alto': return 'Acción inmediata requerida';
      case 'Medio': return 'Monitoreo intensivo';
      case 'Bajo': return 'Vigilancia regular';
      default: return 'Consulta especialista';
    }
  }
}