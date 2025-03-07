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
                name: "CSS", para: "Turning plain HTML into a beautifully styled masterpiece with the magic of CSS!",
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
                name: "React js", para: "Build powerful, component-based user interfaces with React’s unmatched flexibility!",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", progress: 90
            },
            {
                name: "React Native", para: " Develop cross-platform apps effortlessly with React Native’s native performance and seamless integration",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", progress: 70
            },
            {
                name: "Python", para: "Versatile, readable, and powerful – Python’s the go-to language for everything from web to data science!",
                logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", progress: 70
            },

        ],
    },
};

export default function Skills() {
    const { skills_content } = content.skills;

    return (
        <section id="skills">
            <div className="md:container px-5 py-14 lg:ml-18">
                <h2 className="title text-4xl font-semibold italic text-center text-indigo-600 font-serif mt-5 p-4" data-aos="fade-down">
                    {content.skills.title}
                </h2>
                <h4 className="subtitle text-2xl font-semibold italic text-center text-indigo-500 font-serif" data-aos="fade-down">
                    {content.skills.subtitle}
                </h4>
                <br />
                <div className="container mx-auto px-4 mt-10 ">
                    <div className="flex flex-wrap gap-7 justify-center">
                        {skills_content.map((skill, i) => (
                            <SkillCard key={i} skill={skill} />
                        ))}
                    </div>
                </div>
                <Tools />
            </div>

        </section>
    );
}
