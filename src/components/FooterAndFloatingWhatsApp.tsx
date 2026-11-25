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
      <footer className="bg-[#070708] border-t border-white/10 py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
            {/* Brand & Location */}
            <div className="md:col-span-5">
              <a
                href="#inicio"
                className="font-display text-2xl font-bold tracking-[0.08em] uppercase text-[#F5F5F2] inline-block mb-3"
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
              <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C8A253] mb-4">
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
              <h3 className="text-xs font-semibold tracking-[0.16em] uppercase text-[#C8A253] mb-4">
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
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 text-xs font-semibold tracking-[0.08em] uppercase bg-[#C8A253] text-[#0A0A0A] hover:bg-[#D9B66A] transition-colors rounded-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F5F2]"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Agendar pelo WhatsApp</span>
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

      {/* Floating WhatsApp Action Button (bottom-right, compact for 15% mobile sticky cap) */}
      <a
        href={getWhatsAppBookingUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar horário pelo WhatsApp"
        title="Agendar horário pelo WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center gap-2.5 w-14 h-14 sm:w-auto sm:h-12 sm:px-5 rounded-full sm:rounded-sm bg-[#16A34A] hover:bg-[#15803D] text-white shadow-xl shadow-black/50 border border-white/15 transition-transform duration-150 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253]"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-4 sm:h-4 shrink-0" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase whitespace-nowrap">
          Agendar WhatsApp
        </span>
      </a>
    </>
  );
}
