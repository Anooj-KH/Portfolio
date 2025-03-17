import React from 'react';

const tools = [
    {
        name: 'Figma',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Figma.svg',
    },
    {
        name: 'VS Code',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
    },
    {
        name: 'GitHub',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
    },
    {
        name: 'Postman',
        logo: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
    },
    {
        name: 'Firebase',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Firebase.svg',
    },
];

export default function Tools() {
    
    return (
        <div className="md:container px-5 py-14">
            <h4 className="subtitle text-2xl font-semibold italic text-center text-indigo-500 font-serif" data-aos="fade-down">
                Top Tools Used
            </h4>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-8">
                {tools.map((tool, index) => (
                    <div
                        key={index}
                        id={tool.name}
                        data-aos="fade-left"
                        data-aos-delay={Math.random() * 400}
                        className={`relative group w-full flex flex-col items-center gap-5 p-5 max-w-sm rounded-md 
                        border-2 border-black-200 transform transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:shadow-4xl`}
                    >
                        <div className="flex items-center justify-center w-full">
                            <img
                                src={tool.logo}
                                alt={tool.name}
                                className="w-12 h-12 object-contain group-hover:scale-125 duration-200"
                            />
                        </div>
                        <h5 className="text-xl font-semibold text-center text-slate-800">{tool.name}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
}
