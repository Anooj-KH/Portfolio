import { createElement, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import contactimg from '../../assets/Images/contact-img.svg';
import Footer from "./Footer";

const Contact = () => {

    const content = {
        Contact: {
            title: "Contact Me",
            subtitle: "GET IN TOUCH",
        },
    };

    const { Contact } = content;
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const emailData = {
            from_name: formData.get("from_name"),
            user_email: formData.get("user_email"),
            message: formData.get("message"),
            to_name: 'ANOOJ KH',
        };

        emailjs
            .send(
                'service_qh1fe7r', 'template_qoq9lx4', emailData, 'QZA0Py0AXMjRDJPIi'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    form.current.reset();
                    toast.success("Email sent successfully!");
                },
                (error) => {
                    console.log(error.text);
                    toast.error(`Error: ${error.text}`);
                }
            );
    };

    return (
        <section  id="contact" className="mt-12">
            <Toaster />
            <div className="container mx-auto px-5 md:px-10">
                <h2 className="title text-4xl font-semibold italic text-center text-indigo-600 font-serif mb-6" data-aos="fade-down">
                    {Contact.title}
                </h2>
                <h4 className="subtitle text-xl font-semibold italic text-center text-indigo-500 font-serif mb-12" data-aos="fade-down">
                    {Contact.subtitle}
                </h4>
                <div className="flex flex-col md:flex-row gap-12 ">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        data-aos="fade-up"
                        className="flex-1 flex flex-col gap-5 p-6 bg rounded-lg shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-102"
                    >
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Name"
                            required
                            className="border border-gray-400 p-4 rounded-lg bg-transparent font-bold focus:outline-none focus:ring-2 focus:ring-blue-500  hover:border-gray-500 transition-all duration-300 ease-in-out"
                        />
                        <input
                            type="email"
                            name="user_email"
                            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                            placeholder="Email Id"
                            required
                            className="border border-gray-400 p-4 rounded-lg bg-transparent font-bold focus:outline-none focus:ring-2 focus:ring-blue-500  hover:border-gray-500 transition-all duration-300 ease-in-out"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            className="border border-gray-400 p-4 rounded-lg bg-transparent font-bold focus:outline-none focus:ring-2 focus:ring-blue-500  hover:border-gray-500 h-44 resize-none transition-all duration-300 ease-in-out"
                            required
                        ></textarea>
 
                        <button
                            type="submit"
                            className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white 
                                      font-bold rounded-full transform transition-all duration-300 ease-in-out hover:scale-105
                                      hover:shadow-lg hover:bg-gradient-to-l"
                        >
                            Submit
                        </button>
                    </form>

                    <div className="flex-1 flex flex-col gap-8">
                        <img
                            src={contactimg}
                            alt="Contact"
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            data-aos-duration="800"
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default Contact;
