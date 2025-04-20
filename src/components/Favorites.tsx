
import { useState, useEffect } from 'react';
import { DailyImage } from '@/types';
import ImageCard from './ImageCard';
import { useFavorites } from '@/context/FavoritesContext';
import EmptyState from './EmptyState';

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();

  const handleToggleFavorite = (id: string) => {
    const image = favorites.find(img => img.id === id);
    if (image) {
      toggleFavorite(image);
    }
  };

  if (favorites.length === 0) {
    return (
      <EmptyState 
        title="No favorites yet"
        description="Heart your favorite images to see them here!"
        icon="❤️"
      />
    );
  }

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-idol-pink mb-2">Your Biases</h2>
      <p className="text-idol-gray mb-8">Your all-time favorite idols</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favorites.map(image => (
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

export default Favorites;
