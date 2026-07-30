# LP @nandacora

Landing page de gestão de tráfego pago para e-commerce.

- **Produção:** https://www.nandacora.com.br (o apex redireciona 308 para o `www`)
- **Deploy:** automático na Vercel a cada push na `main` (projeto `lp-fernanda`)
- **Stack:** Vite 6 + React 19 + Tailwind 4, pré-renderizada no build

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:3000
```

O `npm run dev` sobe o `server.ts` (Express + Vite em middleware mode), que também
serve o endpoint `/api/meta-event` da Conversions API. Em produção esse endpoint
vira a function `api/meta-event.js` da Vercel.

Variáveis de ambiente em `.env.example`. Sem `META_PIXEL_ID` e `META_ACCESS_TOKEN`
o endpoint responde `{status: "skipped"}` em vez de falhar.

## Build

```bash
npm run build   # client + SSR + pré-render + bundle do server
npm run preview # serve o dist/
npm run lint    # tsc --noEmit
```

O `build` roda quatro etapas em sequência:

1. `vite build` — bundle do cliente em `dist/`
2. `vite build --ssr src/entry-server.tsx` — bundle de SSR em `dist-ssr/`
3. `node scripts/prerender.mjs` — renderiza o App e injeta o HTML em `dist/index.html`
4. `esbuild server.ts` — bundle do servidor Express (usado fora da Vercel)

## ⚠️ A página é pré-renderizada — não quebre isso

Crawlers de IA (GPTBot, ClaudeBot, PerplexityBot) **não executam JavaScript**.
Antes da pré-renderização, o HTML entregue tinha 1,2 KB e nenhuma palavra de
conteúdo — a página era invisível para ChatGPT, Perplexity e AI Overviews.

Hoje o `dist/index.html` sai com **~34 KB de conteúdo real**. Duas consequências
para quem mexer no `src/App.tsx`:

**1. Nada pode depender de JavaScript para ficar visível.**
As animações são CSS + `IntersectionObserver`, com progressive enhancement: o
estado escondido (`.js .reveal`) só é aplicado quando o script inline do
`index.html` confirma que há JS. Sem JS, o conteúdo nasce visível. Há ainda um
watchdog de 4s que remove a classe `js` se a hidratação não acontecer.

Não reintroduza `motion/react` (ou qualquer lib que esconda conteúdo por JS) sem
antes garantir que o texto continua no HTML e visível.

**2. O App precisa renderizar no servidor.**
Nada de `window`/`document` fora de `useEffect`. O `entry-server.tsx` roda em Node.

**Como conferir depois de mexer:**

```bash
npm run build
wc -c dist/index.html    # esperado ~34 KB — se voltar a ~1 KB, o pré-render quebrou
```

## Imagens

Ficam em `public/img`, **versionadas no repo**, geradas a partir de `assets-src/`:

```bash
npm run images
```

O script (`scripts/build-images.mjs`) recorta, redimensiona e exporta WebP + JPEG
em dois tamanhos, além do Open Graph 1200×630 e dos favicons. Como a saída é
commitada, o build da Vercel não precisa do `sharp`.

Para trocar uma foto: substitua o arquivo em `assets-src/`, rode `npm run images`
e commite o resultado. Nada de hotlink para Google Drive ou serviço externo.

## SEO / GEO

O que está implementado e onde:

| Item | Arquivo |
|---|---|
| `lang="pt-BR"`, title, description, canonical, robots | `index.html` |
| Open Graph + Twitter Card | `index.html` |
| JSON-LD (WebSite, Organization, Person, Service, WebPage, FAQPage) | `index.html` |
| Verificação do Search Console (meta + arquivo) | `index.html`, `public/google1674ce82ce6327c4.html` |
| Fontes self-hosted com preload | `src/index.css`, `public/fonts/` |
| Liberação dos crawlers de IA | `public/robots.txt` |
| Sitemap | `public/sitemap.xml` |
| Resumo para LLMs | `public/llms.txt` |
| FAQ (blocos citáveis por AI Overviews) | `src/App.tsx` → `FAQ_ITEMS` |

**Ao editar as FAQs, atualize os dois lugares:** o array `FAQ_ITEMS` em
`src/App.tsx` (texto visível) e o bloco `FAQPage` do JSON-LD em `index.html`.
Structured data que não bate com o conteúdo visível viola as diretrizes do Google.

**Ao mudar o conteúdo da página**, atualize também `public/llms.txt` e o
`lastmod` do `public/sitemap.xml`.

## Search Console

Propriedade `https://www.nandacora.com.br/` (prefixo de URL), verificada por meta
tag e arquivo HTML — os dois estão no repo, não remova.

Uma propriedade de domínio (`sc-domain:nandacora.com.br`) cobriria www e apex de
uma vez, mas exige um registro TXT no DNS.
