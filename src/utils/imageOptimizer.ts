/**
 * Image optimization utility for Unsplash and static image assets.
 * Automatically adds WebP format conversion, responsive widths, and compression parameters.
 */
export interface ImageOptimizerOptions {
  width?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'auto';
  fit?: 'crop' | 'max' | 'min' | 'fill';
}

export function getOptimizedImageUrl(
  src: string,
  options: ImageOptimizerOptions = {}
): string {
  if (!src) return '';

  const {
    width = 1200,
    quality = 75,
    format = 'webp',
    fit = 'crop',
  } = options;

  // Handle Unsplash images
  if (src.includes('images.unsplash.com')) {
    try {
      const url = new URL(src);
      url.searchParams.set('auto', 'format');
      url.searchParams.set('fit', fit);
      url.searchParams.set('w', width.toString());
      url.searchParams.set('q', quality.toString());
      if (format === 'webp') {
        url.searchParams.set('fm', 'webp');
      }
      return url.toString();
    } catch {
      return src;
    }
  }

  return src;
}
