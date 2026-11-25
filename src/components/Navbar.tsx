import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BARBERSHOP_CONFIG, getWhatsAppBookingUrl } from '../config/barbershop';

const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Localização', href: '#localizacao' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#0A0A0A]/92 backdrop-blur-md border-b border-white/10'
          : 'bg-gradient-to-b from-[#0A0A0A]/85 to-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#inicio"
          className="font-display text-lg sm:text-xl font-bold tracking-[0.08em] uppercase text-[#F5F5F2] hover:text-[#C8A253] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253] rounded-sm"
        >
          {BARBERSHOP_CONFIG.brandName}
        </a>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A1A1AA]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-[#F5F5F2] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-[#C8A253] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:text-[#C8A253]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#C8A253] text-[#0A0A0A] hover:bg-[#D9B66A] transition-colors rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F5F2]"
          >
            Agendar Horário
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#F5F5F2] hover:text-[#C8A253] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253] rounded-sm"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0F0F12]/98 backdrop-blur-lg border-b border-white/10 px-4 pt-3 pb-6">
          <nav aria-label="Navegação mobile" className="flex flex-col divide-y divide-white/8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 text-base font-medium text-[#F5F5F2] hover:text-[#C8A253] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-4 w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold tracking-wider uppercase bg-[#C8A253] text-[#0A0A0A] hover:bg-[#D9B66A] transition-colors rounded-sm"
          >
            Agendar Horário pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
