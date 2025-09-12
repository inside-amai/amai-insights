import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  priority?: boolean;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  style,
  loading = 'lazy',
  sizes,
  priority = false
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center text-gray-500`} style={style}>
        Failed to load image
      </div>
    );
  }

  return (
    <div className="relative">
      {!isLoaded && !priority && (
        <div 
          className={`${className} bg-gray-100 animate-pulse`}
          style={style}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!isLoaded && !priority ? 'opacity-0 absolute inset-0' : ''} transition-opacity duration-300`}
        style={style}
        loading={priority ? 'eager' : loading}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
      />
    </div>
  );
};