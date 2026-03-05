import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import * as anime from 'animejs';

@Component({
  selector: 'app-error404',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './error404.html',
  styleUrls: ['./error404.css']
})
export class Error404 implements OnInit {

  constructor(
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    // Asegurar que estamos en el cliente y los elementos existen antes de animar
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.iniciarAnimaciones();
      }, 100);
    }
  }

  iniciarAnimaciones() {
    const animejs = (anime as any).default || anime;

    if (document.querySelector('.row svg')) {
      animejs({
        targets: '.row svg',
        translateY: 10,
        autoplay: true,
        loop: true,
        easing: 'easeInOutSine',
        direction: 'alternate'
      });
    }

    if (document.querySelector('#zero')) {
      animejs({
        targets: '#zero',
        translateX: 10,
        autoplay: true,
        loop: true,
        easing: 'easeInOutSine',
        direction: 'alternate',
        scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
        rotateY: { value: '+=180', delay: 200 }
      });
    }
  }

  goBack() {
    this.location.back();
  }
}