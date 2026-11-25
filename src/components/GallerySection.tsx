import { useState } from 'react';
import { motion } from 'motion/react';
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
      className="py-20 sm:py-28 bg-[#0A0A0A] border-t border-white/8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Interactive Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#C8A253] mb-3">
              Galeria de Cortes
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F2]">
              Estilos que carregam identidade.
            </h2>
          </div>

          {/* Functional Segmented Filter Buttons */}
          <div
            role="tablist"
            aria-label="Filtrar estilos da galeria"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121215] border border-white/10 rounded-sm self-start lg:self-auto"
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
                  className={`px-3.5 py-2 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A253] ${
                    isActive
                      ? 'bg-[#C8A253] text-[#0A0A0A] font-semibold'
                      : 'text-[#A1A1AA] hover:text-[#F5F5F2]'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portrait Grid */}
        <div
          className={`grid gap-6 ${
            visibleItems.length === 1
              ? 'grid-cols-1 max-w-md'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {visibleItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.35,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col bg-[#121215] border border-white/10 hover:border-[#C8A253]/50 rounded-sm overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                className="relative aspect-[3/4] w-full overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C8A253]"
                aria-label={`Ampliar foto de ${item.title}`}
              >
                <ResilientImage
                  src={item.image}
                  alt={item.alt}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent"
                />
                <span className="absolute top-3 right-3 w-8 h-8 rounded-sm bg-[#0A0A0A]/75 border border-white/15 text-[#F5F5F2] flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:border-[#C8A253]/60 transition-all">
                  <Expand className="w-3.5 h-3.5" />
                </span>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] font-medium tracking-wider uppercase text-[#C8A253] mb-1">
                    {item.variants}
                  </p>
                  <h3 className="font-display text-xl font-bold tracking-wide text-[#F5F5F2]">
                    {item.title}
                  </h3>
                </div>
              </button>

              <div className="p-4 border-t border-white/8 flex items-center justify-between gap-3">
                <span className="text-xs text-[#A1A1AA] truncate">
                  {item.categoryLabel}
                </span>
                <a
                  href={getWhatsAppBookingUrl(item.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#C8A253] hover:text-[#D9B66A] transition-colors whitespace-nowrap shrink-0"
                >
                  Agendar estilo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#121215] border border-white/15 rounded-sm overflow-hidden grid grid-cols-1 md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Fechar visualização"
              className="absolute top-3 right-3 z-10 w-10 h-10 bg-[#0A0A0A]/85 border border-white/15 text-[#F5F5F2] hover:text-[#C8A253] rounded-sm flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[3/4] bg-[#0A0A0A]">
              <ResilientImage
                src={selectedItem.image}
                alt={selectedItem.alt}
                fallbackTitle={selectedItem.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#C8A253] mb-2">
                  {selectedItem.variants}
                </p>
                <h3
                  id="lightbox-title"
                  className="font-display text-3xl font-bold text-[#F5F5F2] mb-4"
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
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-xs font-semibold tracking-[0.1em] uppercase bg-[#C8A253] text-[#0A0A0A] hover:bg-[#D9B66A] transition-colors rounded-sm whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Agendar este estilo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
