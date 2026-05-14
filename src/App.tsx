import { motion } from 'motion/react';
import { ArrowRight, BarChart3, CheckCircle2, ChevronRight, TrendingUp, Users, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { ReactNode, useEffect, useState, Fragment } from 'react';

const WHATSAPP_NUMBER = "556296242626";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, Fernanda! Quero entender melhor a gestão de tráfego para e-commerce.")}`;
const FORM_LINK = "https://form.respondi.app/mZEV4eLq";

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

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

// Reusable Button Component
function Button({ children, outline = false, className = "", showArrow = true }: { children: ReactNode, outline?: boolean, className?: string, showArrow?: boolean }) {
  return (
    <a
      href={FORM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] ${
        outline
          ? 'border border-ink text-ink hover:bg-ink hover:text-surface'
          : 'bg-brand text-white hover:bg-brand-light shadow-md hover:shadow-lg'
      } ${className}`}
    >
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-light/30 relative">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand via-surface to-surface"></div>
      
      {/* HEADER */}
      <header className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between p-6 md:px-12 transition-all duration-300 ${isScrolled ? 'bg-surface/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'}`}>
        <div className="font-display text-xl font-bold tracking-tight text-ink">@nandacora</div>
        <a href={FORM_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-ink hover:text-brand transition-colors">
          Solicitar diagnóstico
        </a>
      </header>

      {/* SEÇÃO 1: HERO */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <FadeIn className="max-w-2xl">
              <span className="mb-4 inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
                Tráfego pago para e-commerce
              </span>
              <h1 className="mb-6 font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl text-ink">
                Tráfego pago para e-commerces que querem crescer com previsibilidade
              </h1>
              <p className="mb-8 text-lg text-ink/90 leading-relaxed md:text-xl">
                Você já vende online, mas sente que o crescimento ainda depende de tentativa e erro? Ajudo e-commerces com produtos próprios a crescer com estrutura — não só investindo mais em anúncios.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button>
                  Solicitar proposta
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Imagem do Atendimento */}
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-surface/50 shadow-sm transition-transform duration-700 hover:scale-[1.01]">
                <img 
                  src="https://drive.google.com/thumbnail?id=1d41SlTvjMXnnxAky-mkO7aKp7U5hvRlX&sz=w1000" 
                  alt="Fernanda - Gestão de Tráfego" 
                  className="h-full w-full object-cover"
                />
              </div>
              
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl w-64 border border-gray-100"
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand-light animate-pulse"></div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink/70">Foco no Funil</span>
                </div>
                <p className="text-sm font-medium leading-snug">
                  Não é só subir campanha. É entender o funil inteiro para vender melhor.
                </p>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: PARA QUEM É */}
      <section className="bg-ink py-24 text-surface">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn>
            <h2 className="mb-12 max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Esse serviço é para você se:
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              "Você tem produtos próprios e já vende online, mas o crescimento ficou instável",
              "Você quer parar de depender de achismo para decidir onde investir",
              "Você precisa de uma parceria com método — não só alguém que executa campanha"
            ].map((item, index) => (
              <Fragment key={index}>
                <FadeIn delay={0.1 * index}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="group flex h-full items-start gap-4 rounded-2xl bg-white/5 p-6 border border-white/10 hover:border-brand-light/30 hover:bg-white/10 transition-colors shadow-sm hover:shadow-md"
                  >
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-brand mt-0.5 transition-transform duration-300 group-hover:scale-110 group-hover:text-brand-light" />
                    <p className="text-lg text-surface/90 transition-colors group-hover:text-white">{item}</p>
                  </motion.div>
                </FadeIn>
              </Fragment>
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
                  Muitos e-commerces tentam vender mais criando novas campanhas, trocando criativos ou aumentando verba. Mas quando a estrutura não está clara, o tráfego só acelera os gargalos.
                </p>
                <p className="text-xl font-bold text-brand mt-8">
                  Anúncio ajuda. Método sustenta.
                </p>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-1 gap-4 h-full">
                {[
                  "Campanhas sem estratégia de funil",
                  "Criativos que atraem, mas não convertem",
                  "Verba aumenta, resultado não acompanha"
                ].map((problem, i) => (
                  <Fragment key={i}>
                    <FadeIn delay={0.05 * i} className="h-full">
                      <div className="group h-full rounded-xl bg-[#EDE9DF] p-6 shadow-sm border border-black/5 hover:border-brand/20 hover:shadow-md transition-all duration-300 flex flex-col justify-center text-center cursor-default">
                        <p className="text-lg font-semibold text-ink group-hover:text-brand transition-colors">{problem}</p>
                      </div>
                    </FadeIn>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: COMO FUNCIONA */}
      <section className="bg-[#EDE9DF] py-24 md:py-32 rounded-br-[4rem] rounded-bl-[4rem]">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <FadeIn className="text-center mb-20 lg:mb-24">
            <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl text-ink">
              Como funciona
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 relative isolate max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-brand/20 -z-10"></div>
            
            <FadeIn delay={0.1} className="relative z-10 flex flex-col items-center text-center group">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md border border-brand/10 text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                <BarChart3 className="h-8 w-8" />
              </div>
              <span className="mb-3 text-sm font-bold uppercase tracking-wider text-brand">1. Diagnóstico</span>
              <p className="text-ink/90 leading-relaxed max-w-[280px]">
                Mapeamos os gargalos do seu funil
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="relative z-10 flex flex-col items-center text-center group">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md border border-brand/10 text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                <TrendingUp className="h-8 w-8" />
              </div>
              <span className="mb-3 text-sm font-bold uppercase tracking-wider text-brand">2. Estratégia</span>
              <p className="text-ink/90 leading-relaxed max-w-[280px]">
                Anúncios com base na jornada do seu cliente
              </p>
            </FadeIn>

            <FadeIn delay={0.3} className="relative z-10 flex flex-col items-center text-center group">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md border border-brand/10 text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                <Users className="h-8 w-8" />
              </div>
              <span className="mb-3 text-sm font-bold uppercase tracking-wider text-brand">3. Otimização</span>
              <p className="text-ink/90 leading-relaxed max-w-[280px]">
                Reports semanais e reuniões estratégicas
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
              <div className="aspect-square overflow-hidden rounded-full max-w-[400px] mx-auto border-8 border-surface shadow-md bg-surface/50 transition-transform duration-700 hover:scale-[1.02]">
                <img 
                  src="https://drive.google.com/thumbnail?id=1VLLI5C3paMJuQjGin4zwE-NYhq1P4Zu-&sz=w1000" 
                  alt="Fernanda - Bastidores e Autoridade" 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-[#EDE9DF]/50 p-8 md:p-10 rounded-3xl border border-black/5">
              <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-4xl text-ink">
                Processo validado para quem quer deixar o improviso de lado
              </h2>
              <p className="text-lg text-ink font-medium leading-relaxed">
                A maioria das gestões começa e termina no gerenciador. Aqui o trabalho parte do funil inteiro — o que acontece antes do clique, na conversão e depois da venda.
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
              <p>Porque resultado previsível não vem só de verba — vem de método.</p>
              <p>
                Sem estratégia de funil, você pode estar pagando para trazer tráfego que não converte, ou vendendo para clientes que não voltam.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="text-center">
            <h2 className="mb-6 font-display text-3xl font-bold leading-tight md:text-5xl text-ink">
              Vamos estruturar o crescimento do seu e-commerce?
            </h2>
            <p className="mb-10 text-xl text-ink/90 max-w-2xl mx-auto">
              Se você já vende online e quer crescer com mais clareza, solicite uma proposta.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button className="w-full sm:w-auto px-12 py-5 text-base">
                Solicitar proposta
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
                Tráfego atrai. Estrutura converte. Método escala.
              </h2>
              <p className="text-surface/90 text-lg">
                Gestão focada em conversão, retenção e clareza.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href={FORM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink px-8 py-4 font-bold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:bg-surface shadow-lg hover:shadow-white/20"
              >
                Solicitar proposta
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
        {/* Pulsing effect */}
        <span className="absolute inset-0 z-[-1] rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
      </motion.a>

    </div>
  );
}

