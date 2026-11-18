// Arma la imagen que se ve al compartir el link (1200x630) y el ícono para iPhone
import sharp from 'sharp';
const photo = await sharp('src/cand/general3-2.bin').resize(760, 630, { fit: 'cover', position: 'attention' }).toBuffer();
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
<defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#2b1710"/><stop offset=".72" stop-color="#2b1710"/><stop offset="1" stop-color="#2b1710" stop-opacity="0"/></linearGradient></defs>
<rect width="640" height="630" fill="url(#g)"/>
<rect x="64" y="70" width="210" height="46" rx="23" fill="#d23a1c"/>
<text x="169" y="101" text-anchor="middle" font-family="Segoe UI, Arial" font-weight="700" font-size="22" fill="#fff">HACEMOS ENVÍOS</text>
<text x="64" y="215" font-family="Arial Black, Segoe UI Black, Arial" font-weight="900" font-size="74" fill="#fff6e6">Almacén</text>
<text x="64" y="300" font-family="Arial Black, Segoe UI Black, Arial" font-weight="900" font-size="74" fill="#f6b931">de Pollos</text>
<text x="66" y="372" font-family="Segoe UI, Arial" font-weight="600" font-size="30" fill="#fff6e6" fill-opacity=".85">Pollo fresco, milanesas, empanadas</text>
<text x="66" y="412" font-family="Segoe UI, Arial" font-weight="600" font-size="30" fill="#fff6e6" fill-opacity=".85">y congelados</text>
<rect x="64" y="470" width="372" height="78" rx="18" fill="#f6b931"/>
<text x="88" y="503" font-family="Segoe UI, Arial" font-weight="700" font-size="20" fill="#2b1710">8 PROMOS DESDE</text>
<text x="88" y="536" font-family="Arial Black, Arial" font-weight="900" font-size="30" fill="#2b1710">$14.500</text>
<text x="290" y="530" font-family="Segoe UI, Arial" font-weight="700" font-size="20" fill="#2b1710">Ver catálogo →</text>
</svg>`;
await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#2b1710' } })
  .composite([{ input: photo, left: 440, top: 0 }, { input: Buffer.from(svg), left: 0, top: 0 }])
  .jpeg({ quality: 84, mozjpeg: true }).toFile('public/img/og.jpg');
await sharp('public/img/icon.svg', { density: 600 }).resize(180, 180).png().toFile('public/img/apple-touch-icon.png');
console.log('ok');
