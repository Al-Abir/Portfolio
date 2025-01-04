import React from 'react';
import img1 from '../../../src/Image/abir.png'
const Hero = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <div className="max-w-4xl flex flex-col md:flex-row items-center gap-8 px-4">
                {/* Left Section */}
                <div>
               
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Building Scalable <br /> Modern Websites <br /> for the Future
                    </h1>
                    <div className="flex gap-4 mt-4">
                        <a
                            href="#download"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow-md font-medium"
                        >
                            Download CV
                        </a>
                        <a
                            href="#scroll"
                            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-md shadow-md font-medium"
                        >
                            Scroll down
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div className=" overflow-hidden border-4 border-green-500 w-64 h-64">

                    <img
                        src={img1}
                        width={656}
                        height={800}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;