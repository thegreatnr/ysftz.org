
export interface NewsItem {
  date: string;
  text: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface SlideData {
  imageUrl: string;
  title?: string;
  stats?: {
    label: string;
    value: string | number;
  }[];
  year?: string;
  yearLabel?: string;
}

export interface Partner {
  name: string;
  imageUrl: string;
}
