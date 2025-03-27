import React from 'react';
import habittracker from '../../assets/Images/Projectimgs/HabitTracker.png'
import ekart from '../../assets/Images/Projectimgs/Ekart.png'
import recipeapp from '../../assets/Images/Projectimgs/Native-receipe-app.png'
import chatbot from '../../assets/Images/Projectimgs/Chatbot.png'
// import weatherapp from '../../assets/Images/Projectimgs/Weather-app.png'
import hostcloud from '../../assets/Images/Projectimgs/Host-cloud.png'
import formvalidation from '../../assets/Images/Projectimgs/Form-validation.png'
import ateam from '../../assets/Images/Projectimgs/Ateam.png'

export const cards = [
    {
        title: 'Habit Tracker',
        src: habittracker,
        ctaText: 'Preview',
        // ctaLink: 'https://ui.aceternity.com/templates',
        ctagit: 'View Code',
        // ctagitLink: 'https://ui.aceternity.com/templates',
        content: () => (
            <p>
                A Habit Tracker helps you stay on top of your goals by allowing you to log daily habits and track your progress over time.
                It can be customized to track any habit, whether it's fitness, reading, or personal development.
                Stay motivated by seeing your consistency and improvements as you go along.
            </p>
        ),
    },
    {
        title: 'E-Commerce Webpage',
        src: ekart,
        ctaText: 'Preview',
        // ctaLink: 'https://ui.aceternity.com/templates',
        ctagit: 'View Code',
        ctagitLink: 'https://github.com/Anooj-KH/Ekart-product-details',
        content: () => (
            <p>
                An E-Commerce Webpage allows users to browse products, make purchases, and manage orders, providing a seamless online shopping experience.
                It includes features like product search, user authentication, and payment processing for a complete shopping experience.
                The site can be optimized for both desktop and mobile users for a smooth and responsive interface.
            </p>
        ),
    },
    {
        title: 'CRUD Operation using Axios',
        src: 'https://assets.aceternity.com/demos/ed-sheeran.jpeg',
        ctaText: 'Preview',
        // ctaLink: 'https://www.edsheeran.com/',
        ctagit: 'View Code',
        // ctagitLink: 'https://ui.aceternity.com/templates',
        content: () => (
            <p>
                This app demonstrates how to perform CRUD (Create, Read, Update, Delete) operations using Axios to interact with a backend API.
                Axios allows you to handle API requests easily with methods for sending and receiving data, as well as error handling.
                It's commonly used in React applications to communicate with RESTful APIs for real-time data updates.
            </p>
        ),
    },
    {
        title: 'Recipe App using React Native',
        src: recipeapp,
        ctaText: 'Preview',
        // ctaLink: 'https://www.theweeknd.com/',
        ctagit: 'View Code',
        ctagitLink: 'https://github.com/Anooj-KH/React-Native-Recipe-Page',
        content: () => (
            <p>
                A Native Recipe App allows users to search for recipes, save favorites, and discover new meal ideas with user-friendly features.
                With an intuitive interface, users can filter recipes by ingredients, difficulty, and preparation time.
                Additionally, users can create their own recipe collections and share them with friends and family.
            </p>
        ),
    },
    {
        title: 'Chatbot using React',
        src: chatbot,
        ctaText: 'Preview',
        // ctaLink: 'https://www.dualipa.com/',
        ctagit: 'View Code',
        // ctagitLink: 'https://ui.aceternity.com/templates',
        content: () => (
            <p>
                A React-based Chatbot can answer questions, provide information, and assist users interactively using conversational AI techniques.
                The chatbot can be designed to answer common queries, offer suggestions, or even provide personalized responses.
                React helps build dynamic and interactive user interfaces, making it ideal for a chatbot that responds to user input in real-time.
            </p>
        ),
    },
    {
        title: 'Weather Application',
        // src: 'https://assets.aceternity.com/demos/adele.jpeg',
        ctaText: 'Preview',
        // ctaLink: 'https://www.adele.com/',
        ctagit: 'View Code',
        // ctagitLink: 'https://ui.aceternity.com/templates',
        content: () => (
            <p>
                A Weather Application provides real-time weather updates, forecasts, and weather-related information to help users plan their day.
                It pulls data from external APIs, offering accurate temperature, humidity, wind speed, and condition forecasts.
                The app may also include features like weather maps, location-based searches, and the ability to save favorite locations.
            </p>
        ),
    },
    {
        title: 'Host Cloud Website',
        src: hostcloud,
        ctaText: 'Preview',
        // ctaLink: 'https://www.billieeilish.com/',
        ctagit: 'View Code',
        ctagitLink: 'https://github.com/Anooj-KH/Host-Cloud',
        content: () => (
            <p>
                A Host Cloud Website offers cloud-based hosting services for your website, ensuring fast load times and reliable performance.
                Cloud hosting is scalable, allowing your website to handle increased traffic and provide better uptime without worrying about server management.
                It's the ideal choice for websites looking to maintain flexibility and high performance, regardless of the audience size.
            </p>
        ),
    },
    {
        title: 'Form Validation in JavaScript',
        src: formvalidation,
        ctaText: 'Preview',
        ctaLink: 'https://form-validation-flax-chi.vercel.app/',
        ctagit: 'View Code',
        ctagitLink: 'https://github.com/Anooj-KH/form-validation',
        content: () => (
            <p>
                Form Validation using JavaScript ensures that user inputs meet specific requirements before submitting a form, improving data accuracy.
                With JavaScript, you can validate fields like email addresses, phone numbers, and required text fields on the client side before sending data to the server.
                This enhances user experience and prevents errors in form submissions by providing real-time feedback.
            </p>
        ),
    },
    {
        title: 'Ateam Website',
        src: ateam,
        ctaText: 'Preview',
        ctaLink: 'https://ateam-website-beige.vercel.app/',
        ctagit: 'View Code',
        ctagitLink: 'https://github.com/Anooj-KH/Ateam-website',
        content: () => (
            <p>
                An Ateam Website showcases the power of teamwork and collaboration, featuring tools, resources, and profiles for each team member.
                It can include task management features, project timelines, and communication tools to help team members stay organized and on track.
                With a clear display of individual and group responsibilities, it fosters better coordination and productivity.
            </p>
        ),
    },
];
