export type Event = {
  slug: string;
  title: string;
  sponser: string;
  Address?: string;
  location?: string;
  logo_image: string;
  event_type: string;
  description: string;
  filled_capacity: number;
  in_progress: boolean;
  start_time: string;
  start_day: string;
  isOnline: boolean;
  catering: string;
  capacity: number;
  iscash: boolean;
  price: number;
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
