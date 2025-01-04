import React from 'react';
const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 w-full flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        

            <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6
            md:grid md:grid-cols-[1fr,3fr,1fr]'>
                <h1 className='text-2xl'>
                    Abir
                </h1>

                <div className='relative'>
                    <button className='' onClick={null}>
                    <span className="material-symbols-rounded">menu</span>

                    </button>
                    Navbar

                </div>
                <a href='#contact' className=''> Contact Me</a>
            </div>

        </header>
    );
};

export default Navbar;
