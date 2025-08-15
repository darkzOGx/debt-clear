import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3C/svg%3E',
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const onIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setImageSrc(src);
    }
  };

  useEffect(() => {
    let observer;
    
    if (imageRef && imageSrc === placeholder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(onIntersection, {
          threshold: 0.01,
          rootMargin: '50px',
        });
        observer.observe(imageRef);
      } else {
        // Fallback for browsers that don't support IntersectionObserver
        setImageSrc(src);
      }
    }
    
    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, imageSrc, placeholder, src]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      onLoad={() => setIsLoaded(true)}
      loading="lazy"
      {...props}
    />
  );
};

export default LazyImage;