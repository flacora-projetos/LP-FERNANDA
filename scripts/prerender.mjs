/**
 * Injeta o HTML pré-renderizado do App dentro de dist/index.html.
 * Roda depois de `vite build` e `vite build --ssr` (ver script "build").
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = path.join(root, 'dist', 'index.html');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();

const template = await readFile(indexPath, 'utf8');
const placeholder = '<div id="root"></div>';

if (!template.includes(placeholder)) {
  throw new Error(`prerender: placeholder "${placeholder}" não encontrado em dist/index.html`);
}

const output = template.replace(placeholder, `<div id="root">${appHtml}</div>`);
await writeFile(indexPath, output, 'utf8');

console.log(`Pré-renderizado: ${appHtml.length.toLocaleString('pt-BR')} caracteres de HTML injetados em dist/index.html`);
