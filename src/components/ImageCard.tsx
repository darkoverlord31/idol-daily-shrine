
import { useState } from 'react';
import { DailyImage } from '@/types';
import { Heart } from 'lucide-react';

interface ImageCardProps {
  image: DailyImage;
  onToggleFavorite: (id: string) => void;
}

const ImageCard = ({ image, onToggleFavorite }: ImageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { idol, pin, date, isFavorite } = image;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div 
      className="relative rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={pin.image_url} 
          alt={`${idol.name} from ${idol.group}`} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
        />
        <button 
          onClick={() => onToggleFavorite(image.id)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md transition-all duration-300 hover:bg-white"
        >
          <Heart 
            size={20} 
            className={`transition-colors ${isFavorite ? 'fill-idol-pink stroke-idol-pink' : 'stroke-idol-gray'}`} 
          />
        </button>
      </div>

      <div className="p-4 bg-white">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-idol-dark">{idol.name}</h3>
          <span className="text-sm font-medium px-2 py-1 rounded-full bg-idol-pastel text-idol-pink">{idol.group}</span>
        </div>
        
        <p className="text-sm text-idol-gray mb-3 line-clamp-2">{pin.description}</p>
        
        <div className="text-xs text-idol-gray space-y-1 mt-2">
          <div className="flex justify-between">
            <span>Source:</span>
            <a 
              href={pin.pin_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-idol-pink hover:underline"
            >
              {pin.creator.username}
            </a>
          </div>
          <div className="flex justify-between">
            <span>Board:</span>
            <a 
              href={pin.board.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-idol-pink hover:underline"
            >
              {pin.board.name}
            </a>
          </div>
          <div className="flex justify-between">
            <span>Added:</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
