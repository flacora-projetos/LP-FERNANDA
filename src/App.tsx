import { motion } from 'motion/react';
import { ArrowRight, BarChart3, CheckCircle2, ChevronRight, TrendingUp, Users } from 'lucide-react';
import { ReactNode } from 'react';

const WHATSAPP_NUMBER = "556296242626";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, Fernanda! Quero entender melhor a gestão de tráfego para e-commerce.")}`;

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
              <h1 className="mb-6 font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Gestão de tráfego pago para e-commerces que querem crescer com previsibilidade
              </h1>
              <p className="mb-8 text-lg text-ink-muted leading-relaxed md:text-xl">
                Você já vende online, mas sente que o crescimento depende demais de tentativa, campanha isolada e mês bom por sorte?
                <br /><br />
                Ajudamos e-commerces com produtos próprios a estruturar tráfego pago, conversão e relacionamento para crescer com mais clareza e método.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button>
                  Falar com a Fernanda <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="text-xs text-ink-light font-medium">
                  Atendimento para um número<br/>reduzido de clientes por vez.
                </p>
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
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-light">Foco no Funil</span>
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
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
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

          <FadeIn delay={0.4} className="max-w-3xl rounded-2xl bg-brand/10 p-8 border border-brand/20">
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              Se o seu e-commerce já tem alguma tração, mas ainda não tem um processo claro para crescer, esse trabalho foi desenhado para você.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 3: PROBLEMA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <FadeIn>
                <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                  O problema nem sempre está só no anúncio
                </h2>
                <p className="mb-6 text-lg text-ink-muted">
                  Muitos e-commerces tentam crescer aumentando orçamento, trocando criativo ou testando uma campanha nova. Mas, na prática, o gargalo pode estar em vários pontos.
                </p>
                <p className="text-lg font-medium text-brand">
                  Quando o funil não está bem estruturado, o tráfego pago vira aposta. E-commerce não precisa de aposta. Precisa de método.
                </p>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Anúncios atraindo o público errado",
                  "Página de produto que não convence",
                  "Checkout com atrito",
                  "Oferta pouco clara",
                  "Falta de recuperação de carrinho",
                  "Base de clientes sem relacionamento",
                  "Campanhas sem leitura estratégica"
                ].map((problem, i) => (
                  <FadeIn key={i} delay={0.05 * i} className="rounded-xl bg-white p-5 shadow-sm border border-black/5">
                    <p className="text-sm font-semibold">{problem}</p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: DIFERENCIAL */}
      <section className="bg-[#EDE9DF] py-24 md:py-32 rounded-br-[4rem] rounded-bl-[4rem]">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <FadeIn>
            <h2 className="mb-8 font-display text-3xl font-bold leading-tight md:text-5xl">
              Tráfego atrai. Estrutura converte. Método escala.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-ink-muted leading-relaxed">
              <p>
                Enquanto muitas gestões entregam campanha e relatório, aqui o trabalho parte de uma visão completa do funil.
              </p>
              <p>
                A gestão de tráfego pago é integrada com análise de CRO e CRM para entender não apenas como trazer visitantes, mas como transformar mais visitantes em compradores e mais compradores em clientes recorrentes.
              </p>
              <p className="font-semibold text-ink">
                É essa combinação que ajuda a criar crescimento previsível: campanha bem planejada, página mais eficiente, dados bem lidos e decisões tomadas com direção.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 5: COMO FUNCIONA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn className="text-center mb-16">
            <h2 className="mb-4 font-display text-3xl font-bold leading-tight md:text-4xl">
              Um processo claro para encontrar gargalos<br className="hidden md:block"/> e criar crescimento
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 relative">
            <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-px bg-black/10"></div>
            
            <FadeIn delay={0.1} className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg border border-black/5 text-brand">
                <BarChart3 className="h-8 w-8" />
              </div>
              <span className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">1. Diagnóstico</span>
              <p className="text-ink-muted leading-relaxed max-w-sm">
                Antes de sair investindo mais, analisamos os principais pontos do seu funil: campanhas, criativos, páginas, conversão, jornada de compra e retenção. Entendemos onde o crescimento está travando e quais ajustes geram impacto.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg border border-black/5 text-brand">
                <TrendingUp className="h-8 w-8" />
              </div>
              <span className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">2. Gestão de campanhas</span>
              <p className="text-ink-muted leading-relaxed max-w-sm">
                Criamos e otimizamos campanhas com base na jornada real do seu cliente. A estratégia considera aquisição, remarketing, intenção de compra, sazonalidade, criativos, ofertas e dados de performance.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg border border-black/5 text-brand">
                <Users className="h-8 w-8" />
              </div>
              <span className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">3. Acompanhamento</span>
              <p className="text-ink-muted leading-relaxed max-w-sm">
                Você recebe reports e participa de reuniões estratégicas para acompanhar os resultados e tomar decisões com segurança. O acompanhamento não serve para "mostrar número bonito", serve para direcionar crescimento.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6: AUTORIDADE */}
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
              <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-4xl">
                5 anos de mercado, processo validado e clientes que crescem ano a ano
              </h2>
              <p className="mb-6 text-lg text-ink-muted leading-relaxed">
                A @nandacora atua com tráfego pago e estratégia digital para negócios que precisam crescer com consistência.
              </p>
              <p className="text-lg text-ink-muted leading-relaxed">
                Com uma equipe dedicada e um processo de acompanhamento próximo, o trabalho é voltado para e-commerces que querem deixar de operar no improviso e construir uma estrutura mais sólida de crescimento.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 & 8: OBJEÇÕES E CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          
          <FadeIn className="mb-24 rounded-3xl bg-[#EDE9DF] p-8 md:p-12">
            <h3 className="mb-4 font-display text-2xl font-bold leading-tight md:text-3xl">
              "Já faço tráfego pago. Por que mudar?"
            </h3>
            <div className="space-y-4 text-ink-muted text-lg">
              <p>Porque vender mais não depende apenas de colocar dinheiro nas campanhas.</p>
              <p>
                Se o tráfego chega, mas a página não convence, o carrinho é abandonado, a oferta não está clara ou a base de clientes não é trabalhada, parte do investimento se perde no caminho.
              </p>
              <p className="font-semibold text-ink">
                A diferença está em olhar para o funil completo e tomar decisões com base em dados, estratégia e contexto.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="text-center">
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-5xl">
              Quer crescer seu e-commerce com mais previsibilidade?
            </h2>
            <p className="mb-10 text-xl text-ink-muted max-w-2xl mx-auto">
              Se você já vende online e sente que chegou a hora de estruturar melhor o crescimento, fale com a Fernanda. Vamos analisar se o seu e-commerce está no momento certo para esse tipo de gestão e quais pontos podem estar limitando seus resultados hoje.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button className="w-full sm:w-auto px-12 py-5 text-base">
                Falar com a Fernanda
              </Button>
              <p className="text-sm text-ink-light font-medium">
                Vagas limitadas para manter qualidade de entrega e acompanhamento próximo.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* SEÇÃO 9: DOBRA FINAL / FOOTER */}
      <footer className="bg-ink text-surface py-20 pb-10">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn className="flex flex-col md:flex-row items-center justify-between gap-10 border-b border-white/10 pb-16">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="mb-4 font-display text-2xl font-bold leading-tight md:text-4xl text-white">
                Seu e-commerce não precisa de mais achismo. Precisa de direção.
              </h2>
              <p className="text-surface/70 text-lg">
                Gestão de tráfego pago integrada com análise de funil, CRO e CRM para transformar investimento em crescimento mais previsível.
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
          
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-surface/40">
            <p>© {new Date().getFullYear()} Nandacora. Todos os direitos reservados.</p>
            <p>Tráfego Pago, CRO e Estratégia para E-commerce</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

