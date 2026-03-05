// src/app/services/datos-empresa.service.ts
import { Injectable } from '@angular/core';

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

export interface RecursoDescarga {
  id: number;
  titulo: string;
  descripcion: string;
  tipo: 'PDF' | 'Guía' | 'Checklist' | 'Infografía';
  tamaño: string;
  icono: string;
  url: string;
}

export interface Equipo {
  id: number;
  nombre: string;
  cargo: string;
  especialidad: string;
  experiencia: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatosEmpresaService {

  constructor() { }

  getInfoEmpresa() {
    return {
      nombre: 'AgroProtect Solutions',
      eslogan: 'Expertos en Control Integral de Plagas en Caña',
      fundacion: 2005,
      telefono: '+1 (800) 555-1234',
      email: 'info@agroprotect.com',
      direccion: 'Av. Agricultura 123, Ciudad Agroindustrial',
      mision: 'Proveer soluciones innovadoras y sostenibles para el control de plagas en cultivos de caña, maximizando la productividad mientras preservamos el medio ambiente para futuras generaciones.',
      vision: 'Ser la empresa líder en América Latina en soluciones fitosanitarias para caña de azúcar, reconocida por nuestra innovación, efectividad y compromiso con la agricultura sostenible.',
      valores: [
        {
          nombre: 'Sostenibilidad',
          descripcion: 'Promovemos prácticas agrícolas que protegen el medio ambiente',
          icono: 'fas fa-leaf'
        },
        {
          nombre: 'Innovación',
          descripcion: 'Invertimos en investigación y desarrollo de nuevas tecnologías',
          icono: 'fas fa-flask'
        },
        {
          nombre: 'Excelencia',
          descripcion: 'Buscamos la máxima calidad en todos nuestros servicios',
          icono: 'fas fa-trophy'
        },
        {
          nombre: 'Integridad',
          descripcion: 'Actuamos con transparencia y responsabilidad',
          icono: 'fas fa-shield-alt'
        },
        {
          nombre: 'Compromiso',
          descripcion: 'Estamos dedicados al éxito de nuestros clientes',
          icono: 'fas fa-handshake'
        }
      ]
    };
  }

  getPlagasImportantes(): Plaga[] {
    return [
      {
        id: 1,
        nombre: 'Barrenador del Tallo',
        nombreCientifico: 'Diatraea saccharalis',
        descripcion: 'Larva que perfora los tallos de la caña, causando daños internos y reduciendo significativamente la producción de azúcar.',
        danos: 'Pérdidas de hasta 30% en rendimiento, reducción de calidad del jugo, quebrantamiento de tallos',
        imagen: 'https://assets.revistacultivar.com.br/c6bb3bb8-d62a-40fd-bebb-7c49ec97e2db.jpg',
        riesgo: 'Alto',
        control: ['Control biológico con Trichogramma', 'Trampas de feromonas', 'Variedades resistentes']
      },
      {
        id: 2,
        nombre: 'Gusano Cogollero',
        nombreCientifico: 'Spodoptera frugiperda',
        descripcion: 'Larva que se alimenta del cogollo y hojas jóvenes, afectando el crecimiento y desarrollo de la planta.',
        danos: 'Defoliación severa, muerte de plantas jóvenes, pérdida de vigor',
        imagen: 'https://proain.com/cdn/shop/articles/gusano-cogollero.jpg?v=1599160974',
        riesgo: 'Alto',
        control: ['Monitoreo temprano', 'Control biológico', 'Manejo cultural']
      },
      {
        id: 3,
        nombre: 'Pulgón Amarillo',
        nombreCientifico: 'Sipha flava',
        descripcion: 'Insecto chupador que debilita la planta y transmite enfermedades virales.',
        danos: 'Amarillamiento, reducción de crecimiento, transmisión de virus',
        imagen: 'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/el-pulgon-amarillo-de-la-cana-de-azucar-llega-por-primera-vez-a-espana/5330750-1-esl-MX/El-pulgon-amarillo-de-la-cana-de-azucar-llega-por-primera-vez-a-Espana.jpg',
        riesgo: 'Medio',
        control: ['Control biológico con depredadores', 'Manejo de hospederos', 'Aplicaciones selectivas']
      },
      {
        id: 4,
        nombre: 'Salivazo',
        nombreCientifico: 'Mahanarva fimbriolata',
        descripcion: 'Produce una espuma salival característica mientras se alimenta de la savia de la planta.',
        danos: 'Debilitamiento general, menor contenido de sacarosa',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzdh-zr2mIBKWmFEtcAmOyVBIhzfankgL6-A&s',
        riesgo: 'Medio',
        control: ['Control biológico con hongos', 'Manejo de residuos', 'Rotación de cultivos']
      },
      {
        id: 5,
        nombre: 'Chapulín',
        nombreCientifico: 'Familia: Acrididae',
        descripcion: 'Insectos saltadores que se alimentan de hojas y tallos, causando defoliación.',
        danos: 'Defoliación completa en infestaciones severas',
        imagen: 'https://oem.com.mx/elsoldelcentro/img/25699016/1757617059/BASE_LANDSCAPE/1200/image.webp',
        riesgo: 'Alto',
        control: ['Barreras físicas', 'Control biológico', 'Aplicaciones localizadas']
      },
      {
        id: 6,
        nombre: 'Escarabajo Rinoceronte',
        nombreCientifico: 'Strategus spp.',
        descripcion: 'Larvas que se alimentan de raíces, afectando la absorción de nutrientes.',
        danos: 'Muerte de plantas, reducción del stand, susceptibilidad a vientos',
        imagen: 'https://static.vecteezy.com/system/resources/previews/003/088/365/large_2x/thai-rhinoceros-beetle-eating-sugar-cane-photo.jpg',
        riesgo: 'Medio',
        control: ['Trampas de luz', 'Manejo de materia orgánica', 'Control biológico']
      }
    ];
  }

  getEstadisticas() {
    return [
      { valor: '98%', descripcion: 'Efectividad en Control', icono: 'fas fa-check-circle' },
      { valor: '18+', descripcion: 'Años de Experiencia', icono: 'fas fa-calendar-alt' },
      { valor: '320+', descripcion: 'Clientes Satisfechos', icono: 'fas fa-users' },
      { valor: '75k+', descripcion: 'Hectáreas Protegidas', icono: 'fas fa-tractor' }
    ];
  }

  getRecursosDescarga(): RecursoDescarga[] {
    return [
      {
        id: 1,
        titulo: 'Guía Completa de Plagas en Caña',
        descripcion: 'Identificación, ciclo de vida y métodos de control para las 12 plagas más importantes',
        tipo: 'Guía',
        tamaño: '5.2 MB',
        icono: 'fas fa-book',
        url: '#'
      },
      {
        id: 2,
        titulo: 'Checklist de Monitoreo Semanal',
        descripcion: 'Formato descargable para registro y seguimiento sistemático de plagas',
        tipo: 'Checklist',
        tamaño: '1.8 MB',
        icono: 'fas fa-clipboard-list',
        url: '#'
      },
      {
        id: 3,
        titulo: 'Infografía: Ciclo del Barrenador',
        descripcion: 'Visualización detallada del ciclo biológico y puntos críticos de control',
        tipo: 'Infografía',
        tamaño: '3.5 MB',
        icono: 'fas fa-chart-pie',
        url: '#'
      },
      {
        id: 4,
        titulo: 'Manual de Buenas Prácticas',
        descripcion: 'Protocolos completos para manejo integrado de plagas en caña',
        tipo: 'PDF',
        tamaño: '8.7 MB',
        icono: 'fas fa-file-pdf',
        url: '#'
      }
    ];
  }

  getCertificaciones() {
    return [
      'ISO 9001:2015 - Sistema de Gestión de Calidad',
      'ISO 14001:2015 - Gestión Ambiental',
      'Certificación en Agricultura Sostenible',
      'Miembro de la Asociación Internacional de Entomología',
      'Sello de Calidad Agroindustrial'
    ];
  }
}