import { motion } from 'motion/react';
import {
  ABOUT_IMAGE,
  BARBERSHOP_CONFIG,
  getWhatsAppBookingUrl,
} from '../config/barbershop';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

const PILLARS = [
  {
    title: 'Atendimento personalizado',
    detail: 'Visagismo e atenção ao seu estilo',
  },
  {
    title: 'Técnica e higiene rigorosa',
    detail: 'Equipamentos esterilizados a cada cliente',
  },
  {
    title: 'Ambiente moderno em Seropédica',
    detail: 'Conforto, música e pontualidade',
  },
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative py-24 sm:py-32 bg-[#09090D] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Architectural Framed Interior Photograph */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 group relative overflow-hidden rounded-md border border-white/12 bg-[#0E0E13] min-h-[340px] sm:min-h-[440px]"
          >
            <motion.div
              initial={{ scale: 1.07 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              <ResilientImage
                src={ABOUT_IMAGE}
                alt="Ambiente moderno e sofisticado da Barbearia do Felskipz em Seropédica"
                fallbackTitle="Ambiente Barbearia do Felskipz"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </motion.div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#050507]/85 via-transparent to-[#050507]/20"
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-[#F5F5F2]/90 backdrop-blur-md bg-[#050507]/55 border border-white/10 px-4 py-3 rounded-sm">
              <span className="tracking-[0.14em] uppercase font-semibold">
                {BARBERSHOP_CONFIG.brandName}
              </span>
              <span className="text-[#E5C158] font-mono">
                {BARBERSHOP_CONFIG.shortCity}
              </span>
            </div>
          </motion.div>

          {/* Editorial Story */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between py-2"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E5C158] mb-3">
                Sobre a barbearia
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#F5F5F2] mb-6">
                Muito além de um corte.
              </h2>

              <p className="text-base sm:text-lg text-[#D4D4D8] leading-relaxed mb-8">
                A Barbearia do Felskipz é o lugar certo para quem valoriza estilo,
                qualidade e autoestima. Nosso compromisso é oferecer um
                atendimento de qualidade, com atenção aos detalhes e cortes que
                combinam com sua personalidade.
              </p>

              {/* Craftsmanship Pillars with smooth stagger + hover accent */}
              <div className="divide-y divide-white/10 border-t border-b border-white/10 mb-8">
                {PILLARS.map((pillar, idx) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.12 + idx * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group py-4 flex items-baseline justify-between gap-4 transition-colors hover:bg-white/[0.02] px-1"
                  >
                    <span className="text-sm font-medium text-[#F5F5F2] group-hover:text-[#E5C158] transition-colors">
                      {pillar.title}
                    </span>
                    <span className="text-xs text-[#A1A1AA] text-right">
                      {pillar.detail}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-bold tracking-[0.12em] uppercase bg-gradient-to-r from-[#C8A253] via-[#E5C158] to-[#C8A253] text-[#050507] rounded-sm whitespace-nowrap transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F5F2]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
                <WhatsAppIcon className="relative w-4 h-4 shrink-0" />
                <span className="relative">Reservar meu horário</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
