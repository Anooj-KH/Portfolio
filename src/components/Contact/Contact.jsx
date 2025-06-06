import { useRef, useState } from "react";
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
    
    const [formData, setFormData] = useState({
        from_name: '',
        user_email: '',
        phone_number: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({
        from_name: '',
        user_email: '',
        phone_number: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        // Name validation
        if (!formData.from_name) {
            formIsValid = false;
            errors.from_name = "Name is required.";
        }

        // Email validation
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
        if (!formData.user_email) {
            formIsValid = false;
            errors.user_email = "Email is required.";
        } else if (!emailPattern.test(formData.user_email)) {
            formIsValid = false;
            errors.user_email = "Please enter a valid email.";
        }

        // Phone number validation
        const phonePattern = /^[0-9]{10}$/; // Basic validation for 10-digit phone number
        if (!formData.phone_number) {
            formIsValid = false;
            errors.phone_number = "Phone number is required.";
        } else if (!phonePattern.test(formData.phone_number)) {
            formIsValid = false;
            errors.phone_number = "Please enter a valid 10-digit phone number.";
        }

        // Message validation
        if (!formData.message) {
            formIsValid = false;
            errors.message = "Message is required.";
        }

        setErrors(errors);
        return formIsValid;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const formDataObj = new FormData(form.current);
            const emailData = {
                from_name: formDataObj.get("from_name"),
                user_email: formDataObj.get("user_email"),
                phone_number: formDataObj.get("phone_number"),
                message: formDataObj.get("message"),
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
                        setFormData({ from_name: '', user_email: '', phone_number: '', message: '' });
                        setErrors({ from_name: '', user_email: '', phone_number: '', message: '' });
                        toast.success("Email sent successfully!");
                    },
                    (error) => {
                        console.log(error.text);
                        toast.error(`Error: ${error.text}`);
                    }
                );
        }
    };

    return (
        <section id="contact" className="mt-12">
            <Toaster />
            <div className="container mx-auto px-5 md:px-10">
                <h2 className="title text-4xl font-semibold italic text-center text-indigo-600 font-serif mb-6" data-aos="fade-down">
                    {Contact.title}
                </h2>
                <h4 className="subtitle text-xl font-semibold italic text-center text-indigo-500 font-serif mb-12" data-aos="fade-down">
                    {Contact.subtitle}
                </h4>
                <div className="flex flex-col md:flex-row gap-12">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        data-aos="fade-up"
                        className="flex-1 flex flex-col gap-5 p-6 bg rounded-lg shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-102"
                    >
                        <input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            className="border border-gray-400 p-4 rounded-lg bg-transparent font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-500 transition-all duration-300 ease-in-out"
                        />
                        {errors.from_name && (
                            <span className="text-red-500 text-sm">{errors.from_name}</span>
                        )}

                        <input
                            type="email"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleInputChange}
                            placeholder="Email Id"
                            className="border border-gray-400 p-4 rounded-lg bg-transparent font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-500 transition-all duration-300 ease-in-out"
                        />
                        {errors.user_email && (
                            <span className="text-red-500 text-sm">{errors.user_email}</span>
                        )}

                        <input
                            type="text"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            className="border border-gray-400 p-4 rounded-lg bg-transparent font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-500 transition-all duration-300 ease-in-out"
                        />
                        {errors.phone_number && (
                            <span className="text-red-500 text-sm">{errors.phone_number}</span>
                        )}

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Message"
                            className="border border-gray-400 p-4 rounded-lg bg-transparent font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-500 h-44 resize-none transition-all duration-300 ease-in-out"
                        />
                        {errors.message && (
                            <span className="text-red-500 text-sm">{errors.message}</span>
                        )}

                        <button
                            type="submit"
                            className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-bold rounded-full transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l"
                        >
                            Send Message
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
            <Footer />
        </section>
    );
};

export default Contact;
