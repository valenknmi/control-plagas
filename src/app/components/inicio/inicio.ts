// src/app/components/inicio/inicio.ts
import { Component, OnInit, OnDestroy, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DatosEmpresaService } from '../../services/datos-empresa';
import { gsap } from 'gsap';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio implements OnInit, OnDestroy, AfterViewInit {
  estadisticas: any[] = [];

  // IMÁGENES DE CAÑA DE AZÚCAR
  imagenesCana = [
    {
      place: 'Caña de Azúcar',
      title1: 'CULTIVOS',
      title2: 'PROTEGIDOS',
      description: 'Protegemos tu cultivo con tecnología de punta y métodos sostenibles. Experiencia en el manejo integrado de plagas.',
      image: 'https://images.unsplash.com/photo-1585155113372-6c1808141bf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      place: 'Caña de Azúcar',
      title1: 'COSECHA',
      title2: 'ABUNDANTE',
      description: 'Maximizamos el rendimiento de tus cultivos de caña mediante un control eficiente y seguro contra todo tipo de plagas.',
      image: 'https://images.unsplash.com/photo-1586315776885-a176ffccbe01?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      place: 'Caña de Azúcar',
      title1: 'MONITOREO',
      title2: 'CONSTANTE',
      description: 'Detección temprana y precisa de plagas para prevenir daños y asegurar la calidad del producto final.',
      image: 'https://images.unsplash.com/photo-1566735049879-444f282d77f9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      place: 'Caña de Azúcar',
      title1: 'SALUD',
      title2: 'VEGETAL',
      description: 'Mantenemos un equilibrio ecológico, favoreciendo la salud general de las plantas en cada etapa del cultivo.',
      image: 'https://images.unsplash.com/photo-1719424668314-a0def541377b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhJUMzJUIxYSUyMGRlJTIwYXp1Y2FyfGVufDB8fDB8fHww'
    },
    {
      place: 'Caña de Azúcar',
      title1: 'CALIDAD',
      title2: 'SUPERIOR',
      description: 'Garantizamos los más altos estándares en cada etapa del desarrollo de la caña con resultados comprobados.',
      image: 'https://www.novagromexico.com/wp-content/uploads/2025/01/cultivo-de-cana.jpg'
    }
  ];

  order: number[] = [];
  detailsEven = true;
  offsetTop = 200;
  offsetLeft = 700;
  cardWidth = 200;
  cardHeight = 300;
  gap = 40;
  numberSize = 50;
  ease = "sine.inOut";
  clicks = 0;
  timer: any;

  private isBrowser: boolean;

  constructor(
    private datosService: DatosEmpresaService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.estadisticas = this.datosService.getEstadisticas();
    this.order = this.imagenesCana.map((_, i) => i);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      setTimeout(() => {
        this.initGsap();
      }, 100);
    }
  }

  ngOnDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.isBrowser) {
      gsap.killTweensOf("*");
    }
  }

  getCard(index: number) { return `#card${index}`; }
  getCardContent(index: number) { return `#card-content-${index}`; }
  getSliderItem(index: number) { return `#slide-item-${index}`; }

  initGsap() {
    if (!this.order.length || !document.querySelector('.hero-gsap')) return;

    const [active, ...rest] = this.order;
    const detailsActive = this.detailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = this.detailsEven ? "#details-odd" : "#details-even";
    const { innerHeight: height, innerWidth: width } = window;

    // Responsive adjustments
    if (width <= 768) {
      this.cardWidth = 150;
      this.cardHeight = 220;
      this.gap = 20;
      this.offsetTop = height - 300;
      this.offsetLeft = width - 400;
    } else {
      this.cardWidth = 200;
      this.cardHeight = 300;
      this.gap = 40;
      this.offsetTop = height - 430;
      this.offsetLeft = width - 830;
    }

    gsap.set("#pagination", {
      top: this.offsetTop + 330,
      left: this.offsetLeft,
      y: 200,
      opacity: 0,
      zIndex: 60,
    });

    gsap.set(this.getCard(active), {
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    gsap.set(this.getCardContent(active), { x: 0, y: 0, opacity: 0 });
    gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
    gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
    gsap.set(`${detailsInactive} .text`, { y: 100 });
    gsap.set(`${detailsInactive} .title-1`, { y: 100 });
    gsap.set(`${detailsInactive} .title-2`, { y: 100 });
    gsap.set(`${detailsInactive} .desc`, { y: 50 });
    gsap.set(`${detailsInactive} .cta`, { y: 60 });

    gsap.set(".progress-sub-foreground", {
      width: 500 * (1 / this.order.length) * (active + 1),
    });

    rest.forEach((i, index) => {
      gsap.set(this.getCard(i), {
        x: this.offsetLeft + 400 + index * (this.cardWidth + this.gap),
        y: this.offsetTop,
        width: this.cardWidth,
        height: this.cardHeight,
        zIndex: 30,
        borderRadius: 10,
      });
      gsap.set(this.getCardContent(i), {
        x: this.offsetLeft + 400 + index * (this.cardWidth + this.gap),
        zIndex: 40,
        y: this.offsetTop + this.cardHeight - 100,
      });
      gsap.set(this.getSliderItem(i), { x: (index + 1) * this.numberSize });
    });

    gsap.set(".indicator", { x: -window.innerWidth });

    const startDelay = 0.6;

    gsap.to(".cover", {
      x: width + 400,
      delay: 0.5,
      duration: 1.5,
      ease: this.ease,
      onComplete: () => {
        this.timer = setTimeout(() => {
          this.loop();
        }, 500);
      },
    });

    rest.forEach((i, index) => {
      gsap.to(this.getCard(i), {
        x: this.offsetLeft + index * (this.cardWidth + this.gap),
        zIndex: 30,
        duration: 1.0,
        ease: this.ease,
        delay: startDelay + 0.05 * index,
      });
      gsap.to(this.getCardContent(i), {
        x: this.offsetLeft + index * (this.cardWidth + this.gap),
        zIndex: 40,
        duration: 1.0,
        ease: this.ease,
        delay: startDelay + 0.05 * index,
      });
    });

    gsap.to("#pagination", { y: 0, opacity: 1, duration: 1.0, ease: this.ease, delay: startDelay });
    gsap.to(detailsActive, { opacity: 1, x: 0, duration: 1.0, ease: this.ease, delay: startDelay });

    this.updateDetails(active, detailsActive);
  }

  updateDetails(index: number, selector: string) {
    const data = this.imagenesCana[index];
    const el = document.querySelector(selector);
    if (el) {
      const placeEl = el.querySelector('.place-box .text');
      const t1El = el.querySelector('.title-1');
      const t2El = el.querySelector('.title-2');
      const descEl = el.querySelector('.desc');
      if (placeEl) placeEl.textContent = data.place;
      if (t1El) t1El.textContent = data.title1;
      if (t2El) t2El.textContent = data.title2;
      if (descEl) descEl.textContent = data.description;
    }
  }

  step(): Promise<void> {
    return new Promise((resolve) => {
      this.order.push(this.order.shift()!);
      this.detailsEven = !this.detailsEven;

      const detailsActive = this.detailsEven ? "#details-even" : "#details-odd";
      const detailsInactive = this.detailsEven ? "#details-odd" : "#details-even";

      this.updateDetails(this.order[0], detailsActive);

      gsap.set(detailsActive, { zIndex: 22 });
      gsap.to(detailsActive, { opacity: 1, delay: 0.4, duration: 1.0, ease: this.ease });
      gsap.to(`${detailsActive} .text`, { y: 0, delay: 0.1, duration: 0.7, ease: this.ease });
      gsap.to(`${detailsActive} .title-1`, { y: 0, delay: 0.15, duration: 0.7, ease: this.ease });
      gsap.to(`${detailsActive} .title-2`, { y: 0, delay: 0.15, duration: 0.7, ease: this.ease });
      gsap.to(`${detailsActive} .desc`, { y: 0, delay: 0.3, duration: 0.4, ease: this.ease });
      gsap.to(`${detailsActive} .cta`, {
        y: 0,
        delay: 0.35,
        duration: 0.4,
        ease: this.ease,
        onComplete: () => resolve(),
      });
      gsap.set(detailsInactive, { zIndex: 12 });

      const [active, ...rest] = this.order;
      const prv = rest[rest.length - 1];

      gsap.set(this.getCard(prv), { zIndex: 10 });
      gsap.set(this.getCard(active), { zIndex: 20 });
      gsap.to(this.getCard(prv), { scale: 1.5, duration: 1.0, ease: this.ease });

      gsap.to(this.getCardContent(active), {
        y: this.offsetTop + this.cardHeight - 10,
        opacity: 0,
        duration: 0.3,
        ease: this.ease,
      });
      gsap.to(this.getSliderItem(active), { x: 0, duration: 1.0, ease: this.ease });
      gsap.to(this.getSliderItem(prv), { x: -this.numberSize, duration: 1.0, ease: this.ease });
      gsap.to(".progress-sub-foreground", {
        width: 500 * (1 / this.order.length) * (active + 1),
        duration: 1.0,
        ease: this.ease,
      });

      gsap.to(this.getCard(active), {
        x: 0,
        y: 0,
        duration: 1.0,
        ease: this.ease,
        width: window.innerWidth,
        height: window.innerHeight,
        borderRadius: 0,
        onComplete: () => {
          const xNew = this.offsetLeft + (rest.length - 1) * (this.cardWidth + this.gap);
          gsap.set(this.getCard(prv), {
            x: xNew,
            y: this.offsetTop,
            width: this.cardWidth,
            height: this.cardHeight,
            zIndex: 30,
            borderRadius: 10,
            scale: 1,
          });

          gsap.set(this.getCardContent(prv), {
            x: xNew,
            y: this.offsetTop + this.cardHeight - 100,
            opacity: 1,
            zIndex: 40,
          });
          gsap.set(this.getSliderItem(prv), { x: rest.length * this.numberSize });

          gsap.set(detailsInactive, { opacity: 0 });
          gsap.set(`${detailsInactive} .text`, { y: 100 });
          gsap.set(`${detailsInactive} .title-1`, { y: 100 });
          gsap.set(`${detailsInactive} .title-2`, { y: 100 });
          gsap.set(`${detailsInactive} .desc`, { y: 50 });
          gsap.set(`${detailsInactive} .cta`, { y: 60 });
          this.clicks -= 1;
          if (this.clicks > 0) {
            this.step();
          }
        },
      });

      rest.forEach((i, index) => {
        if (i !== prv) {
          const xNew = this.offsetLeft + index * (this.cardWidth + this.gap);
          gsap.set(this.getCard(i), { zIndex: 30 });
          gsap.to(this.getCard(i), {
            x: xNew,
            y: this.offsetTop,
            width: this.cardWidth,
            height: this.cardHeight,
            duration: 1.0,
            ease: this.ease,
            delay: 0.1 * (index + 1),
          });

          gsap.to(this.getCardContent(i), {
            x: xNew,
            y: this.offsetTop + this.cardHeight - 100,
            opacity: 1,
            zIndex: 40,
            duration: 1.0,
            ease: this.ease,
            delay: 0.1 * (index + 1),
          });
          gsap.to(this.getSliderItem(i), { x: (index + 1) * this.numberSize, duration: 1.0, ease: this.ease });
        }
      });
    });
  }

  async loop() {
    gsap.to(".indicator", { x: 0, duration: 2.0 });
    gsap.to(".indicator", { x: window.innerWidth, delay: 2.3, duration: 0.8 });
    await this.step();
    this.timer = setTimeout(() => {
      gsap.set(".indicator", { x: -window.innerWidth });
      this.loop();
    }, 3100);
  }

  nextSlide() {
    this.clicks++;
    if (this.clicks === 1) {
      if (this.timer) clearTimeout(this.timer);
      gsap.set(".indicator", { x: -window.innerWidth });
      this.step().then(() => {
        if (this.clicks === 0) {
          this.loop();
        }
      });
    }
  }

  prevSlide() {
    this.nextSlide();
  }

  // 🎯 MÉTODO DE SCROLL
  scrollToSeccion(seccionId: string) {
    const elemento = document.getElementById(seccionId);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  }
}