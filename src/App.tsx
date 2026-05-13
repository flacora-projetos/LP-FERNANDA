import { motion } from 'motion/react';
import { ArrowRight, BarChart3, CheckCircle2, ChevronRight, TrendingUp, Users, Instagram, Linkedin } from 'lucide-react';
import { ReactNode } from 'react';

const WHATSAPP_NUMBER = "556296242626";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, Fernanda! Quero entender melhor a gestão de tráfego para e-commerce.")}`;

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Reusable Button Component
function Button({ children, outline = false, className = "" }: { children: ReactNode, outline?: boolean, className?: string }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-all ${
        outline
          ? 'border border-ink text-ink hover:bg-ink hover:text-surface'
          : 'bg-brand text-white hover:opacity-90 shadow-sm'
      } ${className}`}
    >
      {children}
    </a>
  );
}

// Fade in component for scroll animations
function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-light/30">
      
      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-50 flex items-center justify-between p-6 md:px-12">
        <div className="font-display text-xl font-bold tracking-tight">@nandacora</div>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-brand transition-colors">
          Solicitar diagnóstico
        </a>
      </header>

      {/* SEÇÃO 1: HERO */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <FadeIn className="max-w-2xl">
              <span className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
                Tráfego Pago para E-commerce
              </span>
              <h1 className="mb-6 font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl text-ink">
                Tráfego pago para e-commerces que querem crescer com previsibilidade
              </h1>
              <p className="mb-8 text-lg text-ink/90 leading-relaxed md:text-xl">
                Você já vende online, mas sente que o crescimento ainda depende de tentativa e erro? Eu ajudo e-commerces com produtos próprios a organizar tráfego, conversão e decisões para crescer com mais clareza.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button>
                  Falar com a Fernanda
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Imagem do Atendimento */}
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-surface/50">
                <img 
                  src="https://drive.google.com/thumbnail?id=1d41SlTvjMXnnxAky-mkO7aKp7U5hvRlX&sz=w1000" 
                  alt="Fernanda - Gestão de Tráfego" 
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl w-64 border border-gray-100">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand-light animate-pulse"></div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink/70">Foco no Funil</span>
                </div>
                <p className="text-sm font-medium leading-snug">
                  Não é só subir campanha. É entender o funil inteiro para vender melhor.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: PARA QUEM É */}
      <section className="bg-ink py-24 text-surface">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <h2 className="mb-12 max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Essa gestão é para o seu e-commerce se:
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Você tem produtos próprios e já vende online.",
              "Suas campanhas até trazem movimento, mas o crescimento ficou instável.",
              "Você quer parar de depender de achismo para decidir onde investir.",
              "Você precisa de uma parceira que olhe para tráfego, conversão e retenção.",
              "Você busca direção estratégica, não apenas relatórios no fim do mês."
            ].map((item, index) => (
              <FadeIn key={index} delay={0.1 * index} className="flex items-start gap-4 rounded-2xl bg-white/5 p-6 border border-white/10">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-brand mt-0.5" />
                <p className="text-lg text-surface/90">{item}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: PROBLEMA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <FadeIn>
                <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl text-ink">
                  O problema nem sempre está no anúncio
                </h2>
                <p className="mb-6 text-lg text-ink/90 leading-relaxed">
                  Muitos e-commerces tentam vender mais criando novas campanhas, trocando criativos ou aumentando verba. Mas, quando a estrutura não está clara, o tráfego só acelera gargalos.
                </p>
                <p className="text-xl font-bold text-brand mt-8">
                  Anúncio ajuda. Método sustenta.
                </p>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                {[
                  "Público errado",
                  "Página que não convence",
                  "Checkout com atrito",
                  "Falta de retenção"
                ].map((problem, i) => (
                  <FadeIn key={i} delay={0.05 * i} className="rounded-xl bg-[#EDE9DF] p-6 shadow-sm border border-black/5 flex items-center justify-center text-center">
                    <p className="text-base font-semibold text-ink">{problem}</p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: COMO FUNCIONA */}
      <section className="bg-[#EDE9DF] py-24 md:py-32 rounded-br-[4rem] rounded-bl-[4rem]">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl text-ink">
              Como funciona
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 relative">
            <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-px bg-black/10"></div>
            
            <FadeIn delay={0.1} className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg border border-black/5 text-brand">
                <BarChart3 className="h-8 w-8" />
              </div>
              <span className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">1. Diagnóstico</span>
              <p className="text-ink/90 leading-relaxed max-w-sm">
                Análise das campanhas, página, oferta e principais gargalos.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg border border-black/5 text-brand">
                <TrendingUp className="h-8 w-8" />
              </div>
              <span className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">2. Plano de ação</span>
              <p className="text-ink/90 leading-relaxed max-w-sm">
                Definição dos ajustes mais importantes para melhorar conversão e investimento.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg border border-black/5 text-brand">
                <Users className="h-8 w-8" />
              </div>
              <span className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">3. Gestão e otimização</span>
              <p className="text-ink/90 leading-relaxed max-w-sm">
                Acompanhamento dos dados para corrigir rota e buscar crescimento com mais previsibilidade.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: AUTORIDADE */}
      <section className="bg-white py-24 border-y border-black/5">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="aspect-square overflow-hidden rounded-full max-w-[400px] mx-auto border-8 border-surface shadow-sm bg-surface/50">
                <img 
                  src="https://drive.google.com/thumbnail?id=1VLLI5C3paMJuQjGin4zwE-NYhq1P4Zu-&sz=w1000" 
                  alt="Fernanda - Bastidores e Autoridade" 
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-4xl text-ink">
                Processo validado para quem quer deixar o improviso de lado
              </h2>
              <p className="text-lg text-ink/90 leading-relaxed">
                A @nandacora atua com tráfego pago e estratégia digital para e-commerces que precisam construir uma estrutura sólida de faturamento, com acompanhamento próximo e foco em resultados reais.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: OBJEÇÕES E CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          
          <FadeIn className="mb-24 rounded-3xl bg-[#EDE9DF] p-8 md:p-12">
            <h3 className="mb-4 font-display text-2xl font-bold leading-tight md:text-3xl text-ink">
              "Já faço tráfego pago. Por que mudar?"
            </h3>
            <div className="space-y-4 text-ink/90 text-lg">
              <p>Porque vender mais não depende apenas de colocar dinheiro nas campanhas.</p>
              <p>
                Se a estrutura não acompanha — página fraca, checkout confuso ou falta de retenção —, parte do seu investimento se perde pelo caminho.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="text-center">
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-5xl text-ink">
              Vamos encontrar os gargalos do seu e-commerce?
            </h2>
            <p className="mb-10 text-xl text-ink/90 max-w-2xl mx-auto">
              Se você já vende online e quer crescer com mais clareza, fale comigo.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button className="w-full sm:w-auto px-12 py-5 text-base">
                Falar com a Fernanda
              </Button>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* SEÇÃO 7: DOBRA FINAL / FOOTER */}
      <footer className="bg-ink text-surface py-20 pb-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn className="flex flex-col md:flex-row items-center justify-between gap-10 border-b border-white/10 pb-16">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="mb-4 font-display text-2xl font-bold leading-tight md:text-4xl text-white">
                Anúncio ajuda. Método sustenta.
              </h2>
              <p className="text-surface/90 text-lg">
                Gestão focada em conversão, retenção e clareza.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink px-8 py-4 font-bold tracking-wide transition-all hover:bg-gray-200"
              >
                Quero falar com a Fernanda
              </a>
            </div>
          </FadeIn>
          
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-surface/40">
            <p>© {new Date().getFullYear()} Nandacora. Todos os direitos reservados.</p>
            
            <div className="flex items-center gap-6">
              <a href="https://www.instagram.com/nandacora/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@nandacora" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="TikTok">
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/nandacora/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <div className="flex flex-col items-center md:items-end gap-1">
              <p>Tráfego Pago e Estratégia para E-commerce</p>
              <a 
                href="https://wa.me/5562999465725" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-surface/20 hover:text-surface/50 transition-colors"
              >
                Desenvolvido por Flávio Corá
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

