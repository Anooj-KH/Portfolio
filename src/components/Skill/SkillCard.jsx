import React,{ useState, useEffect } from "react";


export default function SkillCard({ skill }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {

                        const timer = setInterval(() => {
                            if (progress < skill.progress) {
                                setProgress((prev) => Math.min(prev + 1, skill.progress));
                            }
                        }, 20); // Adjust speed here

                        return () => clearInterval(timer);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById(skill.name);
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, [skill.progress, progress]);

    return (
        <div
            id={skill.name}
            data-aos="fade-up"
            data-aos-delay={Math.random() * 400}
            className="bg-white sm:cursor-pointer relative group w-full flex flex-col items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 transform transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:bg-slate-100 hover:shadow-4xl"
        >
            <div className="flex items-center gap-5">
                <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 group-hover:scale-125 duration-200"
                />
                <div>
                    <h6 className="font-bold">{skill.name}</h6>
                    <p className="italic mt-2">{skill.para}</p>
                </div>
            </div>

            <div className="w-full">
                <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                        <div className="w-full bg-gray-200 rounded-full">
                            <div
                                className="bg-teal-500 text-xs font-medium leading-none py-1 text-center text-teal-100 rounded-full transition-all duration-1000 ease-in-out"
                                style={{ width: `${progress}%` }}
                            >
                                {progress}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
