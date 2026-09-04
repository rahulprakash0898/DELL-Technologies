export type CategoryId = 'all' | 'hero' | 'feature' | 'product' | 'accessories' | 'offer';

export type ViewMode = 'interactive' | 'pdf' | 'split';

export interface ModeItem {
  name: string;
  desc: string;
  id?: string;
  useCase?: string;
}

export interface PortItem {
  name: string;
  desc: string;
}

export interface SlideItem {
  id: number;
  pdfPage: number;
  category: CategoryId;
  categoryName: string;
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  price?: string;
  originalPrice?: string;
  savings?: string;
  emi?: string;
  features?: string[];
  modes?: ModeItem[];
  ports?: PortItem[];
  intelBadge?: string;
  copilotLogo?: boolean;
  scanOffer?: boolean;
  knowMore?: boolean;
  description: string;
}

export interface CategoryItem {
  id: CategoryId;
  name: string;
}

export interface PriceBadgeProps {
  price: string;
  originalPrice?: string;
  emi?: string;
  badge?: string;
  savings?: string;
  compact?: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}
