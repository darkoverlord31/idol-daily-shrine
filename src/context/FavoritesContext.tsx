
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { DailyImage } from '@/types';

interface FavoritesContextType {
  favorites: DailyImage[];
  addFavorite: (image: DailyImage) => void;
  removeFavorite: (id: string) => void;
  toggleFavorite: (image: DailyImage) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<DailyImage[]>([]);

  // Load favorites from localStorage on initial render
  useEffect(() => {
    const storedFavorites = localStorage.getItem('idol-favorites');
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error('Failed to parse favorites:', error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('idol-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (image: DailyImage) => {
    setFavorites(prev => [...prev, { ...image, isFavorite: true }]);
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(image => image.id !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some(image => image.id === id);
  };

  const toggleFavorite = (image: DailyImage) => {
    if (isFavorite(image.id)) {
      removeFavorite(image.id);
    } else {
      addFavorite(image);
    }
  };

  return (
    <FavoritesContext.Provider 
      value={{ favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
