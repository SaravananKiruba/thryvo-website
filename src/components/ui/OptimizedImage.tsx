import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

type OptimizedImageProps = ImageProps & {
  /**
   * Additional CSS classes
   */
  className?: string;
};

/**
 * OptimizedImage component that wraps Next.js Image with performance optimizations
 * 
 * Features:
 * - Properly sized images to avoid CLS (Content Layout Shift)
 * - Lazy loading for images below the fold
 * - Uses WebP or AVIF formats when supported by browser
 * - Proper accessibility attributes
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  ...props
}: OptimizedImageProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={85}
        priority={priority}
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes || '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'}
        className="object-cover transition-all duration-300"
        {...props}
      />
    </div>
  );
}

export default OptimizedImage;
