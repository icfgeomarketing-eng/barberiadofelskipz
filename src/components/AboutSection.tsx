import { motion } from 'motion/react';
import { ABOUT_IMAGE, BARBERSHOP_CONFIG, getWhatsAppBookingUrl } from '../config/barbershop';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-20 sm:py-28 bg-[#0F0F12] border-t border-white/8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Interior Photography */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative overflow-hidden rounded-sm border border-white/10 bg-[#141418] min-h-[320px] sm:min-h-[420px]"
          >
            <ResilientImage
              src={ABOUT_IMAGE}
              alt="Ambiente moderno e sofisticado da Barbearia do Felskipz em Seropédica"
              fallbackTitle="Ambiente Barbearia do Felskipz"
              className="w-full h-full lg:h-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/65 via-transparent to-transparent"
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-[#F5F5F2]/90">
              <span className="tracking-wider uppercase font-medium">
                {BARBERSHOP_CONFIG.brandName}
              </span>
              <span className="text-[#C8A253]">{BARBERSHOP_CONFIG.shortCity}</span>
            </div>
          </motion.div>

          {/* Editorial Story */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-between py-2"
          >
            <div>
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#C8A253] mb-3">
                Sobre a barbearia
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F2] mb-6">
                Muito além de um corte.
              </h2>

              <p className="text-base sm:text-lg text-[#D4D4D8] leading-relaxed mb-8">
                A Barbearia do Felskipz é o lugar certo para quem valoriza estilo,
                qualidade e autoestima. Nosso compromisso é oferecer um
                atendimento de qualidade, com atenção aos detalhes e cortes que
                combinam com sua personalidade.
              </p>

              {/* Editorial Craftsmanship Pillars (unboxed, clean hairline dividers) */}
              <div className="divide-y divide-white/10 border-t border-b border-white/10 mb-8">
                <div className="py-4 flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-[#F5F5F2]">
                    Atendimento personalizado
                  </span>
                  <span className="text-xs text-[#A1A1AA] text-right">
                    Visagismo e atenção ao seu estilo
                  </span>
                </div>
                <div className="py-4 flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-[#F5F5F2]">
                    Técnica e higiene rigorosa
                  </span>
                  <span className="text-xs text-[#A1A1AA] text-right">
                    Equipamentos esterilizados a cada cliente
                  </span>
                </div>
                <div className="py-4 flex items-baseline justify-between gap-4">
                  <span className="text-sm font-medium text-[#F5F5F2]">
                    Ambiente urbano em Seropédica
                  </span>
                  <span className="text-xs text-[#A1A1AA] text-right">
                    Conforto, música e pontualidade
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-[0.1em] uppercase bg-[#C8A253] text-[#0A0A0A] hover:bg-[#D9B66A] transition-colors rounded-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F5F2]"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Reservar meu horário</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
