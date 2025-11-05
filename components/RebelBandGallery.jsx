'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    id: 'primary',
    src: '/images/ratb/photos/ratb-primary-image.jpg',
    alt: 'Rebel and the Banned performing live'
  },
  {
    id: '01',
    src: '/images/ratb/photos/ratb-image-01.jpg',
    alt: 'Rebel and the Banned on stage with red lighting'
  },
  {
    id: '02',
    src: '/images/ratb/photos/ratb-image-02.jpg',
    alt: 'Rebel and the Banned portrait shot'
  },
  {
    id: '03',
    src: '/images/ratb/photos/ratb-image-03.jpg',
    alt: 'Rebel and the Banned studio session'
  },
  {
    id: '04',
    src: '/images/ratb/photos/ratb-image-04.jpg',
    alt: 'Rebel and the Banned rehearsal photograph'
  }
];

const RebelBandGallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (lightboxIndex === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      }
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const primaryImage = galleryImages[0];
  const thumbnailImages = galleryImages.slice(1);
  const activeImage = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;

  return (
    <div className="project-gallery">
      <button
        type="button"
        className="project-gallery__primary"
        onClick={() => openLightbox(0)}
        aria-label={`View ${primaryImage.alt} in a larger size`}
      >
        <Image
          src={primaryImage.src}
          alt={primaryImage.alt}
          width={720}
          height={900}
          sizes="(max-width: 1024px) 100vw, 460px"
          priority
        />
      </button>

      <div className="project-gallery__thumbs">
        {thumbnailImages.map((image, index) => {
          const galleryIndex = index + 1;
          return (
            <button
              key={image.id}
              type="button"
              className="project-gallery__thumb"
              onClick={() => openLightbox(galleryIndex)}
              aria-label={`View ${image.alt} in a larger size`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                sizes="(max-width: 768px) 24vw, 120px"
              />
            </button>
          );
        })}
      </div>

      {activeImage ? (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Rebel and the Banned gallery image ${activeImage.id}`}
          onClick={closeLightbox}
        >
          <div className="project-lightbox__backdrop" />
          <div
            className="project-lightbox__content"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <button
              type="button"
              className="project-lightbox__close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              Close
            </button>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={1200}
              height={1400}
              sizes="90vw"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RebelBandGallery;
