import { motion } from 'motion/react';
import { ArrowUpRight, Scissors } from 'lucide-react';
import { SERVICES, getWhatsAppBookingUrl } from '../config/barbershop';
import { SpotlightCard } from './SpotlightCard';

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative py-24 sm:py-32 bg-[#050507] border-t border-white/10 overflow-hidden"
    >
      {/* Subtle architectural grid + deep ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-arch-grid opacity-30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[220px] bg-[#D4AF37]/8 blur-[120px]"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E5C158] mb-3">
              Serviços e Valores
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#F5F5F2]">
              Precisão no corte, cuidado em cada acabamento.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-sm">
            Escolha o serviço ideal para o seu momento e confirme seu horário
            diretamente pelo WhatsApp.
          </p>
        </motion.div>

        {/* 3-Column Futuristic Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <SpotlightCard featured={service.featured} className="h-full p-7 sm:p-8">
                <div>
                  {/* Editorial index + unboxed highlight label */}
                  <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
                    <span className="font-mono text-xs tabular-nums tracking-widest text-[#A1A1AA]">
                      {service.index}
                    </span>
                    {service.featured ? (
                      <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#E5C158]">
                        Mais procurado
                      </span>
                    ) : (
                      <Scissors
                        className="w-4 h-4 text-white/30 group-hover:text-[#E5C158] transition-colors"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F2] mb-3">
                    {service.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-xs text-[#71717A] mb-8">
                    {service.durationHint}
                  </p>
                </div>

                {/* Price & Magnetic Shine CTA */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-baseline justify-between gap-4 mb-6">
                    <span className="text-xs uppercase tracking-[0.14em] text-[#A1A1AA]">
                      Investimento
                    </span>
                    <span className="font-mono text-2xl sm:text-3xl font-semibold tabular-nums bg-gradient-to-r from-[#E5C158] to-[#C8A253] bg-clip-text text-transparent">
                      {service.price}
                    </span>
                  </div>

                  <a
                    href={getWhatsAppBookingUrl(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold tracking-[0.12em] uppercase rounded-sm transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] ${
                      service.featured
                        ? 'bg-gradient-to-r from-[#C8A253] via-[#E5C158] to-[#C8A253] text-[#050507]'
                        : 'bg-[#16161C] text-[#F5F5F2] border border-white/15 hover:border-[#E5C158]/70 hover:text-[#050507] hover:bg-[#E5C158]'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/35 to-transparent"
                    />
                    <span className="relative">Agendar agora</span>
                    <ArrowUpRight className="relative w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
