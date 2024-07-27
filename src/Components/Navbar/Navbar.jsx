import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    // { name: 'Explore Programs', href: '#', hasDropdown: true },
    // { name: 'Study Abroad', href: '#', hasDropdown: true },
    { name: 'Career Support', href: '#' },
    { name: 'Success Stories', href: '#' },
    { name: 'Enterprise', href: '#' },
    // { name: 'For Recruiters', href: '#' },
    { name: 'More', href: '#', hasDropdown: true },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              {/* <img className="h-8 w-auto" src="/api/placeholder/32/32" alt="Great Learning Logo" /> */}
              <span className="ml-2 text-blue-600 font-bold text-xl">Great Learning</span>
              {/* <span className="ml-2 text-blue-600 font-bold text-xl border-l-2 border-blue-600 pl-2">10 YEARS</span> */}
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out flex items-center
                      ${item.name === 'Explore Programs' ? 'bg-blue-600 text-white hover:bg-blue-700' : ''}`}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition duration-150 ease-in-out">
              LOGIN
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="text-blue-600 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium"
            >
              LOGIN
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;