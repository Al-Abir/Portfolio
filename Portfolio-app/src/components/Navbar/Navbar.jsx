import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const lastActiveLink = useRef();
    const activeBox = useRef()
    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Reviews',
          link: '#reviews',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];
    return (
        <header className="fixed top-0 left-0 w-full flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        

            <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]'>
                <h1 className='text-2xl'>
                    Abir
                </h1>

                <div className='relative md:justify-self-center'>
                    <button className='menu-btn md:hidden' onClick={()=> setNavOpen((prev)=>!prev)}>
                    <span className="material-symbols-rounded">{navOpen ? 'close':'menu'}</span>

                    </button>
                    <div className={`navbar ${navOpen ? 'active' : ''}`}>
                    {navItems.map(({label,link,className,ref},key)=>(
                        <a
                        href={link}
                        key={key}
                        ref={ref}
                        className={className}
                        onClick={null}>
                        {label}
                        </a>
                    ))}

                    </div>
                    
                    <div className="active-box"
                    ref={activeBox}>

                    </div>

                </div>
                <a href='#contact' className='btn btn-secondary max-md:hidden md:justify-self-end'> Contact Me</a>
            </div>
            

        </header>
    );
};

Navbar.PropTypes ={
    navOpen: PropTypes.bool.isRequired
}
export default Navbar;
