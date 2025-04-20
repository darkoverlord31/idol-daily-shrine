
export interface Idol {
  id: string;
  name: string;
  group: string;
}

export interface PinterestPin {
  id: string;
  image_url: string;
  description: string;
  pin_url: string;
  creator: {
    username: string;
    profile_url: string;
  };
  board: {
    name: string;
    url: string;
  };
}

export interface DailyImage {
  id: string;
  date: string;
  idol: Idol;
  pin: PinterestPin;
  isFavorite: boolean;
}

export interface BoardConfig {
  boardId: string;
  idolId: string;
}
