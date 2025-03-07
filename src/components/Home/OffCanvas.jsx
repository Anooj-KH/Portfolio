import React from 'react';
import { IoArrowBackCircle } from "react-icons/io5";
import Resume from '../../assets/Images/Resume.png';

const OffCanvas = ({ isOpen, toggleOffCanvas }) => {
    return (
        <div className={`fixed inset-0 z-50 bg-transparent backdrop-blur-sm bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className={`fixed top-0 left-0 h-full w-full sm:w-40 md:w-80 lg:w-96 xl:w-150 bg-gray-800 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="flex justify-start item-center p-4 border-b border-gray-700">
                    <button
                        className="text-white"
                        onClick={toggleOffCanvas}
                        title='Back'
                    >
                        <IoArrowBackCircle className='w-10 h-10' />
                    </button>
                    <h2 className="text-lg font-bold ml-8 mt-2 text-white">Download Resume</h2>
                </div>
                <div className="p-4 flex flex-col justify-center items-center">
                    <img
                        src={Resume}
                        alt="Resume"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        data-aos-duration="800"
                        style={{
                            width: "73%",
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", 
                            display: "block", 
                        }}
                    />
                    <a
                        href='https://drive.google.com/uc?export=download&id=10dMWSjmM-iEqQFR1Ut87sknOzIkzyX6l' 
                        download="Resume.pdf"  
                        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Download
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OffCanvas;
