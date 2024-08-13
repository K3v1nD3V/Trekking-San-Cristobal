import './style.css'
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const images = [

    
    {
      url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbQ5lh1dvqkC11sIZZHdTFM9rOfgkS5NP2VnuLs6o4DiHx8rnizQ8H46NIwagBpXy0KTIcl9lTbyboxbjpIaUvUA5Hm4_KI_Ynb_GX5HTzBzWs_z-z3XJQ5i_4uwUCFKm3ZnKeeWRFbSyR/s1600/IMAGEN-14594385-2.jpg',
      title: 'Image 1',
      description: 'This is a description of image 1',
    },
    {
      url: 'https://st4.depositphotos.com/1028066/38717/i/450/depositphotos_387171208-stock-photo-landscape-wax-palm-trees-ceroxylon.jpg',
      title: 'Image 2',
      description: 'This is a description of image 2',
    },
    {
      url: 'https://miputumayo.com.co/wp-content/uploads/2014/10/IMAGEN-14666277-2.jpg',
      title: 'Image 3',
      description: 'This is a description of image 3',
    },
    {
      url: 'https://cdn0.matrimonio.com.co/article/4285/original/1280/jpg/35824-shutterstock-345433454.jpeg',
      title: 'Image 4',
      description: 'This is a description of image 4',
    },
    {
      url: 'https://alkilautos.com/blog/wp-content/uploads/2018/05/16.12.30-Pueblos-m%C3%A1s-lindos-de-Antioquia-Guatape2-1280x720.jpg',
      title: 'Image 5',
      description: 'This is a description of image 5',
    },
    {
      url: 'https://elidebio.com/wp-content/uploads/2020/10/A2-1-1024x640.jpg',
      title: 'Image 6',
      description: 'This is a description of image 6',
    }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((currentIndex + 1) % images.length);
      }
    }, 3000); // 3 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex, isPaused, images]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={image.url} alt={image.title} />
            {index === currentIndex && (
              <div className="carousel-caption">
                <h2>{image.title}</h2>
                <p>{image.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default {Carousel};