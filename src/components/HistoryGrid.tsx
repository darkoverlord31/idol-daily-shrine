
import { useState, useEffect } from 'react';
import { DailyImage } from '@/types';
import ImageCard from './ImageCard';
import { getPastImages } from '@/data/mockData';
import { useFavorites } from '@/context/FavoritesContext';
import EmptyState from './EmptyState';

const HistoryGrid = () => {
  const [pastImages, setPastImages] = useState<DailyImage[]>([]);
  const [activePage, setActivePage] = useState(1);
  const imagesPerPage = 6;
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    // In a real app, this would fetch from the database
    const images = getPastImages();
    // Update favorite status based on context
    const updatedImages = images.map(image => ({
      ...image,
      isFavorite: isFavorite(image.id)
    }));
    setPastImages(updatedImages);
  }, [isFavorite]);

  const handleToggleFavorite = (id: string) => {
    const image = pastImages.find(img => img.id === id);
    if (image) {
      toggleFavorite(image);
      setPastImages(prevImages => 
        prevImages.map(img => 
          img.id === id 
            ? { ...img, isFavorite: !img.isFavorite } 
            : img
        )
      );
    }
  };

  // Calculate pagination
  const totalPages = Math.ceil(pastImages.length / imagesPerPage);
  const startIndex = (activePage - 1) * imagesPerPage;
  const paginatedImages = pastImages.slice(startIndex, startIndex + imagesPerPage);

  // Group images by date
  const imagesByDate = paginatedImages.reduce((groups, image) => {
    const date = image.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(image);
    return groups;
  }, {} as Record<string, DailyImage[]>);

  if (pastImages.length === 0) {
    return (
      <EmptyState 
        title="No history yet"
        description="Your shrine's history will be displayed here."
        icon="📅"
      />
    );
  }

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-idol-pink mb-2">Shrine History</h2>
      <p className="text-idol-gray mb-8">Look back at your past daily doses</p>
      
      {Object.entries(imagesByDate).map(([date, images]) => (
        <div key={date} className="mb-12">
          <h3 className="text-xl font-semibold text-idol-dark mb-4 border-b border-idol-lightpink pb-2">
            {new Date(date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map(image => (
              <ImageCard 
                key={image.id} 
                image={image} 
                onToggleFavorite={handleToggleFavorite} 
              />
            ))}
          </div>
        </div>
      ))}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <button
              onClick={() => setActivePage(prev => Math.max(prev - 1, 1))}
              disabled={activePage === 1}
              className="px-4 py-2 rounded-md border border-idol-lightpink text-idol-pink disabled:opacity-50"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`w-10 h-10 rounded-md ${
                  activePage === page 
                    ? 'bg-idol-pink text-white' 
                    : 'border border-idol-lightpink text-idol-pink'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setActivePage(prev => Math.min(prev + 1, totalPages))}
              disabled={activePage === totalPages}
              className="px-4 py-2 rounded-md border border-idol-lightpink text-idol-pink disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryGrid;
