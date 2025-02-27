import React from 'react';
import { ButtonOutline, ButtonPrimary } from '../Button/Button';
import abir from "../../images/abir2.png";

const Home = () => {
    return (
        <div className="hero bg-base-200 min-h-screen "> {/* Adjust padding */}
            <div className="hero-content flex flex-col-reverse lg:flex-row-reverse gap  lg:gap-12"> {/* Add smaller gaps */}
                {/* Image Section */}
                <div className="  lg:order-1 order-1 lg:block">
                    <figure
                        className="w-full lg:max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-sky-400/40 to-transparent rounded-[60px] overflow-hidden"
                    >
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            width={356} 
                            height={200} 
                                   
                        />
                    </figure>
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-4 lg:gap-6 lg:order-2">
                    {/* Profile Section */}
                    <div className="flex items-center gap-3 p-4 bg-black text-white rounded-lg">
                        {/* Profile Image */}
                        <img
                            src={abir}
                            alt="Profile Picture"
                            className="w-12 h-12 rounded-full"
                        />

                        {/* Status */}
                        <div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <span className="w-2.5 h-2.5 bg-green-500 rounded-full hover:scale-105"></span>
                                <span>Available for work</span>
                            </div>
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="headLine-1 text-2xl font-bold max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-3 sm:mt-4 lg:mb-6">
                        Building Scalable Modern Websites for the Future
                    </h1>

                    {/* Button */}
                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            label="Download CV"
                            icon="download"
                            href="https://drive.google.com/file/d/1kBYl3xtH8FWW3EXQqvpJjsqYgxZ-Q6R4/view?usp=drive_link"
                        />
                        <ButtonOutline
                            href="#about"
                            label="Scroll down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
