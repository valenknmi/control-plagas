// src/app/plagas-importantes/plagas-importantes.component.ts
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatosEmpresaService, Plaga } from '../../services/datos-empresa';
import { PlagaCardComponent } from '../../plaga-card/plaga-card';
import Swiper from 'swiper';
import { EffectCoverflow, Pagination, Keyboard, Mousewheel, Navigation } from 'swiper/modules';

@Component({
  selector: 'app-plagas-importantes',
  standalone: true,
  imports: [CommonModule, FormsModule, PlagaCardComponent],
  templateUrl: './plagas-importantes.html',
  styleUrls: ['./plagas-importantes.css']
})
export class PlagasImportantes implements OnInit, AfterViewInit {
  plagas: Plaga[] = [];
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

  swiper: Swiper | undefined;

  constructor(private datosService: DatosEmpresaService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.plagas = this.datosService.getPlagasImportantes();
  }

  ngAfterViewInit() {
    this.initSwiper();
  }

  initSwiper() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
    setTimeout(() => {
      this.swiper = new Swiper('.swiper', {
        modules: [EffectCoverflow, Pagination, Keyboard, Mousewheel, Navigation],
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true
        },
        keyboard: {
          enabled: true
        },
        mousewheel: {
          thresholdDelta: 70
        },
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        breakpoints: {
          640: { slidesPerView: 2 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1560: { slidesPerView: 3 }
        }
      });
    }, 100);
  }

  filtrarPorRiesgo(riesgo: string) {
    this.filtroActual = riesgo;
    this.cdr.detectChanges();
    this.initSwiper();
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
    this.cdr.detectChanges();
    this.initSwiper();
  }

  onSearchChange() {
    this.cdr.detectChanges();
    this.initSwiper();
  }

  scrollToContacto() {
    const contacto = document.getElementById('contacto');
    if (contacto) {
      contacto.scrollIntoView({ behavior: 'smooth' });
    }
  }
}