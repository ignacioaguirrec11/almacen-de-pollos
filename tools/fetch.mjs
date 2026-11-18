// Busca imágenes en Bing y arma una hoja de contacto por producto en src/cand/
import sharp from 'sharp';
import fs from 'node:fs/promises';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36';
const Q = JSON.parse(await fs.readFile(process.argv[2], 'utf8'));
const N = 8;
for (const [key, q] of Object.entries(Q)) {
  const html = await (await fetch(`https://www.bing.com/images/search?q=${encodeURIComponent(q)}&qft=+filterui:imagesize-large&form=IRFLTR`, { headers: { 'User-Agent': UA } })).text();
  const urls = [...html.matchAll(/murl&quot;:&quot;(.*?)&quot;/g)].map((m) => m[1]).slice(0, 14);
  const tiles = []; const keep = [];
  for (const u of urls) {
    if (tiles.length >= N) break;
    try {
      const r = await fetch(u, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(10000) });
      if (!r.ok) continue;
      const buf = Buffer.from(await r.arrayBuffer());
      const meta = await sharp(buf).metadata();
      if (meta.width < 700) continue;
      const i = tiles.length;
      await fs.writeFile(`src/cand/${key}-${i}.bin`, buf);
      keep.push({ i, u, w: meta.width, h: meta.height });
      const t = await sharp(buf).resize(300, 300, { fit: 'cover' }).composite([{ input: Buffer.from(`<svg width="300" height="300"><rect width="44" height="40" fill="#000"/><text x="10" y="30" font-size="28" fill="#fff" font-family="Arial">${i}</text></svg>`) }]).jpeg().toBuffer();
      tiles.push(t);
    } catch {}
  }
  await fs.writeFile(`src/cand/${key}.json`, JSON.stringify(keep, null, 1));
  if (!tiles.length) { console.log(key, 'SIN RESULTADOS'); continue; }
  await sharp({ create: { width: 1200, height: 600, channels: 3, background: '#fff' } })
    .composite(tiles.map((t, i) => ({ input: t, left: (i % 4) * 300, top: Math.floor(i / 4) * 300 })))
    .jpeg({ quality: 80 }).toFile(`src/cand/_${key}.jpg`);
  console.log(key, tiles.length);
}
