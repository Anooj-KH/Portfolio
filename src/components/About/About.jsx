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
                            className="flex-1 w-full text-center p-4 bg-white bg-[url('./assets/bg/2.jpg')] bg-cover bg-fixed lg:text-left"
                            data-aos="flip-down"
                            data-aos-delay="300"
                        >
                            <h5 className="text-lg sm:text-xl md:text-2xl lg:text-2xl indent-40 leading-relaxed font-serif italic mt-10">
                                I’m Anooj, a front-end developer with a passion for creating intuitive and engaging web experiences.
                                As a fresher, I bring a solid foundation in HTML, CSS, and JavaScript, along with a commitment to clean,
                                efficient code. I love transforming ideas into functional, user-friendly designs and am eager to keep growing my skills in the world of web development.
                                <br /><br />
                                <span className=' font-sans font-light'> Let’s build something great together!</span>
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
