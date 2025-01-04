import React from 'react';

const Navbar = () => {
    const links = <>
            <li><a className="border-b-2 border-transparent hover:border-white transition">Home</a></li>
            <li><a className="border-b-2 border-transparent hover:border-white transition">About</a></li>
            <li><a className="border-b-2 border-transparent hover:border-white transition">Work</a></li>
            <li><a className="border-b-2 border-transparent hover:border-white transition">Reviews</a></li>
    </>
    return (
        <div className="navbar fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Abir</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-white">Contact Me</a>
            </div>
        </div>
    );
};

export default Navbar;