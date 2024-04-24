import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(goToNextImage, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="relative w-450 h-550 overflow-hidden  rounded-md transition-transform duration-300 transform sm:hover:scale-110 sm:hover:-translate-x-6 sm:hover:-translate-y-4">
     
        <img 
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
          className="object-cover p-5  "
        />
      
    </div>
  );
};

export default ImageSlider;
