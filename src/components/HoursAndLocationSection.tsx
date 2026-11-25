import { useMemo, useState } from 'react';
import { Clock, MapPin, Navigation } from 'lucide-react';
import {
  BARBERSHOP_CONFIG,
  OPENING_HOURS,
  getWhatsAppBookingUrl,
} from '../config/barbershop';
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
    <section className="py-20 sm:py-28 bg-[#0F0F12] border-t border-white/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
        {/* Section 6: Horário de Funcionamento */}
        <div
          id="horarios"
          className="lg:col-span-5 bg-[#141418] border border-white/10 rounded-sm p-7 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-sm bg-[#C8A253]/10 border border-[#C8A253]/30 flex items-center justify-center text-[#C8A253] shrink-0">
              <Clock className="w-5 h-5" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#C8A253]">
                Atendimento
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F2]">
                Horário de funcionamento
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm font-medium text-[#D4D4D8] pb-5 mb-5 border-b border-white/10 flex items-center gap-2">
            <span
              className={isOpen ? 'text-[#C8A253]' : 'text-[#A1A1AA]'}
            >
              {statusLabel}
            </span>
          </p>

          <dl className="divide-y divide-white/8">
            {OPENING_HOURS.map((entry) => {
              const isToday = entry.dayIndex === dayIndex;
              return (
                <div
                  key={entry.day}
                  className="py-3.5 flex items-center justify-between gap-4 text-sm"
                >
                  <dt
                    className={`${
                      isToday
                        ? 'font-semibold text-[#C8A253]'
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
                </div>
              );
            })}
          </dl>

          <div className="mt-7 pt-6 border-t border-white/10">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-xs font-semibold tracking-[0.1em] uppercase bg-[#1B1B20] border border-white/15 text-[#F5F5F2] hover:bg-[#C8A253] hover:text-[#0A0A0A] hover:border-[#C8A253] transition-colors rounded-sm whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Consultar disponibilidade</span>
            </a>
          </div>
        </div>

        {/* Section 7: Localização */}
        <div id="localizacao" className="lg:col-span-7 flex flex-col">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#C8A253] mb-3">
            Localização
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F2] mb-4">
            Estamos esperando por você!
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div className="flex items-start gap-3">
              <MapPin
                className="w-5 h-5 text-[#C8A253] mt-0.5 shrink-0"
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
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-[0.1em] uppercase bg-[#C8A253] text-[#0A0A0A] hover:bg-[#D9B66A] transition-colors rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F5F2]"
            >
              <Navigation className="w-3.5 h-3.5 shrink-0" />
              <span>Como chegar</span>
            </a>
          </div>

          {/* Interactive Google Maps Embed Container */}
          <div className="relative w-full h-[340px] sm:h-[380px] rounded-sm overflow-hidden border border-white/10 bg-[#141418]">
            {!mapLoadError ? (
              <iframe
                title="Mapa de Seropédica – Barbearia do Felskipz"
                src={BARBERSHOP_CONFIG.googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onError={() => setMapLoadError(true)}
                className="w-full h-full border-0 grayscale-[35%] contrast-[1.05]"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                <MapPin className="w-8 h-8 text-[#C8A253] mb-3" />
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#C8A253] text-[#0A0A0A] rounded-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Abrir no Google Maps</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
