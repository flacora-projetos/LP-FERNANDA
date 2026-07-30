import { renderToString } from 'react-dom/server';
import App from './App';

/**
 * Entry point de SSR usado apenas em build time (scripts/prerender.mjs).
 * O HTML gerado é injetado no dist/index.html para que buscadores e crawlers
 * de IA — que não executam JavaScript — recebam a página já com conteúdo.
 */
export function render() {
  return renderToString(<App />);
}
