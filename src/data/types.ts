export type GalleryVariant = "hero" | "tall" | "wide" | "full" | "default";

export type Shot = {
  src: string;
  alt: string;
  caption: string;
  stripLabel: string;
  inGallery?: boolean;
  variant?: GalleryVariant;
  objectTop?: boolean;
};

export type Feature = {
  num: string;
  title: string;
  desc: string;
};

export type Layout = "bleed" | "split" | "cinema" | "terminal" | "quiet";

export type Project = {
  id: string;
  index: string;
  name: string;
  titleLead: string;
  titleAccent?: string;
  badge: string;
  type: string;
  year: string;
  layout: Layout;
  live?: string;
  github?: string;
  hubDesc: string;
  subtitle: string;
  tags: string[];
  impact: {
    before: string;
    solution: string;
    result: string;
  };
  metrics: { value: string; label: string }[];
  about: [string, string];
  highlights: string[];
  features: Feature[];
  arch: string;
  flow: string[];
  stack: { name: string; role: string }[];
  shots: Shot[];
  coverObjectTop?: boolean;
};
