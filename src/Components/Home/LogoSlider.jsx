import React from 'react';
import './Logoslider.css'; // Import the CSS file for styling

const logos = [
  // Your logos data
  { name: 'IBM', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/ibm.png' },
  { name: 'Microsoft', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/microsoft.png' },
  { name: 'Intel', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/intel.png' },
  { name: 'Amazon', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/amazon.png' },
  { name: 'Oracle', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/oracle.png' },
  { name: 'IBM', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/ibm.png' },
  { name: 'Microsoft', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/microsoft.png' },
  { name: 'Intel', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/intel.png' },
  { name: 'Amazon', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/amazon.png' },
  { name: 'Oracle', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/oracle.png' },
  { name: 'IBM', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/ibm.png' },
  { name: 'Microsoft', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/microsoft.png' },
  { name: 'Intel', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/intel.png' },
  { name: 'Amazon', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/amazon.png' },
  { name: 'Oracle', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/oracle.png' },
  { name: 'IBM', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/ibm.png' },
  { name: 'Microsoft', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/microsoft.png' },
  { name: 'Intel', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/intel.png' },
  { name: 'Amazon', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/amazon.png' },
  { name: 'Oracle', src: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/company/oracle.png' },
  // Add more logos as needed
];

const LogoSlider = () => {
  return (
    <div className="relative  mx-auto md:w-[90%] md:h-[300px] max-w-6xl flex flex-col gap-4 justify-center items-center overflow-hidden py-8">
      <h2 className="text-2xl font-bold text-center mb-6 md:text-3xl">
        Join Great Learning graduates at top-tier companies
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="logo-slider">
          <div className="logo-slider-track">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="logo-slide"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
