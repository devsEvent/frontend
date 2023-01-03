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

export type reply = {
  date: string;
  time: string;
  fullname: string;
  logo_image: string;
  likes_count: string;
  positions: string[];
};

export type comment = {
  time: string;
  date: string;
  fullname: string;
  logo_image: string;
  likes_count: string;
  positions: string[];
  replies: reply[];
};
