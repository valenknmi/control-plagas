// src/app/inicio/inicio.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosEmpresaService } from '../../services/datos-empresa';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio implements OnInit, OnDestroy {
  estadisticas: any[] = [];

  // 📸 IMÁGENES DE CAÑA DE AZÚCAR - Unsplash (libres de derechos)
  imagenesCana = [
    {
      url: 'https://www.gob.mx/cms/uploads/article/main_image/21308/DOF_Precio_referencia_15-16.jpg',
      alt: 'Campo de caña de azúcar - Plantación saludable',
      titulo: 'Cultivos protegidos'
    },
    {
      url: 'https://eos.com/wp-content/uploads/2022/11/growing-sugar-cane.jpg.webp',
      alt: 'Caña de azúcar madura lista para cosecha',
      titulo: 'Cosecha abundante'
    },
    {
      url: 'https://www.editorialderiego.com/wp-content/uploads/2024/01/CanaAzucar_01.jpg',
      alt: 'Plantación de caña de azúcar',
      titulo: 'Monitoreo constante'
    },
    {
      url: 'https://masterlab.com.mx/wp-content/uploads/2024/10/ANALISIS-DE-CULTIVOS-DE-CANA-DE-AZUCAR-1024x576.png',
      alt: 'Hojas verdes de caña de azúcar',
      titulo: 'Salud vegetal'
    },
    {
      url: 'https://www.novagromexico.com/wp-content/uploads/2025/01/cultivo-de-cana.jpg',
      alt: 'Tallos de caña de azúcar',
      titulo: 'Calidad superior'
    }
  ];

  imagenActual = 0;
  private intervalo: any;

  constructor(private datosService: DatosEmpresaService) { }

  ngOnInit() {
    this.estadisticas = this.datosService.getEstadisticas();
    this.iniciarCarrusel();
  }

  ngOnDestroy() {
    this.detenerCarrusel();
  }

  // 🎯 MÉTODOS DEL CARRUSEL
  iniciarCarrusel() {
    this.intervalo = setInterval(() => {
      this.siguienteImagen();
    }, 6000); // Cambia cada 6 segundos
  }

  detenerCarrusel() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  siguienteImagen() {
    this.imagenActual = (this.imagenActual + 1) % this.imagenesCana.length;
  }

  imagenAnterior() {
    this.imagenActual = (this.imagenActual - 1 + this.imagenesCana.length) % this.imagenesCana.length;
  }

  seleccionarImagen(index: number) {
    this.imagenActual = index;
    // Reiniciar el intervalo cuando el usuario selecciona manualmente
    this.detenerCarrusel();
    this.iniciarCarrusel();
  }

  // 🎯 MÉTODO DE SCROLL (tu método original)
  scrollToSeccion(seccionId: string) {
    const elemento = document.getElementById(seccionId);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  }
}