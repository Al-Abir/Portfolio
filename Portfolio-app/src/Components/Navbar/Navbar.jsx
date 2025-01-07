import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Menu is open by default
  const [isFirstLoad, setIsFirstLoad] = useState(true); // Track if it's the first load

  const toggleMenu = () => {
    if (isFirstLoad) {
      setIsFirstLoad(false); // Disable first load mode on first interaction
    }
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  const link = (
    <>
      <li className="text-xl">
        <a href="#">Home</a>
      </li>
      <li className="text-xl">
        <a href="#about">About</a>
      </li>
      <li className="text-xl">
        <a href="#work">Work</a>
      </li>
      <li className="text-xl">
        <a href="#reviews">Reviews</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleMenu}
          >
            {!isFirstLoad && isMenuOpen ? (
              // Show "X" icon only after the first interaction
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            )}
          </div>
          
          {/* Show the menu items */}
          {isMenuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          )}
        </div>
        <a className="btn btn-ghost text-xl">Abir</a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>
      
      <div className="navbar-end">
      <a className="btn btn-primary" href="#contact">Contact Me</a>
      
      
      </div>
    </div>
  );
};

export default Navbar;
