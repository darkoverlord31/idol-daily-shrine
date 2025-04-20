
import { DailyImage, Idol } from '@/types';

export const idols: Idol[] = [
  { id: '1', name: 'Jisoo', group: 'BLACKPINK' },
  { id: '2', name: 'Jennie', group: 'BLACKPINK' },
  { id: '3', name: 'Rosé', group: 'BLACKPINK' },
  { id: '4', name: 'Lisa', group: 'BLACKPINK' },
  { id: '5', name: 'Karina', group: 'aespa' },
  { id: '6', name: 'Winter', group: 'aespa' },
  { id: '7', name: 'Ningning', group: 'aespa' },
  { id: '8', name: 'Giselle', group: 'aespa' },
  { id: '9', name: 'IU', group: 'Solo' },
  { id: '10', name: 'Taeyeon', group: 'Girls\' Generation' },
];

// Helper to get today's date as a string
const getTodayDateString = () => {
  return new Date().toISOString().split('T')[0];
};

// Helper to get yesterday's date as a string
const getYesterdayDateString = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return yesterday.toISOString().split('T')[0];
};

// Helper to get 2 days ago date as a string
const getTwoDaysAgoDateString = () => {
  const twoDaysAgo = new Date();
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  return twoDaysAgo.toISOString().split('T')[0];
};

export const mockDailyImages: DailyImage[] = [
  {
    id: '1',
    date: getTodayDateString(),
    idol: idols[0],
    pin: {
      id: 'pin1',
      image_url: 'https://source.unsplash.com/random/600x800?idol,kpop,girl',
      description: 'Jisoo looking stunning in her latest photoshoot',
      pin_url: 'https://pinterest.com/pin/1',
      creator: {
        username: 'blackpink_fan',
        profile_url: 'https://pinterest.com/blackpink_fan',
      },
      board: {
        name: 'BLACKPINK Jisoo',
        url: 'https://pinterest.com/blackpink_fan/blackpink-jisoo',
      },
    },
    isFavorite: true,
  },
  {
    id: '2',
    date: getTodayDateString(),
    idol: idols[1],
    pin: {
      id: 'pin2',
      image_url: 'https://source.unsplash.com/random/600x800?model,fashion,woman',
      description: 'Jennie at Paris Fashion Week',
      pin_url: 'https://pinterest.com/pin/2',
      creator: {
        username: 'fashion_kpop',
        profile_url: 'https://pinterest.com/fashion_kpop',
      },
      board: {
        name: 'BLACKPINK Fashion',
        url: 'https://pinterest.com/fashion_kpop/blackpink-fashion',
      },
    },
    isFavorite: false,
  },
  {
    id: '3',
    date: getYesterdayDateString(),
    idol: idols[4],
    pin: {
      id: 'pin3',
      image_url: 'https://source.unsplash.com/random/600x800?singer,artist,girl',
      description: 'Karina\'s ethereal visuals in aespa\'s latest MV',
      pin_url: 'https://pinterest.com/pin/3',
      creator: {
        username: 'aespa_daily',
        profile_url: 'https://pinterest.com/aespa_daily',
      },
      board: {
        name: 'aespa Karina',
        url: 'https://pinterest.com/aespa_daily/aespa-karina',
      },
    },
    isFavorite: true,
  },
  {
    id: '4',
    date: getYesterdayDateString(),
    idol: idols[8],
    pin: {
      id: 'pin4',
      image_url: 'https://source.unsplash.com/random/600x800?korean,singer',
      description: 'IU\'s new album concept photos',
      pin_url: 'https://pinterest.com/pin/4',
      creator: {
        username: 'iu_forever',
        profile_url: 'https://pinterest.com/iu_forever',
      },
      board: {
        name: 'IU Gallery',
        url: 'https://pinterest.com/iu_forever/iu-gallery',
      },
    },
    isFavorite: false,
  },
  {
    id: '5',
    date: getTwoDaysAgoDateString(),
    idol: idols[3],
    pin: {
      id: 'pin5',
      image_url: 'https://source.unsplash.com/random/600x800?asian,model',
      description: 'Lisa for Celine\'s latest campaign',
      pin_url: 'https://pinterest.com/pin/5',
      creator: {
        username: 'lisa_fanpage',
        profile_url: 'https://pinterest.com/lisa_fanpage',
      },
      board: {
        name: 'Lisa Brand Ambassador',
        url: 'https://pinterest.com/lisa_fanpage/lisa-brand-ambassador',
      },
    },
    isFavorite: true,
  },
  {
    id: '6',
    date: '2023-04-17',
    idol: idols[2],
    pin: {
      id: 'pin6',
      image_url: 'https://source.unsplash.com/random/600x800?concert,performance',
      description: 'Rosé performing at Coachella',
      pin_url: 'https://pinterest.com/pin/6',
      creator: {
        username: 'rose_pics',
        profile_url: 'https://pinterest.com/rose_pics',
      },
      board: {
        name: 'Rosé Solo',
        url: 'https://pinterest.com/rose_pics/rose-solo',
      },
    },
    isFavorite: false,
  },
  {
    id: '7',
    date: '2023-04-17',
    idol: idols[5],
    pin: {
      id: 'pin7',
      image_url: 'https://source.unsplash.com/random/600x800?beauty,korean',
      description: 'Winter\'s iconic look in the latest comeback',
      pin_url: 'https://pinterest.com/pin/7',
      creator: {
        username: 'winter_daily',
        profile_url: 'https://pinterest.com/winter_daily',
      },
      board: {
        name: 'Winter aespa',
        url: 'https://pinterest.com/winter_daily/winter-aespa',
      },
    },
    isFavorite: true,
  },
  {
    id: '8',
    date: getTwoDaysAgoDateString(),
    idol: idols[9],
    pin: {
      id: 'pin8',
      image_url: 'https://source.unsplash.com/random/600x800?music,artist',
      description: 'Taeyeon\'s new hairstyle for her comeback',
      pin_url: 'https://pinterest.com/pin/8',
      creator: {
        username: 'sone_forever',
        profile_url: 'https://pinterest.com/sone_forever',
      },
      board: {
        name: 'SNSD Taeyeon',
        url: 'https://pinterest.com/sone_forever/snsd-taeyeon',
      },
    },
    isFavorite: false,
  },
];

export const boardConfigs = [
  { boardId: 'blackpink_jisoo', idolId: '1' },
  { boardId: 'blackpink_jennie', idolId: '2' },
  { boardId: 'blackpink_rose', idolId: '3' },
  { boardId: 'blackpink_lisa', idolId: '4' },
  { boardId: 'aespa_karina', idolId: '5' },
  { boardId: 'aespa_winter', idolId: '6' },
  { boardId: 'aespa_ningning', idolId: '7' },
  { boardId: 'aespa_giselle', idolId: '8' },
  { boardId: 'iu_gallery', idolId: '9' },
  { boardId: 'taeyeon_gallery', idolId: '10' },
];

// Helper function to get today's images
export const getTodayImages = (): DailyImage[] => {
  const today = getTodayDateString();
  return mockDailyImages.filter(image => image.date === today);
};

// Helper function to get past images
export const getPastImages = (): DailyImage[] => {
  const today = getTodayDateString();
  return mockDailyImages.filter(image => image.date !== today);
};

// Helper function to get favorite images
export const getFavoriteImages = (): DailyImage[] => {
  return mockDailyImages.filter(image => image.isFavorite);
};
