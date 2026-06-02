import React from 'react';

/**
 * OptimizedImage Component
 * Automatically serves WebP with fallback to original format
 * Improves performance while maintaining compatibility
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  ...props
}) {
  // Convert image path to WebP version
  const webpSrc = src.replace(/\.(jpg|jpeg|png|gif|avif)$/i, '.webp');
  const originalSrc = src;

  return (
    <picture>
      {/* WebP format for modern browsers */}
      <source srcSet={webpSrc} type="image/webp" />
      {/* Fallback to original format */}
      <img
        src={originalSrc}
        alt={alt}
        className={className}
        loading={loading}
        {...props}
      />
    </picture>
  );
}
