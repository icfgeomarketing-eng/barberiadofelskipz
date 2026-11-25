import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight } from 'lucide-react';
import {
  BARBERSHOP_CONFIG,
  HERO_IMAGE,
  getWhatsAppBookingUrl,
} from '../config/barbershop';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Compositor-only scroll parallax on background media
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-[95vh] flex items-center pt-24 pb-20 overflow-hidden bg-[#050507]"
    >
      {/* Parallax Background Media + Futuristic Atmospheric Scrims */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <ResilientImage
          src={HERO_IMAGE}
          alt="Imagem de fundo da Barbearia do Felskipz em Seropédica"
          loading="eager"
          fallbackTitle={BARBERSHOP_CONFIG.brandName}
          className="w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#050507]/95 via-[#050507]/75 to-[#050507]/30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/20 to-[#050507]/65"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-arch-grid opacity-45"
        />
      </motion.div>

      {/* Subtle Ambient Gold Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-[#D4AF37]/10 blur-[120px] z-0"
      />

      {/* Main Content with Parallax Fade */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-2xl">
          {/* Unboxed futuristic metadata line */}
          <motion.div
            initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#E5C158] mb-5"
          >
            <span>{BARBERSHOP_CONFIG.brandName}</span>
            <span aria-hidden="true" className="text-white/30">
              /
            </span>
            <span className="text-[#D4D4D8] font-mono text-xs tracking-[0.14em]">
              {BARBERSHOP_CONFIG.shortCity}
            </span>
          </motion.div>

          {/* Primary Headline with metallic gradient accent */}
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold tracking-[-0.03em] text-[#F5F5F2] leading-[1.02] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5.4vw, 4.5rem)' }}
          >
            Seu estilo começa com{' '}
            <span className="bg-gradient-to-r from-[#F5F5F2] via-[#E5C158] to-[#C8A253] bg-clip-text text-transparent">
              um bom corte.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#D4D4D8] leading-relaxed max-w-xl mb-9"
          >
            Mais que um corte, uma experiência. Estilo, personalidade e qualidade
            em cada detalhe.
          </motion.p>

          {/* Primary Action + Secondary Glass Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold tracking-[0.12em] uppercase bg-gradient-to-r from-[#C8A253] via-[#E5C158] to-[#C8A253] text-[#050507] rounded-sm whitespace-nowrap shrink-0 shadow-[0_12px_36px_rgba(212,175,55,0.22)] transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F5F2]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/45 to-transparent"
              />
              <WhatsAppIcon className="relative w-4 h-4 shrink-0" />
              <span className="relative">AGENDAR MEU HORÁRIO</span>
            </a>

            <a
              href="#servicos"
              className="group inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-[#F5F5F2] border border-white/15 hover:border-[#E5C158]/60 hover:text-[#E5C158] bg-[#0C0C10]/65 backdrop-blur-xl transition-all duration-200 rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <span>Ver serviços e preços</span>
              <ArrowDownRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          {/* Architectural Footer Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-14 pt-6 border-t border-white/12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#A1A1AA]"
          >
            <span className="font-mono tabular-nums text-[#F5F5F2]">
              Seg a Sáb · 08h às 18h
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-white/25">
              /
            </span>
            <span>Degradê · Corte Social · Barba Alinhada · Descoloração</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
