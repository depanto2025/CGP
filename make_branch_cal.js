const https = require('https');
const fs = require('fs');

function downloadQr(name, urlParam) {
  const url = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&ecc=L&data=' + encodeURIComponent(urlParam);
  const outPath = 'calibration_' + name + '_qr.png';
  const file = fs.createWriteStream(outPath);
  https.get(url, (res) => {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Saved', outPath);
      try {
        fs.copyFileSync(outPath, 'C:/Users/HP/.gemini/antigravity/brain/271d1fb4-7e32-4094-91be-594dbc0dca0d/' + outPath);
      } catch(e) {}
    });
  });
}

downloadQr('branch_104_tadalafil', 'https://cgp-aldawaa.vercel.app/edu.html?d=tadalafil&b=104&p=0541932559');
