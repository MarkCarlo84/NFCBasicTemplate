import React, { useState } from 'react';
import { Image as ImageIcon, X, ExternalLink } from 'lucide-react';
import type { GalleryItem, ProfileConfig } from '../types';

interface GallerySectionProps {
  gallery?: ProfileConfig['gallery'];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ gallery }) => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  if (!gallery || !gallery.items || gallery.items.length === 0) {
    return null;
  }

  return (
    <section className="w-full px-4 mb-6">
      <div className="max-w-md mx-auto text-left">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-3.5 h-3.5 text-theme-text-muted" />
            <h2 className="text-xs uppercase tracking-widest font-mono font-medium text-theme-text-muted">
              {gallery.heading || 'Selected Works'}
            </h2>
          </div>
          {gallery.subheading && (
            <span className="text-[11px] text-theme-text-muted hidden sm:inline">
              {gallery.subheading}
            </span>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3">
          {gallery.items.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative flex flex-col text-left rounded-xl overflow-hidden bg-theme-surface border border-theme-border shadow-soft-sm hover:border-theme-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] focus:outline-none"
            >
              {/* Image Container with 4:3 aspect ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-theme-surface-subtle">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Meta */}
              <div className="p-2.5">
                {item.category && (
                  <span className="text-[10px] uppercase font-mono tracking-wider text-theme-text-muted line-clamp-1">
                    {item.category}
                  </span>
                )}
                <h3 className="text-xs font-semibold text-theme-text-primary line-clamp-1 tracking-tight">
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-lg w-full bg-theme-surface rounded-2xl overflow-hidden border border-theme-border shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="relative max-h-[60vh] w-full overflow-hidden bg-black/10">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>

            {/* Modal Content */}
            <div className="p-5 text-left">
              {activeItem.category && (
                <span className="text-[11px] uppercase font-mono tracking-wider text-theme-text-muted">
                  {activeItem.category}
                </span>
              )}
              <h3 className="text-base font-semibold text-theme-text-primary mb-2">
                {activeItem.title}
              </h3>
              {activeItem.description && (
                <p className="text-xs sm:text-sm text-theme-text-secondary leading-relaxed mb-4">
                  {activeItem.description}
                </p>
              )}

              {activeItem.link && (
                <a
                  href={activeItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-theme-accent hover:underline"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
