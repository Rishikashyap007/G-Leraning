import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    image: 'https://embed-ssl.wistia.com/deliveries/5439761934608baca3d4b1413f44e051.jpg',
    text: 'This e-learning platform is amazing! I learned so much and the courses are very well-structured.',
    name: 'Ritu Banerjee',
    position: 'SDET , Trellix',
  },
  {
    image: 'https://embed-ssl.wistia.com/deliveries/2b209fb5edb723c5baa48ba0ec780e2d.jpg',
    text: 'The instructors are very knowledgeable and the content is very relevant to the industry.',
    name: 'Vijay Shankar',
    position: 'Business Analyst,Amazon',
  },
  // Add more testimonials as needed
];

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">What Our Learners Say</h2>
        <div className="relative flex flex-col md:flex-row items-center justify-center">
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 md:left-4 left-2 text-3xl md:text-4xl text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out z-10"
            aria-label="Previous Testimonial"
          >
            <FaChevronLeft />
          </button>
          <div className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-lg overflow-hidden p-6 md:p-8 mx-auto max-w-4xl h-auto md:h-[500px] md:max-w-[90%]">
            <img
              className="w-full md:w-1/2 h-full object-cover border-4 border-gray-200"
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
            />
            <div className="md:w-1/2 p-4 text-center md:text-left flex flex-col justify-center">
              <p className="text-gray-700 text-lg mb-4">{testimonials[currentIndex].text}</p>
              <p className="text-gray-900 font-bold text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-gray-600 text-sm">{testimonials[currentIndex].position}</p>
            </div>
          </div>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 md:right-4 right-2 text-3xl md:text-4xl text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out z-10"
            aria-label="Next Testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
