const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\LapOne MX\\.gemini\\antigravity\\brain';
const dirs = fs.readdirSync(brainDir);

let match = null;
const regex = /<a target="_blank" href="https:\/\/www\.youtube\.com\/shorts\/V5eSXcn9YRc">[\s\S]*?<\/a>/;

for (const dir of dirs) {
    const logsDir = path.join(brainDir, dir, '.system_generated', 'logs');
    if (fs.existsSync(logsDir)) {
        const files = fs.readdirSync(logsDir);
        for (const f of files) {
            if (f.endsWith('.txt')) {
                const c = fs.readFileSync(path.join(logsDir, f), 'utf8');
                const m = c.match(regex);
                if (m) {
                    match = m[0];
                    break;
                }
            }
        }
    }
    if (match) break;
}

if (match) {
    const targetHTML = 'C:\\Users\\LapOne MX\\control-plagas\\src\\app\\components\\error404\\error404.html';
    let html = fs.readFileSync(targetHTML, 'utf8');

    if (html.includes('<!-- Animación SVG -->')) {
        html = html.replace(/<a href="\/\" class="error-animation">[\s\S]*?<\/a>/, match.replace(/\$/g, '$$$$'));
        fs.writeFileSync(targetHTML, html, 'utf8');
        console.log('Successfully injected SVG from logs into HTML!');
    } else {
        // Reconstruct the file entirely, since the user messed it up
        html = `<div class="error-container">
  <div class="error-content">
    <!-- Animación SVG -->
    ${match.replace(/\$/g, '$$$$')}
    
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
        <a (click)="goBack()" class="btn-secondary">
          <i class="fas fa-arrow-left"></i>
          Volver Atrás
        </a>
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
        fs.writeFileSync(targetHTML, html, 'utf8');
        console.log('Successfully reconstructed HTML and injected SVG from logs!');
    }
} else {
    console.log('SVG not found in any logs');
}
