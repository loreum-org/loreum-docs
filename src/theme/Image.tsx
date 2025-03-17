import React, { useState } from 'react';
import clsx from 'clsx';

interface CustomImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function CustomImage({ src, alt, className, width, height }: CustomImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className={clsx('image-container', className)}>
      {!error ? (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={clsx('image', { 'image-loading': loading })}
          onError={handleError}
          onLoad={handleLoad}
        />
      ) : (
        <div className="image-error">
          <span>Failed to load image</span>
        </div>
      )}
      {loading && <div className="image-loading-placeholder" />}
    </div>
  );
} 