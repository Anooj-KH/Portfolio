import React from 'react'
import Aboutpic from '../../assets/Images/about.jpeg'
import Social from './button'

export default function About() {
    return (
        <>
            <div id="about" className="py-10">
                <h1
                    className="text-4xl font-semibold italic text-center text-indigo-600 font-serif p-4"
                    data-aos="fade-down"
                    data-aos-delay="200"
                >
                    ABOUT ME
                </h1>

                <div className="max-w-screen-xl mx-auto px-4 mt-6">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
                        {/* Image */}
                        <div
                            className="flex-1 w-full"
                            data-aos="flip-up"
                            data-aos-delay="300"
                        >
                            <img
                                src={Aboutpic}
                                alt="Aboutimage"
                                className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 mx-auto"
                            />
                        </div>

                        {/* Text */}
                        <div
                            className="flex-1 w-full text-center p-4 bg dark:bg-gray-800 lg:text-left rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                            data-aos="flip-down"
                            data-aos-delay="300"
                        >
                            <h5 className=" text-white text-sm sm:text-base md:text-lg lg:text-xl indent-4 leading-relaxed font-light font-serif italic mt-4 sm:mt-6">
                                Hi, I’m <span className="font-bold text-indigo-600">Anooj</span> — a passionate front-end and mobile app developer
                                dedicated to crafting seamless, user-centric digital experiences.<br />
                                As a fresher, I bring a strong foundation in HTML, CSS, JavaScript, and React, along with growing expertise in React Native
                                for cross-platform mobile development. I thrive on transforming creative ideas into clean, functional, and responsive designs — both on the web and on mobile devices.<br />
                                I’m driven by curiosity, continuous learning, and the joy of building intuitive interfaces that not only look great but also feel effortless to use.
                                <br /><br />
                                <span className="font-sans font-light">Let’s collaborate and bring meaningful digital experiences to life!</span>
                            </h5>

                            <div className="flex justify-center lg:justify-center mt-5">
                                <Social />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
