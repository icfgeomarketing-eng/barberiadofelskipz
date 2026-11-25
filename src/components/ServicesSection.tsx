import { motion } from 'motion/react';
import { ArrowUpRight, Scissors } from 'lucide-react';
import { SERVICES, getWhatsAppBookingUrl } from '../config/barbershop';

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="py-20 sm:py-28 bg-[#0A0A0A] border-t border-white/8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#C8A253] mb-3">
              Serviços e Valores
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F2]">
              Precisão no corte, cuidado em cada acabamento.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-sm">
            Escolha o serviço ideal para o seu momento e confirme seu horário
            diretamente pelo WhatsApp.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.35,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group flex flex-col justify-between p-7 sm:p-8 rounded-sm bg-[#121215] transition-colors duration-200 ${
                service.featured
                  ? 'border border-[#C8A253]/50 hover:border-[#C8A253]'
                  : 'border border-white/10 hover:border-white/25'
              }`}
            >
              <div>
                {/* Editorial index + unboxed highlight label */}
                <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-white/8">
                  <span className="font-mono text-xs tabular-nums tracking-widest text-[#A1A1AA]">
                    {service.index}
                  </span>
                  {service.featured ? (
                    <span className="text-xs font-medium tracking-wider uppercase text-[#C8A253]">
                      Mais procurado
                    </span>
                  ) : (
                    <Scissors
                      className="w-4 h-4 text-white/25 group-hover:text-[#C8A253]/70 transition-colors"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Service Title & Description */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-wide text-[#F5F5F2] mb-3">
                  {service.name}
                </h3>
                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-xs text-[#71717A] mb-8">
                  {service.durationHint}
                </p>
              </div>

              {/* Price & CTA */}
              <div className="pt-6 border-t border-white/8">
                <div className="flex items-baseline justify-between gap-4 mb-6">
                  <span className="text-xs uppercase tracking-wider text-[#A1A1AA]">
                    Investimento
                  </span>
                  <span className="font-mono text-2xl sm:text-3xl font-semibold tabular-nums text-[#C8A253]">
                    {service.price}
                  </span>
                </div>

                <a
                  href={getWhatsAppBookingUrl(service.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold tracking-[0.1em] uppercase rounded-sm transition-colors duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253] ${
                    service.featured
                      ? 'bg-[#C8A253] text-[#0A0A0A] hover:bg-[#D9B66A]'
                      : 'bg-[#1B1B20] text-[#F5F5F2] border border-white/15 hover:bg-[#C8A253] hover:text-[#0A0A0A] hover:border-[#C8A253]'
                  }`}
                >
                  <span>Agendar agora</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
