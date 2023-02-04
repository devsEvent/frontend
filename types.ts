export type Event = {
  id?: number;
  slug: string;
  title: string;
  sponsor?: string; // presenter
  Media?: string[];
  address?: string;
  catering?: string;
  capacity?: number;
  start_day: string;
  start_time: string;
  avg_rating?: number;
  description: string;
  event_type?: string;
  location?: string;
  filled_capacity?: number;
  field_capacity?: number; // filled_cpacity
  logo_image?: string; // pascal
  price?: number;
};

export type comment = {
  name: string;
  date: string;
  time: string;
  text: string;
  stack: string;
  logoImage: any;
  reply?: boolean | null;
  replies?: comment[];
};

export type singleEventProps = {
  params: { eventSlug: string };
};
