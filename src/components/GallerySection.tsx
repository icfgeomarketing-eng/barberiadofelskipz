import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Expand, X } from 'lucide-react';
import {
  GALLERY_ITEMS,
  GalleryItem,
  getWhatsAppBookingUrl,
} from '../config/barbershop';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

type FilterCategory = 'todos' | GalleryItem['category'];

const FILTER_OPTIONS: { id: FilterCategory; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'degrade', label: 'Degradê' },
  { id: 'social', label: 'Social' },
  { id: 'barba', label: 'Barba' },
  { id: 'descoloracao', label: 'Descoloração' },
];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('todos');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const visibleItems =
    activeFilter === 'todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section
      id="galeria"
      className="relative py-24 sm:py-32 bg-[#050507] border-t border-white/10 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-arch-grid opacity-25"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Shared-Element Tab Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#E5C158] mb-3">
              Galeria de Cortes
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#F5F5F2]">
              Estilos que carregam identidade.
            </h2>
          </div>

          {/* Segmented Tabs with Liquid Gold layoutId Indicator */}
          <div
            role="tablist"
            aria-label="Filtrar estilos da galeria"
            className="flex flex-wrap items-center gap-1 p-1.5 bg-[#0C0C10]/90 backdrop-blur-xl border border-white/12 rounded-md self-start lg:self-auto"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(option.id)}
                  className={`relative px-4 py-2 text-xs font-semibold rounded-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${
                    isActive
                      ? 'text-[#050507]'
                      : 'text-[#A1A1AA] hover:text-[#F5F5F2]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="galleryActiveTab"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 32,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-[#C8A253] via-[#E5C158] to-[#C8A253] rounded-sm"
                    />
                  )}
                  <span className="relative z-10">{option.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Morphing Portrait Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${
            visibleItems.length === 1
              ? 'grid-cols-1 max-w-md'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.94, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -10 }}
                whileHover={{ y: -6 }}
                transition={{
                  layout: { type: 'spring', stiffness: 320, damping: 28 },
                  duration: 0.35,
                  delay: idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col bg-[#0C0C10]/90 backdrop-blur-xl border border-white/12 hover:border-[#E5C158]/60 rounded-md overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="relative aspect-[3/4] w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E5C158]"
                  aria-label={`Ampliar foto de ${item.title}`}
                >
                  <ResilientImage
                    src={item.image}
                    alt={item.alt}
                    fallbackTitle={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.06] transition-transform duration-500 ease-out"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#050507]/95 via-[#050507]/25 to-transparent"
                  />
                  <span className="absolute top-3 right-3 w-9 h-9 rounded-sm bg-[#050507]/75 backdrop-blur-md border border-white/15 text-[#F5F5F2] flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:border-[#E5C158]/70 group-hover:text-[#E5C158] transition-all duration-200">
                    <Expand className="w-4 h-4" />
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#E5C158] mb-1">
                      {item.variants}
                    </p>
                    <h3 className="font-display text-xl font-bold tracking-tight text-[#F5F5F2]">
                      {item.title}
                    </h3>
                  </div>
                </button>

                <div className="p-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <span className="text-xs text-[#A1A1AA] truncate">
                    {item.categoryLabel}
                  </span>
                  <a
                    href={getWhatsAppBookingUrl(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#E5C158] hover:text-[#F5E0A3] transition-colors whitespace-nowrap shrink-0"
                  >
                    Agendar estilo →
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Animated Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            key="lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              key="lightbox-card"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="relative w-full max-w-3xl bg-[#0D0D12] border border-white/15 rounded-md overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Fechar visualização"
                className="absolute top-3 right-3 z-10 w-10 h-10 bg-[#050507]/85 backdrop-blur-md border border-white/15 text-[#F5F5F2] hover:text-[#E5C158] rounded-sm flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[3/4] bg-[#050507]">
                <ResilientImage
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  fallbackTitle={selectedItem.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#E5C158] mb-2">
                    {selectedItem.variants}
                  </p>
                  <h3
                    id="lightbox-title"
                    className="font-display text-3xl font-bold tracking-tight text-[#F5F5F2] mb-4"
                  >
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <a
                    href={getWhatsAppBookingUrl(selectedItem.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-xs font-bold tracking-[0.12em] uppercase bg-gradient-to-r from-[#C8A253] via-[#E5C158] to-[#C8A253] text-[#050507] rounded-sm whitespace-nowrap"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                    <WhatsAppIcon className="relative w-4 h-4 shrink-0" />
                    <span className="relative">Agendar este estilo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
