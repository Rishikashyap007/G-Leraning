import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      tagline: "RISE ABOVE THE REST",
      title: "Join the league of Great Data Scientists",
      description: "Learn from Data Science professionals who make business decisions everyday.",
      cta: "EXPLORE PROGRAMS",
      image: "https://d1vwxdpzbgdqj.cloudfront.net/home-new-variant/banner-hp-2.jpg"
    },
    {
      tagline: "ACCELERATE YOUR CAREER",
      title: "Study in the United States at 1/3rd the cost",
      description: "Spend a year in the US and get 3 year post-study work visa.",
      cta: "EXPLORE PROGRAMS",
      image: "https://d1vwxdpzbgdqj.cloudfront.net/home-new-variant/banner-hp-3.jpg"
    },
    {
      tagline: "LEARN WITH",
      title: "India's trusted education platform",
      description: "Power ahead in your career with certificate courses & degrees from world class universities.",
      cta: "EXPLORE PROGRAMS",
      image: "https://d1vwxdpzbgdqj.cloudfront.net/home-new-variant/banner-hp-4.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full md:w-[90%] mx-auto overflow-hidden">
      <div className="relative h-[650px] md:h-[500px] bg-gray-100">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-8 py-12">
              <div className="md:w-1/2 space-y-4">
                <p className="text-pink-500 font-semibold">{slide.tagline}</p>
                <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
                <p className="text-gray-600">{slide.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-md hover:bg-blue-700  transition duration-300">
                  {slide.cta}
                </button>
                {index === 2 && (
                  <div className="flex space-x-2 md:space-x-4 mt-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-xl md:text-2xl mr-1">★</span>
                      <span className="font-bold">4.8</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 text-xl md:text-2xl mr-1">★</span>
                      <span className="font-bold">4.81</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 text-xl md:text-2xl mr-1">★</span>
                      <span className="font-bold">4.97</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-500 text-xl md:text-2xl mr-1">★</span>
                      <span className="font-bold">4.7</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img src={slide.image} alt="Slide" className="w-full h-auto rounded-lg shadow-lg object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className=" hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 md:w-3 h-2 md:h-3 rounded-full ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
