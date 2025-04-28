import React, { useEffect, useState } from 'react';
import Heropic from '../../assets/Images/herosection.png';
import { FaDownload } from "react-icons/fa6";
import OffCanvas from './OffCanvas'

export default function Hero() {
    const hero = {
        firstName: "ANOOJ",
        lastName: "KH",
        btnText: "Hire ME",
        image: Heropic,
    };
    const titles = [
        "Web Developer",
        "MObile App Developer",
        "UI/UX Designer",
        "Front End Developer",
        "React Developer",
        "React Native Developer",
        "JavaScript Enthusiast"
    ];


    const [currentTitle, setCurrentTitle] = useState(titles[0]);
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

    useEffect(() => {
        let titleIndex = 0;

        const titleInterval = setInterval(() => {
            titleIndex = (titleIndex + 1) % titles.length;
            setCurrentTitle(titles[titleIndex]);
        }, 3000);

        return () => clearInterval(titleInterval);
    }, []);

    const toggleOffCanvas = () => {
        setIsOffCanvasOpen(!isOffCanvasOpen);
    };

    return (
        <>
            <section id="home" className="flex items-center justify-center h-screen">
                <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-8 w-full max-w-screen-xl">

                    <div
                        className="flex-1 text-center p-4"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4 animate-pulse font-serif">
                            Hello Devs !
                        </h1>
                        <br />
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 font-serif ">
                            I'm <span className='transform transition-all duration-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500'>
                                {hero.firstName} {hero.lastName}</span>
                        </h1>

                        <p className="mt-2 text-xl sm:text-4xl font-bold text-blue-700 max-w-xl mx-auto leading-relaxed"
                            data-aos="fade-up"
                            data-aos-delay="800">
                            {currentTitle}
                        </p>
                        <p
                            className="mt-8 text-base sm:text-lg md:text-xl text-gray-900 indent-10 max-w-3xl mx-auto font-light
                             leading-loose text-justify tracking-wide "
                            style={{ wordSpacing: "0.5em", lineHeight: "1.7em" }}
                        >
                            I’m a web and mobile app developer passionate about creating intuitive, visually appealing digital experiences.
                            I help brands bring their ideas to life through user-friendly, impactful designs and smooth functionality.
                            Committed to continuous learning and growth, I’m always exploring new tools and technologies to build innovative,
                            high-quality solutions.
                        </p>

                        <div className="flex justify-center">
                            <button
                                className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white 
                                           font-semibold rounded-full transform transition-all duration-300 ease-in-out hover:scale-105
                                           hover:rotate-3 hover:shadow-lg hover:bg-gradient-to-l"

                                data-aos="zoom-in"
                                data-aos-delay="500"
                                onClick={() => {

                                    const contactSection = document.getElementById("contact");
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                            >
                                {hero.btnText}
                            </button>

                            <button
                                className="mt-6 px-8 py-3 ml-5 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white 
                                           font-semibold rounded-full transform transition-all duration-300 ease-in-out hover:scale-105 
                                           hover:shadow-lg hover:bg-gradient-to-l flex items-center space-x-2"

                                data-aos="zoom-in"
                                data-aos-delay="500"
                                onClick={toggleOffCanvas}
                            >
                                Resume<FaDownload className="ml-2" />
                            </button>

                        </div>
                    </div>

                    {/* Image Section */}
                    <div
                        className="flex-1 p-4"
                        data-aos="slide-left"
                        data-aos-delay="200"
                    >
                        <img src={hero.image} alt="Hero" className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full rounded-lg" />
                    </div>
                </div>
            </section>

            <OffCanvas isOpen={isOffCanvasOpen} toggleOffCanvas={toggleOffCanvas} />
        </>
    );
}
