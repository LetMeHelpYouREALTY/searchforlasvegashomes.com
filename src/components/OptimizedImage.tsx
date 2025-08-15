'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  // Google's 2025 requirements
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: 'sync' | 'async' | 'auto';
  loading?: 'lazy' | 'eager';
}

export default function OptimizedImage({
  src,
  alt,
  width = 400,
  height = 300,
  className = '',
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  quality = 90,
  placeholder = 'blur',
  blurDataURL,
  fetchPriority = 'auto',
  decoding = 'async',
  loading = 'lazy'
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for INP optimization
  useEffect(() => {
    if (!priority && imageRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: '50px', // Start loading 50px before intersection
          threshold: 0.1
        }
      );

      observer.observe(imageRef.current);
      return () => observer.disconnect();
    } else {
      setIsIntersecting(true);
    }
  }, [priority]);

  const handleError = () => {
    setImageError(true);
  };

  const handleLoad = () => {
    setImageLoaded(true);
  };

  // If image failed to load, show fallback
  if (imageError) {
    return (
      <div 
        ref={imageRef}
        className={`bg-gray-100 flex items-center justify-center rounded-lg ${className}`}
        style={{ 
          width: `${width}px`, 
          height: `${height}px`,
          aspectRatio: `${width}/${height}`
        }}
      >
        <div className="text-center text-gray-500">
          <div className="text-sm">Image Unavailable</div>
        </div>
      </div>
    );
  }

  // Don't render until intersection for non-priority images
  if (!isIntersecting && !priority) {
    return (
      <div 
        ref={imageRef}
        className={`bg-gray-100 animate-pulse rounded-lg ${className}`}
        style={{ 
          width: `${width}px`, 
          height: `${height}px`,
          aspectRatio: `${width}/${height}`
        }}
      />
    );
  }

  return (
    <div 
      ref={imageRef}
      className={`relative ${className}`} 
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        aspectRatio: `${width}/${height}`
      }}
    >
      {/* Placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg" />
      )}
      
      {/* Main Image with Google's 2025 optimizations */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`rounded-lg transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        priority={priority}
        onError={handleError}
        onLoad={handleLoad}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        quality={quality}
        sizes={sizes}
        fetchPriority={fetchPriority}
        decoding={decoding}
        loading={loading}
        // Google's Core Web Vitals optimizations
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  );
}

// Mobile-first responsive image component
export function ResponsiveImage({
  src,
  alt,
  className = '',
  priority = false,
  fetchPriority = 'auto'
}: Omit<OptimizedImageProps, 'width' | 'height'>) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Mobile-first responsive container */}
      <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-lg"
          priority={priority}
          fetchPriority={fetchPriority}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>
    </div>
  );
}

// Avatar image component with INP optimization
export function AvatarImage({
  src,
  alt,
  size = 'md',
  className = '',
  priority = false
}: {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  priority?: boolean;
}) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const pixelSizes = {
    sm: 32,
    md: 48,
    lg: 64
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={pixelSizes[size]}
        height={pixelSizes[size]}
        className="rounded-full object-cover"
        sizes={`${pixelSizes[size]}px`}
        priority={priority}
        fetchPriority={priority ? 'high' : 'auto'}
        quality={90}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>
  );
}

// Real estate specific listing image component
export function ListingImage({
  src,
  alt,
  featured = false,
  className = ''
}: {
  src: string;
  alt: string;
  featured?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="aspect-[4/3] sm:aspect-[16/9]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-lg"
          priority={featured}
          fetchPriority={featured ? 'high' : 'auto'}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>
      
      {/* Featured badge for priority loading */}
      {featured && (
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
          Featured
        </div>
      )}
    </div>
  );
}
