/**
 * Gera os assets de imagem otimizados a partir dos originais em `assets-src/`.
 * Rode manualmente com `npm run images` sempre que trocar as fotos originais.
 * A saída (public/img) é versionada, então o build da Vercel não depende do sharp.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'assets-src');
const outDir = path.join(root, 'public', 'img');

await mkdir(outDir, { recursive: true });

/** Hero: recorte 4:5, igual ao que o object-cover já fazia no navegador. */
const hero = sharp(path.join(srcDir, 'fernanda-hero.jpg')).resize(1000, 1250, {
  fit: 'cover',
  position: 'centre',
});

/** Autoridade: recorte 1:1 centralizado, igual ao container aspect-square. */
const perfil = sharp(path.join(srcDir, 'fernanda-perfil.jpg')).resize(1000, 1000, {
  fit: 'cover',
  position: 'centre',
});

const variants = [
  { img: hero, name: 'fernanda-cora-gestao-trafego-ecommerce', widths: [500, 1000] },
  { img: perfil, name: 'fernanda-cora-especialista-trafego-pago', widths: [400, 800] },
];

for (const { img, name, widths } of variants) {
  for (const w of widths) {
    const base = img.clone().resize({ width: w });
    await base.clone().webp({ quality: 78 }).toFile(path.join(outDir, `${name}-${w}.webp`));
    await base.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(outDir, `${name}-${w}.jpg`));
  }
}

/** Open Graph 1200x630: foto à direita, título à esquerda sobre o fundo da marca. */
const ogPhoto = await sharp(path.join(srcDir, 'fernanda-hero.jpg'))
  .resize(500, 630, { fit: 'cover', position: 'centre' })
  .toBuffer();

const ogText = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <style>
    .t { fill:#F7F4EF; font-family:'Segoe UI',Arial,sans-serif; font-size:46px; font-weight:700; }
    .s { fill:#C47A5A; font-family:'Segoe UI',Arial,sans-serif; font-size:24px; font-weight:600; letter-spacing:2px; }
    .f { fill:#A09890; font-family:'Segoe UI',Arial,sans-serif; font-size:24px; font-weight:400; }
  </style>
  <text class="s" x="70" y="150">@NANDACORA</text>
  <text class="t" x="70" y="255">Tráfego pago para</text>
  <text class="t" x="70" y="320">e-commerces que querem</text>
  <text class="t" x="70" y="385">crescer com previsibilidade</text>
  <text class="f" x="70" y="470">Tráfego atrai. Estrutura converte. Método escala.</text>
</svg>`);

await sharp({
  create: { width: 1200, height: 630, channels: 3, background: '#1C1A18' },
})
  .composite([
    { input: ogPhoto, left: 700, top: 0 },
    { input: ogText, left: 0, top: 0 },
  ])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(path.join(outDir, 'og-nandacora.jpg'));

/** Favicons a partir do monograma da marca. */
const favicon = Buffer.from(`
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="112" fill="#8B4A2B"/>
  <text x="256" y="352" text-anchor="middle"
        font-family="'Segoe UI',Arial,sans-serif" font-size="300" font-weight="700"
        fill="#F7F4EF">n</text>
</svg>`);

for (const size of [32, 180, 192, 512]) {
  await sharp(favicon).resize(size, size).png().toFile(path.join(outDir, `icon-${size}.png`));
}

console.log('Imagens geradas em public/img');
