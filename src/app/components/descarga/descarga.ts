// src/app/descarga/descarga.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatosEmpresaService } from '../../services/datos-empresa';

@Component({
  selector: 'app-descarga',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './descarga.html',
  styleUrls: ['./descarga.css']
})
export class DescargaComponent implements OnInit {
  emailNewsletter: string = '';
  suscrito: boolean = false;
  plataformaSeleccionada: string = 'android';
  codigoVisible: boolean = false;
  
  // Información de la app móvil
  appInfo = {
    nombre: 'AgroProtect Cana',
    version: '2.5.0',
    tamano: '45 MB',
    ultimaActualizacion: '15 Enero 2026',
    dispositivos: ['Android 8.0+', 'iOS 13+'],
    calificacion: 4.8,
    descargas: '10k+'
  };

  // Características de la app
  caracteristicas = [
    {
      icono: 'fas fa-camera',
      titulo: 'Identificador de Plagas',
      descripcion: 'Toma una foto y nuestra IA identifica la plaga automáticamente'
    },
    {
      icono: 'fas fa-map-marked-alt',
      titulo: 'Mapas de Incidencia',
      descripcion: 'Visualiza zonas de riesgo en tu cultivo con geolocalización'
    },
    {
      icono: 'fas fa-bell',
      titulo: 'Alertas Tempranas',
      descripcion: 'Recibe notificaciones cuando se detecten condiciones propicias para plagas'
    },
    
    {
      icono: 'fas fa-book-open',
      titulo: 'Biblioteca Técnica',
      descripcion: 'Accede a guías y manuales sin conexión a internet'
    },
    
  ];

  // Pasos para usar la app
  pasosUso = [
    {
      numero: 1,
      titulo: 'Descarga la app',
      descripcion: 'Escanea el código QR o busca "AgroProtect Cana" en tu tienda de aplicaciones'
    },
    {
      numero: 2,
      titulo: 'Crea tu cuenta',
      descripcion: 'Regístrate con tu correo y completa tu perfil de productor'
    },
    {
      numero: 3,
      titulo: 'Registra tu cultivo',
      descripcion: 'Añade la ubicación y características de tus parcelas'
    },
    {
      numero: 4,
      titulo: 'Comienza a monitorear',
      descripcion: 'Usa la cámara para identificar plagas y recibe recomendaciones'
    }
  ];

  constructor(private datosService: DatosEmpresaService) {}

  ngOnInit() {}

  // Seleccionar plataforma
  seleccionarPlataforma(plataforma: string) {
    this.plataformaSeleccionada = plataforma;
  }

  // Descargar app
  descargarApp(plataforma: string) {
    let url = '';
    if (plataforma === 'android') {
      url = 'https://play.google.com/store/apps/details?id=com.agroprotect.cana';
    } else if (plataforma === 'ios') {
      url = 'https://apps.apple.com/app/agroprotect-cana/id123456789';
    }
    window.open(url, '_blank');
  }

  // Escanear QR
  escanearQR() {
    this.codigoVisible = true;
  }

  cerrarQR() {
    this.codigoVisible = false;
  }

  // Compartir app
  compartirApp() {
    if (navigator.share) {
      navigator.share({
        title: 'AgroProtect Cana',
        text: 'Descarga la app para identificar plagas en caña de azúcar',
        url: 'https://agroprotect.com/app'
      }).catch(() => {
        this.copiarEnlace();
      });
    } else {
      this.copiarEnlace();
    }
  }

  copiarEnlace() {
    const enlace = 'https://agroprotect.com/app';
    navigator.clipboard.writeText(enlace).then(() => {
      alert('¡Enlace copiado al portapapeles!');
    });
  }

  // Newsletter
  suscribirNewsletter() {
    if (this.emailNewsletter && this.emailNewsletter.includes('@')) {
      this.suscrito = true;
      this.emailNewsletter = '';
      
      setTimeout(() => {
        this.suscrito = false;
      }, 5000);
    }
  }

  // Testimonios
  testimonios = [
    {
      nombre: 'Carlos Martínez',
      cargo: 'Productor, Ingenio Central',
      foto: 'assets/testimonios/carlos.jpg',
      texto: 'Esta app me ha ahorrado horas de inspección. La identificación por foto es increíblemente precisa.',
      calificacion: 5
    },
    {
      nombre: 'Ana Rodríguez',
      cargo: 'Ingeniera Agrónoma',
      foto: 'assets/testimonios/ana.jpg',
      texto: 'Las alertas tempranas nos permitieron actuar antes de que una plaga se propagara. ¡Excelente herramienta!',
      calificacion: 5
    },
    {
      nombre: 'José Hernández',
      cargo: 'Administrador de Finca',
      foto: 'assets/testimonios/jose.jpg',
      texto: 'Toda la información de mis cultivos en un solo lugar. Los mapas de incidencia son muy útiles.',
      calificacion: 4
    }
  ];

  getEstrellas(calificacion: number): string[] {
    return Array(calificacion).fill('fas fa-star');
  }

  getEstrellasVacias(calificacion: number): string[] {
    return Array(5 - calificacion).fill('far fa-star');
  }
}