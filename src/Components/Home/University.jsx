import React from 'react';

const universities = [
  {
    name: "Stanford Business",
    image: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/stanford-1.png", // Replace with actual path or URL
  },
  {
    name: "Texas McCombs",
    image: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/texas.png",
  },
  {
    name: "Great Lakes",
    image: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/great-lakes.jpg",
  },
  {
    name: "Deakin University",
    image: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/deakin.jpg",
  },
  {
    name: "Northwestern",
    image: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/northwestern.png",
  },
  {
    name: "MIT IDSS",
    image: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/mit.png",
  },
  {
    name: "The University of Arizona",
    image: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/arizona.jpg",
  },
  {
    name: "Oklahoma City University",
    image: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/oklahama.jpg",
  },
  {
    name: "Walsh College",
    image: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/walsh.jpg",
  },
];

const UniversityCertificates = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Earn Certificates From
          <br />
          <span className="text-indigo-600">Prestigious universities</span>
        </h2>
        <p className="mt-4 text-gray-600">
          We partner with world-renowned universities so you earn certificates
          recognized by organizations across the globe.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
          View All Universities
        </button>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {universities.map((university, index) => (
          <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={university.image}
              alt={university.name}
              className="max-h-12"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniversityCertificates;
