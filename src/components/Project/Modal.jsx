import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CloseIcon from './CloseIcon';

const Modal = ({ active, setActive, ref, id }) => {
    if (!active || typeof active !== 'object') return null;

    useEffect(() => {
        const handleScroll = () => {
            setActive(null);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setActive]);

    return (
        <AnimatePresence>
            <div className="fixed inset-0 grid place-items-center z-[100]">
                <motion.button
                    key={`button-${active.title}-${id}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                    className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                    onClick={() => setActive(null)}
                >
                    <CloseIcon />
                </motion.button>
                <motion.div
                    layoutId={`card-${active.title}-${id}`}
                    ref={ref}
                    className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 sm:rounded-3xl overflow-hidden"
                >
                    <motion.div layoutId={`image-${active.title}-${id}`}>
                        <img
                            src={active.src}
                            alt={active.title}
                            className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                        />
                    </motion.div>

                    <div>
                        <div className="flex justify-between items-start p-4">
                            <div>
                                <motion.h3
                                    layoutId={`title-${active.title}-${id}`}
                                    className="font-medium text-black text-lg"
                                >
                                    {active.title}
                                </motion.h3>

                            </div>
                            <div className="flex space-x-6">
                                <motion.a
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    href={active.ctagitLink}
                                    target="_blank"
                                    className="px-4 py-3 text-sm rounded-full font-bold bg-black text-white"
                                >
                                    {active.ctagit}
                                </motion.a>

                                <motion.a
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    href={active.ctaLink}
                                    target="_blank"
                                    className="px-4 py-3 text-sm rounded-full font-bold bg-black text-white"
                                >
                                    {active.ctaText}
                                </motion.a>
                            </div>
                        </div>
                        <div className="pt-4 relative px-4">
                            <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-black text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto"
                            >
                                {typeof active.content === 'function'
                                    ? active.content()
                                    : active.content}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default Modal;
