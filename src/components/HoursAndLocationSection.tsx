import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, Navigation } from 'lucide-react';
import {
  BARBERSHOP_CONFIG,
  OPENING_HOURS,
  getWhatsAppBookingUrl,
} from '../config/barbershop';
import { SpotlightCard } from './SpotlightCard';
import { WhatsAppIcon } from './WhatsAppIcon';

function getCurrentBrazilStatus() {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Sao_Paulo',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
    const parts = formatter.formatToParts(now);
    const weekdayStr = parts.find((p) => p.type === 'weekday')?.value ?? '';
    const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0);

    const dayMap: Record<string, number> = {
      Sun: 0,
      Mon: 1,
      Tue: 2,
      Wed: 3,
      Thu: 4,
      Fri: 5,
      Sat: 6,
    };
    const dayIndex = dayMap[weekdayStr] ?? now.getDay();
    const isSunday = dayIndex === 0;
    const isOpen = !isSunday && hour >= 8 && hour < 18;

    return {
      dayIndex,
      isOpen,
      statusLabel: isOpen
        ? 'Aberto agora · Atendimento até 18h'
        : isSunday
          ? 'Fechado hoje · Retornamos segunda às 08h'
          : 'Fechado no momento · Horário das 08h às 18h',
    };
  } catch {
    return {
      dayIndex: -1,
      isOpen: false,
      statusLabel: 'Seg a Sáb · 08h às 18h',
    };
  }
}

export function HoursAndLocationSection() {
  const [mapLoadError, setMapLoadError] = useState(false);
  const { dayIndex, isOpen, statusLabel } = useMemo(
    () => getCurrentBrazilStatus(),
    []
  );

  return (
    <section className="relative py-24 sm:py-32 bg-[#09090D] border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
        {/* Section 6: Horário de Funcionamento */}
        <motion.div
          id="horarios"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <SpotlightCard className="p-7 sm:p-8">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 rounded-sm bg-[#D4AF37]/12 border border-[#D4AF37]/35 flex items-center justify-center text-[#E5C158] shrink-0">
                <Clock className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#E5C158]">
                  Atendimento
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F2]">
                  Horário de funcionamento
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-medium text-[#D4D4D8] pb-5 mb-5 border-b border-white/10 flex items-center gap-2">
              <span className={isOpen ? 'text-[#E5C158]' : 'text-[#A1A1AA]'}>
                {statusLabel}
              </span>
            </p>

            <dl className="divide-y divide-white/8">
              {OPENING_HOURS.map((entry, idx) => {
                const isToday = entry.dayIndex === dayIndex;
                return (
                  <motion.div
                    key={entry.day}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.3,
                      delay: idx * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`py-3.5 px-2 -mx-2 rounded-sm flex items-center justify-between gap-4 text-sm transition-colors ${
                      isToday ? 'bg-[#D4AF37]/8' : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <dt
                      className={`${
                        isToday
                          ? 'font-semibold text-[#E5C158]'
                          : 'text-[#D4D4D8]'
                      }`}
                    >
                      {entry.day}
                      {isToday ? ' (Hoje)' : ''}
                    </dt>
                    <dd
                      className={`font-mono tabular-nums ${
                        entry.isClosed
                          ? 'text-[#71717A]'
                          : isToday
                            ? 'text-[#F5F5F2] font-semibold'
                            : 'text-[#A1A1AA]'
                      }`}
                    >
                      {entry.hours}
                    </dd>
                  </motion.div>
                );
              })}
            </dl>

            <div className="mt-7 pt-6 border-t border-white/10">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-xs font-bold tracking-[0.12em] uppercase bg-[#16161C] border border-white/15 text-[#F5F5F2] hover:bg-[#E5C158] hover:text-[#050507] hover:border-[#E5C158] transition-colors duration-200 rounded-sm whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Consultar disponibilidade</span>
              </a>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Section 7: Localização */}
        <motion.div
          id="localizacao"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E5C158] mb-3">
            Localização
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#F5F5F2] mb-4">
            Estamos esperando por você!
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div className="flex items-start gap-3">
              <MapPin
                className="w-5 h-5 text-[#E5C158] mt-0.5 shrink-0"
                strokeWidth={1.75}
              />
              <div>
                <p className="text-base font-semibold text-[#F5F5F2]">
                  {BARBERSHOP_CONFIG.city}
                </p>
                <p className="text-sm text-[#A1A1AA] mt-0.5">
                  {BARBERSHOP_CONFIG.fullAddress ||
                    BARBERSHOP_CONFIG.addressPlaceholderNote}
                </p>
              </div>
            </div>

            <a
              href={BARBERSHOP_CONFIG.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold tracking-[0.12em] uppercase bg-gradient-to-r from-[#C8A253] via-[#E5C158] to-[#C8A253] text-[#050507] rounded-sm whitespace-nowrap shrink-0 transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F5F2]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
              <Navigation className="relative w-3.5 h-3.5 shrink-0" />
              <span className="relative">Como chegar</span>
            </a>
          </div>

          {/* Interactive Google Maps Embed Container */}
          <div className="relative w-full h-[340px] sm:h-[395px] rounded-md overflow-hidden border border-white/12 bg-[#0C0C10]">
            {!mapLoadError ? (
              <iframe
                title="Mapa de Seropédica – Barbearia do Felskipz"
                src={BARBERSHOP_CONFIG.googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onError={() => setMapLoadError(true)}
                className="w-full h-full border-0 grayscale-[40%] contrast-[1.06]"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                <MapPin className="w-8 h-8 text-[#E5C158] mb-3" />
                <p className="font-display text-xl font-semibold text-[#F5F5F2] mb-1">
                  {BARBERSHOP_CONFIG.city}
                </p>
                <p className="text-sm text-[#A1A1AA] mb-5 max-w-sm">
                  {BARBERSHOP_CONFIG.fullAddress ||
                    BARBERSHOP_CONFIG.addressPlaceholderNote}
                </p>
                <a
                  href={BARBERSHOP_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-[#E5C158] text-[#050507] rounded-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Abrir no Google Maps</span>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
