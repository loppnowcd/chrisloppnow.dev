import React, { useState, useRef } from 'react';

const PhotoFrame = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(-1);
  const [showFlash, setShowFlash] = useState(false);
  const intervalRef = useRef(null);

  const photos = [
    '/images/image2purplesky.jpeg',
    '/images/image3greenleaves.jpeg',
    '/images/image8coding.jpg',
    '/images/image4redcar.jpeg',
    '/images/image6blueheeler.jpeg',
    '/images/image7coding.jpeg',
    '/images/image5zodiac.jpg',
  ];

  const initialPhoto = '/images/image1end.jpeg';

  const startSequence = () => {
    if (intervalRef.current) return;
    
    setCurrentPhotoIndex(0);
    
    intervalRef.current = setInterval(() => {
      setCurrentPhotoIndex(prev => (prev + 1) % photos.length);
    }, 400);
  };

  const stopSequence = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setTimeout(() => {
      setCurrentPhotoIndex(-1);
      
      setTimeout(() => {
        setShowFlash(true);
        setTimeout(() => setShowFlash(false), 400);
      }, 50);
    }, 400);
  };

  return (
    <div className="relative w-full max-w-md aspect-square">
      <div 
        className="absolute inset-0 overflow-hidden cursor-pointer"
        onMouseEnter={startSequence}
        onMouseLeave={stopSequence}
      >
        {/* Foto inicial */}
        <img 
          src={initialPhoto}
          alt="Initial photo"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-100 ${
            currentPhotoIndex === -1 ? 'opacity-100' : 'opacity-0'
          } ${showFlash ? 'animate-flash' : ''}`}
        />
        
        {/* Todas as outras fotos */}
        {photos.map((photo, index) => (
          <img 
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-100 ${
              currentPhotoIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Moldura SVG */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/images/vectorstain2svgcode.svg"
          alt="Frame"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default PhotoFrame;