
import { useState, useEffect } from 'react';
import { DailyImage } from '@/types';
import ImageCard from './ImageCard';
import { getTodayImages } from '@/data/mockData';
import { useFavorites } from '@/context/FavoritesContext';
import EmptyState from './EmptyState';

const DailyFeed = () => {
  const [todayImages, setTodayImages] = useState<DailyImage[]>([]);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    // In a real app, this would fetch from the Pinterest API
    const images = getTodayImages();
    // Update favorite status based on context
    const updatedImages = images.map(image => ({
      ...image,
      isFavorite: isFavorite(image.id)
    }));
    setTodayImages(updatedImages);
  }, [isFavorite]);

  const handleToggleFavorite = (id: string) => {
    const image = todayImages.find(img => img.id === id);
    if (image) {
      toggleFavorite(image);
      setTodayImages(prevImages => 
        prevImages.map(img => 
          img.id === id 
            ? { ...img, isFavorite: !img.isFavorite } 
            : img
        )
      );
    }
  };

  if (todayImages.length === 0) {
    return (
      <EmptyState 
        title="No images yet today"
        description="Check back later for your daily idol shrine update!"
        icon="📸"
      />
    );
  }

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-idol-pink mb-2">Today's Shrine</h2>
      <p className="text-idol-gray mb-8">Your daily dose of K-pop inspiration</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {todayImages.map(image => (
          <ImageCard 
            key={image.id} 
            image={image} 
            onToggleFavorite={handleToggleFavorite} 
          />
        ))}
      </div>
    </div>
  );
};

export default DailyFeed;
