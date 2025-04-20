
import { collection, addDoc, getDocs, query, where, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { DailyImage, PinterestPin, BoardConfig } from '@/types';
import { idols } from '@/data/mockData';

export const fetchPinsFromBoard = async (boardId: string): Promise<PinterestPin[]> => {
  // In a real implementation, this would call the Pinterest API
  console.log(`Fetching pins from board: ${boardId}`);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock data
  return [
    {
      id: `pin-${Date.now()}`,
      image_url: 'https://source.unsplash.com/random/600x800?idol,kpop,girl',
      description: 'Latest idol photoshoot',
      pin_url: `https://pinterest.com/pin/${Date.now()}`,
      creator: {
        username: 'kpop_fan',
        profile_url: 'https://pinterest.com/kpop_fan',
      },
      board: {
        name: boardId,
        url: `https://pinterest.com/kpop_fan/${boardId}`,
      },
    },
  ];
};

export const generateDailyImages = async (boardConfigs: BoardConfig[]): Promise<DailyImage[]> => {
  const today = new Date().toISOString().split('T')[0];
  const result: DailyImage[] = [];
  
  // Pick 1-3 random board configs
  const randomCount = Math.floor(Math.random() * 3) + 1;
  const shuffled = [...boardConfigs].sort(() => 0.5 - Math.random());
  const selectedConfigs = shuffled.slice(0, randomCount);
  
  for (const config of selectedConfigs) {
    const pins = await fetchPinsFromBoard(config.boardId);
    const idol = idols.find(i => i.id === config.idolId);
    
    if (idol && pins.length > 0) {
      // For each selected config, pick one pin
      const randomPin = pins[Math.floor(Math.random() * pins.length)];
      
      const dailyImage: DailyImage = {
        id: `daily-${Date.now()}-${idol.id}`,
        date: today,
        idol,
        pin: randomPin,
        isFavorite: false,
      };
      
      // Optional: Save to Firestore
      try {
        await addDoc(collection(db, 'dailyImages'), {
          ...dailyImage,
          createdAt: Timestamp.now()
        });
      } catch (error) {
        console.error('Error saving daily image to Firestore', error);
      }
      
      result.push(dailyImage);
    }
  }
  
  return result;
};

// Fetch past images from Firestore
export const getPastImages = async (): Promise<DailyImage[]> => {
  try {
    const q = query(collection(db, 'dailyImages'));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        date: data.date,
        idol: data.idol,
        pin: data.pin,
        isFavorite: data.isFavorite || false
      } as DailyImage;
    });
  } catch (error) {
    console.error('Error fetching past images', error);
    return [];
  }
};
