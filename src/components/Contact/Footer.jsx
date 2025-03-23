import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 
import { FaReact } from 'react-icons/fa'; 
import logo from "../../assets/Images/AK.png";

export default function Footer() {
    const currentYear = new Date().getFullYear(); 

    return (
        <footer className="bg-gray-900 text-white mt-5 min-h-[300px] py-12">
            <div className="container mx-auto px-4 h-full flex flex-col justify-between">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                    <div className="animate__animated animate__fadeIn animate__delay-1s">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-20 md:h-30 transition-transform transform hover:scale-150"
                        />
                    </div>

                    <div className="text-center animate__animated animate__fadeIn animate__delay-1s">
                        <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 
                            transform transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
                            ANOOJ KH
                        </p>
                        <p className="text-sm opacity-80 mt-2">Web Developer | Passionate about coding</p>
                    </div>

                    <div className="flex space-x-4 md:space-x-6 animate__animated animate__fadeIn animate__delay-1s">
                        <a href="https://github.com/Anooj-KH" target="_blank" rel="noopener noreferrer" 
                           className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-125">
                            <FaGithub size={30} className="md:w-10 md:h-10" />
                        </a>
                        <a href="https://www.linkedin.com/in/anooj-kh-25122oo2/" target="_blank" rel="noopener noreferrer" 
                           className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-125">
                            <FaLinkedin size={30} className="md:w-10 md:h-10" />
                        </a>
                        <a href="mailto:anoojkh2002@gmail.com" target="_blank" rel="noopener noreferrer" 
                           className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-125">
                            <FaEnvelope size={30} className="md:w-10 md:h-10" />
                        </a>
                    </div>
                </div>

                <div className="text-sm text-gray-400 mt-4 text-center animate__animated animate__fadeIn animate__delay-1s pb-14">
                    <p>&copy; {currentYear} Anooj KH. All Rights Reserved.</p> 
                    <p className="mt-2">Built with React & Tailwind CSS <FaReact className="inline-block text-green-500 ml-1" /></p>
                </div>
            </div>
        </footer>
    );
}
