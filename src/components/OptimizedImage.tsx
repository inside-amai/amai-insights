import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string; // container classes
  imgClassName?: string; // image-specific classes
  loading?: 'lazy' | 'eager';
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  imgClassName,
  loading = 'lazy',
  style,
  onClick
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
      )}
      
      <img
        src={src}
        alt={alt}
        loading={loading}
        style={style}
        onClick={onClick}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          hasError && "opacity-50",
          imgClassName ?? className
        )}
      />
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-400 text-sm">
          Failed to load image
        </div>
      )}
    </div>
  );
};