const fs = require('fs');
const path = require('path');

const logsDir = 'C:\\Users\\LapOne MX\\.gemini\\antigravity\\brain\\80c96076-cb55-4913-b51e-dec63c602221\\.system_generated\\logs';
const targetFile = 'C:\\Users\\LapOne MX\\control-plagas\\src\\app\\components\\error404\\error404.html';

let svgMatch = null;

const files = fs.readdirSync(logsDir);
for (const file of files) {
    if (file.endsWith('.txt')) {
        const content = fs.readFileSync(path.join(logsDir, file), 'utf8');
        const match = content.match(/<a target="_blank" href="https:\/\/www\.youtube\.com\/shorts\/V5eSXcn9YRc\">[\s\S]*?<\/a>/);
        if (match) {
            svgMatch = match[0];
            break;
        }
    }
}

if (svgMatch) {
    let html = fs.readFileSync(targetFile, 'utf8');
    html = html.replace(/<a href="\/\" class="error-animation">[\s\S]*?<\/a>/, svgMatch.replace(/\$/g, '$$$$'));
    fs.writeFileSync(targetFile, html, 'utf8');
    console.log('Successfully injected SVG!');
} else {
    console.log('SVG not found in logs');
}
