import React from 'react'
import Aboutpic from '../../assets/Images/about.jpeg'
import Social from './button'

export default function About() {
    return (
        <>
            <div id='about'>
                <h1 className="text-4xl font-semibold italic text-center text-indigo-600 font-serif mt-10 p-4" data-aos="fade-down"  data-aos-delay="200">
                    ABOUT ME
                </h1>
                <div className="container mx-auto px-4 mt-10">
                    <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-screen-xl">

                        <div className="flex-1 mb-6 lg:mb-0"
                            data-aos="flip-up"
                            data-aos-delay="300">
                            <img src={Aboutpic} alt="Aboutimage"
                                className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-full rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </div>

                        <div className="flex-1 text-center p-4 bg-white lg:text-left lg:ml-8 bg-[url('./assets/bg/2.jpg')] bg-cover bg-fixed"
                            data-aos="flip-down"
                            data-aos-delay="300">
                            <h5 className="text-lg sm:text-xl md:text-2xl lg:text-2xl indent-40 leading-relaxed font-serif italic mt-10">
                                I’m Anooj, a front-end developer with a passion for creating intuitive and engaging web experiences.
                                As a fresher, I bring a solid foundation in HTML, CSS, and JavaScript, along with a commitment to clean,
                                efficient code. I love transforming ideas into functional, user-friendly designs and am eager to keep growing my skills in the world of web development.
                                <br /><br />
                                <span className=' font-sans font-light'> Let’s build something great together!</span>
                            </h5>
                            <div className='flex justify-center items-center h-full mt-5'>
                                <Social />
                            </div>
                            {/* <div className="3d-modal">
                                <iframe style={{ width: '100%' }} src="https://sketchfab.com/models/92bcda53d5eb4eef8cd842a1b65ff205/embed?api_version=1.8.2&amp;api_id=1_hero-viewer&amp;autostart=1&amp;camera=0&amp;graph_optimizer=1&amp;internal=1&amp;max_texture_size=1024&amp;merge_materials=1&amp;preload=0&amp;scrollwheel=0&amp;sound_enable=0&amp;transparent=1&amp;ui_animations=0&amp;ui_annotations=0&amp;ui_controls=0&amp;ui_fadeout=0&amp;ui_fullscreen=0&amp;ui_help=0&amp;ui_infos=0&amp;ui_inspector=1&amp;ui_settings=0&amp;ui_snapshots=0&amp;ui_stop=0&amp;ui_theatre=0&amp;ui_watermark=0" data-files="1" data-src="https://sketchfab.com/models/92bcda53d5eb4eef8cd842a1b65ff205/embed?autostart=1&amp;camera=0&amp;graph_optimizer=1&amp;internal=1&amp;max_texture_size=1024&amp;merge_materials=1&amp;preload=0&amp;scrollwheel=0&amp;sound_enable=0&amp;transparent=1&amp;ui_animations=0&amp;ui_annotations=0&amp;ui_controls=0&amp;ui_fadeout=0&amp;ui_fullscreen=0&amp;ui_help=0&amp;ui_infos=0&amp;ui_inspector=1&amp;ui_settings=0&amp;ui_snapshots=0&amp;ui_stop=0&amp;ui_theatre=0&amp;ui_watermark=0" width="500" height="300" allowtransparency="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking="" execution-while-out-of-viewport="" execution-while-not-rendered="" web-share="" allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" title="Store 3D viewer">
                                </iframe>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
