import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
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
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050507]/82 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.45)]'
          : 'bg-gradient-to-b from-[#050507]/85 via-[#050507]/40 to-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#inicio"
          onClick={() => setActiveSection('')}
          className="font-display text-base sm:text-lg font-extrabold tracking-[0.12em] uppercase text-[#F5F5F2] hover:text-[#E5C158] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
        >
          {BARBERSHOP_CONFIG.brandName}
        </a>

        {/* Zone 2: Clean Single-Line Nav Links with floating active underline */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A1A1AA]"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                onMouseEnter={() => setActiveSection(link.href)}
                className={`relative py-1.5 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:text-[#E5C158] ${
                  isActive ? 'text-[#F5F5F2]' : 'hover:text-[#F5F5F2]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="navActiveUnderline"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-gradient-to-r from-[#D4AF37] via-[#F5E0A3] to-[#D4AF37]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-[0.12em] uppercase bg-gradient-to-r from-[#C8A253] via-[#E5C158] to-[#C8A253] text-[#050507] rounded-sm whitespace-nowrap shrink-0 transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F5F2]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
            <span className="relative">Agendar Horário</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#F5F5F2] hover:text-[#E5C158] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#0A0A0E]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6"
          >
            <nav aria-label="Navegação mobile" className="flex flex-col divide-y divide-white/8">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.2 }}
                  onClick={() => setMobileOpen(false)}
                  className="py-3.5 text-base font-medium text-[#F5F5F2] hover:text-[#E5C158] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 w-full inline-flex items-center justify-center px-5 py-3.5 text-xs font-bold tracking-[0.12em] uppercase bg-gradient-to-r from-[#C8A253] via-[#E5C158] to-[#C8A253] text-[#050507] rounded-sm"
            >
              Agendar Horário pelo WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
