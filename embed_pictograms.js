const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
const pictogramsCode = fs.readFileSync('pictograms.js', 'utf8');

// Prepare clean inline fallback
const inlineBlock = `
  <!-- External script link -->
  <script src="pictograms.js"></script>
  <!-- Inline Fallback for GitHub / Vercel deployments (guarantees icons load even if pictograms.js wasn't uploaded) -->
  <script>
    if (typeof PICTOGRAMS === 'undefined') {
      ${pictogramsCode.replace(/module\.exports[\s\S]*$/, '')}
    }
  </script>
`;

if (html.includes('<script src="pictograms.js"></script>')) {
  html = html.replace(
    '<!-- High-Contrast Monochrome Vector Pictograms & Auto-Detector -->\n  <script src="pictograms.js"></script>',
    inlineBlock.trim()
  );
  if (!html.includes('Inline Fallback for GitHub')) {
    html = html.replace('<script src="pictograms.js"></script>', inlineBlock.trim());
  }
}

fs.writeFileSync('index.html', html, 'utf8');
fs.writeFileSync('index_release.html', html, 'utf8');
fs.writeFileSync('instructions.html', html, 'utf8');
fs.writeFileSync('patient_instructions.html', html, 'utf8');

console.log('Successfully embedded pictograms fallback and synchronized all HTML files!');
