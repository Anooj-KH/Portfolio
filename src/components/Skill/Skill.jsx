import React from 'react';
import SkillCard from './SkillCard';
import Tools from './Tools';

// Content
const content = {
    skills: {
        title: "Skills",
        subtitle: "MY TOP SKILLS",      
        skills_content: [
            {
                name: "HTML", para: "The foundation of every great website, building the web one tag at a time!",
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", progress: 90
            },
            {
                name: "CSS", para: "Turning plain HTML into a stylish masterpiece with CSS!",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", progress: 90
            }, 
            {
                name: "Bootstrap", para: "Speed up your development with sleek, responsive, and customizable designs!",
                logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg", progress: 90
            },
            {
                name: "Tailwind CSS", para: "Utility-first CSS that empowers you to design directly in your markup!",
                logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", progress: 75
            },
            {
                name: "JavaScript", para: "Add interactivity and dynamic content, making websites come alive!",
                logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", progress: 80
            },
            {
                name: "JQuery", para: "Simplifying JavaScript and making DOM manipulation a breeze!",
                logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/JQuery_icon.svg", progress: 90
            },
            {
                name: "React js", para: "Build powerful, component-based user interfaces with React's unmatched flexibility!",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", progress: 90
            },
            {
                name: "React Native", para: " Develop cross-platform apps effortlessly with React Native's native performance and seamless integration",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", progress: 60
            },
            {
                name: "Python", para: "Versatile, readable, and powerful – Python's the go-to language for everything from web to data science!",
                logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", progress: 70
            },

        ],
    },
};

export default function Skills() {
    const { skills_content } = content.skills;

    return (
        <section id="skills" className="w-full min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 py-16 max-w-7xl">
                <h2 className="title text-3xl md:text-4xl font-semibold italic text-center text-indigo-600 font-serif mb-4" data-aos="fade-down">
                    {content.skills.title}
                </h2>
                <h4 className="subtitle text-xl md:text-2xl font-semibold italic text-center text-indigo-500 font-serif mb-8" data-aos="fade-down">
                    {content.skills.subtitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {skills_content.map((skill, i) => (
                        <SkillCard key={i} skill={skill} />
                    ))}
                </div>
                <div className="mt-16">
                    <Tools />
                </div>
            </div>
        </section>
    );
}
