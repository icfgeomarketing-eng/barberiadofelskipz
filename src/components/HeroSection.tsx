import { ArrowDownRight } from 'lucide-react';
import {
  BARBERSHOP_CONFIG,
  HERO_IMAGE,
  getWhatsAppBookingUrl,
} from '../config/barbershop';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center pt-20 pb-16 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Full-bleed editorial photograph with measured directional contrast scrim */}
      <div className="absolute inset-0 z-0">
        <ResilientImage
          src={HERO_IMAGE}
          alt="Imagem de fundo da Barbearia do Felskipz em Seropédica"
          loading="eager"
          fallbackTitle={BARBERSHOP_CONFIG.brandName}
          className="w-full h-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/70 to-[#0A0A0A]/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/55"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Unboxed location metadata + Brand Highlight */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-medium tracking-[0.16em] uppercase text-[#C8A253] mb-5">
            <span>{BARBERSHOP_CONFIG.brandName}</span>
            <span aria-hidden="true" className="text-white/30">
              ·
            </span>
            <span className="text-[#A1A1AA]">{BARBERSHOP_CONFIG.shortCity}</span>
          </div>

          {/* Primary Headline */}
          <h1
            className="font-display font-bold tracking-tight text-[#F5F5F2] leading-[1.03] mb-6"
            style={{ fontSize: 'clamp(2.65rem, 5.4vw, 4.5rem)' }}
          >
            Seu estilo começa com um bom corte.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#D4D4D8] leading-relaxed max-w-xl mb-9">
            Mais que um corte, uma experiência. Estilo, personalidade e qualidade
            em cada detalhe.
          </p>

          {/* Primary Action + Secondary Anchor */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-[0.08em] uppercase bg-[#C8A253] text-[#0A0A0A] hover:bg-[#D9B66A] transition-colors duration-150 rounded-sm whitespace-nowrap shrink-0 shadow-lg shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F5F2]"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>AGENDAR MEU HORÁRIO</span>
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-[#F5F5F2] border border-white/20 hover:border-[#C8A253]/70 hover:text-[#C8A253] bg-[#0A0A0A]/50 backdrop-blur-sm transition-colors duration-150 rounded-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253]"
            >
              <span>Ver serviços e preços</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>
          </div>

          {/* Subtle Editorial Trust Line (Zero pills, tabular numerals) */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#A1A1AA]">
            <span className="font-mono tabular-nums text-[#F5F5F2]/90">
              Seg a Sáb · 08h às 18h
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-white/20">
              /
            </span>
            <span>Degradê, corte social, barba e descoloração</span>
          </div>
        </div>
      </div>
    </section>
  );
}
