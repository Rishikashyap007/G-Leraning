import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Programs",
      links: ["Data Science", "Web Development", "AI & Machine Learning", "Cloud Computing", "Digital Marketing", "Cybersecurity"]
    },
    {
      title: "Resources",
      links: ["Blog", "Career Support", "Success Stories", "Learning Paths", "Webinars", "Scholarships"]
    },
    {
      title: "Company",
      links: ["About Us", "Contact Us", "Careers", "Partners", "Press", "Terms of Service", "Privacy Policy"]
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaYoutube, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            {/* <img src="/api/placeholder/150/50" alt="Great Learning Logo" className="h-8 w-auto mb-4" /> */}
            <p className='text-blue-600 font-bold text-lg'> Great Learning </p>
            <p className="text-gray-400 mb-4">
              Empowering professionals and students with industry-relevant programs to achieve their career goals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-400 hover:text-white transition duration-300">
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-4 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            >
              Subscribe
              <MdEmail className="ml-2" />
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Great Learning. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm mr-4">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;