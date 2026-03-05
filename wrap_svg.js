const fs = require('fs');
const htmlPath = 'C:\\Users\\LapOne MX\\control-plagas\\src\\app\\components\\error404\\error404.html';
const rawHtml = fs.readFileSync(htmlPath, 'utf8');

// Si no tiene el contenedor, lo envolvemos
if (!rawHtml.includes('class="error-container"')) {
    const wrappedHtml = `<div class="error-container">
  <div class="error-content">
    <!-- Animación SVG -->
    <div class="error-animation">
      ${rawHtml}
    </div>

    <!-- Mensaje de error -->
    <div class="error-message">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">¡Página no encontrada!</h2>
      <p class="error-description">
        Parece que te has perdido en el cañaveral. La página que buscas no existe o ha sido movida.
      </p>

      <!-- Botones de acción -->
      <div class="error-actions">
        <a routerLink="/" class="btn-primary">
          <i class="fas fa-home"></i>
          Ir al Inicio
        </a>
        <button (click)="goBack()" class="btn-secondary">
          <i class="fas fa-arrow-left"></i>
          Volver Atrás
        </button>
      </div>

      <!-- Enlaces útiles -->
      <div class="error-links">
        <p>Quizás te interese:</p>
        <div class="useful-links">
          <a routerLink="/">Plagas Importantes</a>
          <a routerLink="/">Descargar App</a>
          <a routerLink="/">Contacto</a>
        </div>
      </div>
    </div>
  </div>
</div>`;

    fs.writeFileSync(htmlPath, wrappedHtml, 'utf8');
    console.log("HTML reparado exitosamente");
} else {
    console.log("HTML ya contenía las clases correctas.");
}
