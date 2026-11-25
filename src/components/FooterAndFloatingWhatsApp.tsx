import { motion } from 'motion/react';
import { BARBERSHOP_CONFIG, getWhatsAppBookingUrl } from '../config/barbershop';
import { WhatsAppIcon } from './WhatsAppIcon';

const FOOTER_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Localização', href: '#localizacao' },
];

export function FooterAndFloatingWhatsApp() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative bg-[#050507] border-t border-white/10 py-14 sm:py-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/45 to-transparent"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
            {/* Brand & Location */}
            <div className="md:col-span-5">
              <a
                href="#inicio"
                className="font-display text-2xl font-extrabold tracking-[0.1em] uppercase text-[#F5F5F2] inline-block mb-3"
              >
                {BARBERSHOP_CONFIG.brandName}
              </a>
              <p className="text-sm text-[#A1A1AA] max-w-sm leading-relaxed mb-4">
                Estilo, personalidade e atendimento de alto padrão em{' '}
                {BARBERSHOP_CONFIG.shortCity}.
              </p>
              <p className="text-xs text-[#71717A]">
                {BARBERSHOP_CONFIG.fullAddress
                  ? `${BARBERSHOP_CONFIG.fullAddress} · ${BARBERSHOP_CONFIG.shortCity}`
                  : `${BARBERSHOP_CONFIG.shortCity} · ${BARBERSHOP_CONFIG.addressPlaceholderNote}`}
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#E5C158] mb-4">
                Navegação
              </h3>
              <ul className="space-y-2.5 text-sm text-[#A1A1AA]">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-[#F5F5F2] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours & Direct WhatsApp */}
            <div className="md:col-span-4">
              <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#E5C158] mb-4">
                Horário & Agendamento
              </h3>
              <p className="text-sm text-[#D4D4D8] font-mono tabular-nums mb-1">
                Segunda a Sábado: 08h às 18h
              </p>
              <p className="text-sm text-[#71717A] mb-6">Domingo: Fechado</p>

              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-5 py-3 text-xs font-bold tracking-[0.1em] uppercase bg-gradient-to-r from-[#C8A253] via-[#E5C158] to-[#C8A253] text-[#050507] rounded-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F5F2]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
                <WhatsAppIcon className="relative w-4 h-4 shrink-0" />
                <span className="relative">Agendar pelo WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
            <p>
              © {currentYear} {BARBERSHOP_CONFIG.brandName}. Todos os direitos
              reservados.
            </p>
            <p>{BARBERSHOP_CONFIG.city}</p>
          </div>
        </div>
      </footer>

      {/* Spring-Animated Floating WhatsApp Action Button */}
      <motion.a
        href={getWhatsAppBookingUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar horário pelo WhatsApp"
        title="Agendar horário pelo WhatsApp"
        initial={{ opacity: 0, y: 24, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        transition={{
          type: 'spring',
          stiffness: 340,
          damping: 24,
          delay: 0.4,
        }}
        className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center gap-2.5 w-14 h-14 sm:w-auto sm:h-12 sm:px-5 rounded-full sm:rounded-sm bg-[#16A34A] hover:bg-[#15803D] text-white shadow-[0_12px_32px_rgba(22,163,74,0.35)] border border-white/20 backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-4 sm:h-4 shrink-0" />
        <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase whitespace-nowrap">
          Agendar WhatsApp
        </span>
      </motion.a>
    </>
  );
}
