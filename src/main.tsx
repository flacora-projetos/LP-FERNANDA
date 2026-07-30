import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

// Avisa o watchdog do index.html que o JS chegou — sem isso ele remove a classe
// `js` em 4s e devolve todo o conteúdo ao estado visível.
document.documentElement.dataset.hydrated = '1';

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Em produção o HTML já vem pré-renderizado (scripts/prerender.mjs), então
// hidratamos. No `vite dev` o container está vazio e caímos no render normal.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
