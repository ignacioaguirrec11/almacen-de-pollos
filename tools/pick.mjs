// Pasa las fotos elegidas de src/cand a public/img en WebP
import sharp from 'sharp';
const PICK = {
  patitas: 'patitas-3', supremas: 'supremas-4', hamburguesas: 'hamburguesas-1', filet: 'filet-1',
  medallones: 'medallones-1', albondigas: 'albondigas-5', patamuslo: 'patamuslo-1', empanadas: 'empanadas-2',
  tartas: 'tartas-0', sorrentinos: 'sorrentinos-2', 'mila-ternera': 'milaternera-2', 'mila-cerdo': 'milacerdo-0',
  costeleta: 'costeleta-0', caritas: 'caritas2-1', daditos: 'daditos-0', merluza: 'merluza-3',
  nuggets: 'nuggets-2', 'med-pescado': 'medpescado-1', hero: 'general3-2',
};
for (const [out, src] of Object.entries(PICK)) {
  const w = out === 'hero' ? 1200 : 800;
  await sharp(`src/cand/${src}.bin`).rotate().resize(out === 'hero' ? 900 : w, out === 'hero' ? 1200 : Math.round(w * 0.75), { fit: 'cover', position: 'attention' })
    .webp({ quality: 74 }).toFile(`public/img/${out}.webp`);
}
console.log('ok');
