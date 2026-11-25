export interface ServiceItem {
  id: string;
  index: string;
  name: string;
  description: string;
  price: string;
  durationHint: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'degrade' | 'social' | 'barba' | 'descoloracao';
  categoryLabel: string;
  variants: string;
  description: string;
  image: string;
  alt: string;
}

export interface OpeningHour {
  day: string;
  dayIndex: number; // 0 = Sunday, 1 = Monday ... 6 = Saturday
  hours: string;
  isClosed?: boolean;
}

/**
 * CONFIGURAÇÃO CENTRAL DA BARBEARIA DO FELSKIPZ
 * Altere o número de WhatsApp e o endereço completo abaixo quando desejar.
 */
export const BARBERSHOP_CONFIG = {
  brandName: 'BARBEARIA DO FELSKIPZ',
  city: 'Seropédica – Rio de Janeiro',
  shortCity: 'Seropédica – RJ',

  // Insira aqui o número oficial de WhatsApp no formato DDI + DDD + Número (somente dígitos).
  // Exemplo para Rio de Janeiro: '5521999999999'
  whatsappNumber: '5521999999999',

  // Mensagem automática pré-configurada solicitada:
  whatsappDefaultMessage:
    'Olá! Vim pelo site da Barbearia do Felskipz e gostaria de agendar um horário.',

  // Deixe vazio ('') enquanto não houver endereço definitivo, ou preencha com rua, número e bairro.
  fullAddress: '',
  addressPlaceholderNote: 'Endereço completo a ser inserido em breve.',

  // Link de busca / rota no Google Maps (atualize quando tiver o endereço exato)
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Serop%C3%A9dica,+Rio+de+Janeiro,+RJ',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Serop%C3%A9dica,%20Rio%20de%20Janeiro&t=&z=13&ie=UTF8&iwloc=&output=embed',
};

export function getWhatsAppBookingUrl(serviceName?: string): string {
  const baseMessage = BARBERSHOP_CONFIG.whatsappDefaultMessage;
  const fullMessage = serviceName
    ? `${baseMessage} Tenho interesse em: ${serviceName}.`
    : baseMessage;
  return `https://wa.me/${BARBERSHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
}

export const HERO_IMAGE = '/assets/aistudio/pou-real-haircuts_685e996a.jpg';
export const ABOUT_IMAGE = '/src/assets/images/about_barbershop_interior_1795566174217.jpg';

export const SERVICES: ServiceItem[] = [
  {
    id: 'corte-masculino',
    index: '01',
    name: 'CORTE MASCULINO',
    description: 'Cortes modernos, degradês e estilos personalizados.',
    price: 'R$ 35,00',
    durationHint: '40 min · Máquina, tesoura e acabamento',
  },
  {
    id: 'corte-barba',
    index: '02',
    name: 'CORTE + BARBA',
    description: 'Visual completo com acabamento impecável.',
    price: 'R$ 50,00',
    durationHint: '60 min · Pacote completo com navalha',
    featured: true,
  },
  {
    id: 'descoloracao',
    index: '03',
    name: 'DESCOLORAÇÃO',
    description: 'Transforme seu visual com estilo e personalidade.',
    price: 'R$ 100,00',
    durationHint: '90 min · Platinado ou luzes sob medida',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'degrade',
    title: 'Cortes Degradê',
    category: 'degrade',
    categoryLabel: 'Degradê',
    variants: 'Low Fade · Mid Fade · High Fade',
    description:
      'Transição suave da pele ao topo com marcação limpa na navalha, disponível em variações Low Fade, Mid Fade e High Fade para valorizar o formato do rosto.',
    image: '/src/assets/images/gallery_fade_cut_1795566173747.jpg',
    alt: 'Corte masculino degradê Mid Fade com acabamento preciso na Barbearia do Felskipz em Seropédica',
  },
  {
    id: 'social',
    title: 'Cortes Sociais',
    category: 'social',
    categoryLabel: 'Social',
    variants: 'Tesoura · Clássico · Executivo',
    description:
      'Caimento natural modelado na tesoura com contornos discretos e elegantes, ideal para o trabalho, eventos e rotina com praticidade.',
    image: '/src/assets/images/gallery_social_cut_1795566175366.jpg',
    alt: 'Corte masculino social moderno feito na tesoura na Barbearia do Felskipz em Seropédica',
  },
  {
    id: 'barba',
    title: 'Barbas Alinhadas',
    category: 'barba',
    categoryLabel: 'Barba',
    variants: 'Navalha · Desenho · Hidratação',
    description:
      'Simetria milimétrica nas bochechas e pescoço, redução de volume equilibrada e finalização suave para manter a pele protegida.',
    image: '/src/assets/images/gallery_beard_trim_1795566176218.jpg',
    alt: 'Barba masculina alinhada na navalha com corte degradê na Barbearia do Felskipz',
  },
  {
    id: 'descoloracao',
    title: 'Transformações & Descolorações',
    category: 'descoloracao',
    categoryLabel: 'Descoloração',
    variants: 'Platinado · Nevou · Luzes',
    description:
      'Técnica cuidadosa para atingir o tom platinado uniforme sem agredir o fio, combinada ao corte degradê para máximo contraste.',
    image: '/src/assets/images/gallery_platinum_bleach_1795566175652.jpg',
    alt: 'Transformação masculina com descoloração platinada e corte degradê na Barbearia do Felskipz',
  },
];

export const OPENING_HOURS: OpeningHour[] = [
  { day: 'Segunda-feira', dayIndex: 1, hours: '08h às 18h' },
  { day: 'Terça-feira', dayIndex: 2, hours: '08h às 18h' },
  { day: 'Quarta-feira', dayIndex: 3, hours: '08h às 18h' },
  { day: 'Quinta-feira', dayIndex: 4, hours: '08h às 18h' },
  { day: 'Sexta-feira', dayIndex: 5, hours: '08h às 18h' },
  { day: 'Sábado', dayIndex: 6, hours: '08h às 18h' },
  { day: 'Domingo', dayIndex: 0, hours: 'Fechado', isClosed: true },
];
