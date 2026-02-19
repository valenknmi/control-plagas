// src/app/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  // ✅ AGREGAR ESTE MÉTODO - Soluciona el error
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // ✅ Método adicional para abrir términos y condiciones
  openTerms() {
    // Aquí puedes agregar la lógica para abrir términos y condiciones
    console.log('Abrir términos y condiciones');
    // window.open('/terminos', '_blank');
  }

  // ✅ Método adicional para abrir política de privacidad
  openPrivacy() {
    // Aquí puedes agregar la lógica para abrir política de privacidad
    console.log('Abrir política de privacidad');
    // window.open('/privacidad', '_blank');
  }

  // ✅ Método adicional para abrir política de cookies
  openCookies() {
    // Aquí puedes agregar la lógica para abrir política de cookies
    console.log('Abrir política de cookies');
    // window.open('/cookies', '_blank');
  }
}