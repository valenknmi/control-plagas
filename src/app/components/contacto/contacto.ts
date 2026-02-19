// src/app/contacto/contacto.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatosEmpresaService } from '../../services/datos-empresa';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class ContactoComponent implements OnInit {
  empresa: any;
  
  formData = {
    nombre: '',
    email: '',
    telefono: '',
    hectareas: '',
    cultivo: '',
    mensaje: '',
    aceptaTerminos: false
  };
  
  enviando = false;
  mensajeEnviado = false;
  errorEnvio = false;

  constructor(private datosService: DatosEmpresaService) {}

  ngOnInit() {
    this.empresa = this.datosService.getInfoEmpresa();
  }

  enviarMensaje() {
    this.enviando = true;
    this.errorEnvio = false;
    
    // Simular envío
    setTimeout(() => {
      this.enviando = false;
      this.mensajeEnviado = true;
      
      // Reset form
      this.formData = {
        nombre: '',
        email: '',
        telefono: '',
        hectareas: '',
        cultivo: '',
        mensaje: '',
        aceptaTerminos: false
      };
      
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        this.mensajeEnviado = false;
      }, 5000);
    }, 1500);
  }

  // ✅ AGREGAR ESTE MÉTODO - Soluciona el error
  abrirMapa() {
    // Abrir Google Maps con la dirección de la empresa
    const direccion = encodeURIComponent(this.empresa.direccion);
    window.open(`https://www.google.com/maps/search/?api=1&query=${direccion}`, '_blank');
  }

  // ✅ Método adicional útil para validación
  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  }
}