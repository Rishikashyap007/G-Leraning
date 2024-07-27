import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const articles = [
  {
    source: 'THE ECONOMIC TIMES',
    title: 'Job retention confidence of Indian professionals plummets to 62% vs 71% a year ago: Great Learning report',
    date: '24 Jun 2024',
  },
  {
    source: 'THE HINDU',
    title: 'Why students should prepare for the multi-cloud era',
    date: '22 Jun 2024',
  },
  {
    source: 'BusinessLine',
    title: 'Securing the future: Bridging the skill gap in cybersecurity',
    date: '16 Jun 2024',
  },
  {
    source: 'TECHCiRCLE',
    title: "Demand for cybersecurity skills highest from senior pros in India: Great Learning's Hari K Nair",
    date: '11 Jun 2024',
  },
];

const MediaSpotlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col gap-4 items-center justify-center">
      <h2 className="text-center text-purple-600 text-xs sm:text-sm mb-2">FEATURED IN</h2>
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Media Spotlight</h1>
      <div className="relative w-full px-4 md:px-12">
        <div className="relative flex overflow-hidden">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 w-full ${index === currentIndex ? 'block' : 'hidden'}`}
              style={{ width: '100%' }} // Full width of the container
            >
              <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md flex flex-col h-auto">
                <h3 className="text-gray-700 font-semibold mb-2 text-sm md:text-base lg:text-lg truncate">{article.source}</h3>
                <p className="text-gray-800 font-bold mb-2 text-sm md:text-base lg:text-lg truncate">{article.title}</p>
                <p className="text-gray-600 text-xs md:text-sm lg:text-base truncate">{article.date}</p>
                <a href="#" className="text-blue-500 hover:underline mt-auto text-xs md:text-sm lg:text-base">Read Article</a>
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={prevSlide} 
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <FaChevronLeft className="text-gray-600 text-lg md:text-2xl" />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <FaChevronRight className="text-gray-600 text-lg md:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default MediaSpotlight;
