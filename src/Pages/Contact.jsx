import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally handle form submission logic (API call, email service, etc.)

        // Simulate a success submission:
        setStatus('Thank you for reaching out! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="bg-[url('/src/assets/contact.jpg')]  bg-cover bg-center from-blue-100 to-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800" data-aos="fade-up" data-aos-duration="500">Contact Us</h2>
                <p className="mt-4 text-center text-lg text-gray-600" data-aos="fade-up" data-aos-duration="500">
                    We’d love to hear from you! Reach out with any questions or feedback.
                </p>

                {/* Contact Form */}
                <div className="mt-8 max-w-lg mx-auto bg-white bg-opacity-50 p-8  shadow-xl" data-aos="fade-up" data-aos-duration="500">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg font-semibold text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                required
                                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full p-3 bg-sky-500 text-white font-semibold  shadow-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                    {/* Form Status */}
                    {status && (
                        <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-md">
                            <p>{status}</p>
                        </div>
                    )}
                </div>

                {/* Contact Info Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    <div className="bg-white p-8 rounded-lg shadow-xl bg-opacity-50" data-aos="fade-up" data-aos-duration="500">
                        <h3 className="text-2xl font-semibold text-gray-800 flex justify-center">Our Office</h3>

                        <p className="mt-4 text-gray-600  flex  items-center justify-center">
                            123 Dinesh St, Vellore, India
                        </p>
                        <p className="mt-2 text-gray-600  flex  items-center justify-center">Mon - Fri: 9 AM - 5 PM</p>
                        <p className="mt-2 text-gray-600  flex  items-center justify-center ">Phone: +91 8825549901</p>
                        <p className="mt-2 text-gray-600  flex  items-center justify-center">Email: balajiking435@gmail.com</p>

                    </div>

                    {/* Social Media Links */}
                    <div className="bg-white p-8 rounded-lg shadow-xl bg-opacity-50" data-aos="fade-up" data-aos-duration="500">
                        <h3 className="text-2xl font-semibold text-gray-800   flex justify-center">Follow Us</h3>
                        <div className="mt-6 flex p-2 space-x-8 items-center justify-center">
                            <a href="https://www.facebook.com/share/1UpWe3kjPt/" className="text-white ">
                                <FaFacebookF className=" text-4xl   bg-sky-500  hover:bg-black p-1 rounded-lg " />
                            </a>
                            <a href="https://www.linkedin.com/in/balaji-m-8a3765288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white">
                                <FaTwitter className="text-4xl   bg-sky-500  hover:bg-black p-1 rounded-lg" />
                            </a>
                            <a href="https://www.instagram.com/rc_mello_boy/profilecard/?igsh=aXV5c3lmenUyN3lx" className="text-white">
                                <FaInstagram className="text-4xl   bg-sky-500  hover:bg-black p-1 rounded-lg" />
                            </a>
                            <a href="https://www.linkedin.com/in/balaji-m-8a3765288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white">
                                <FaLinkedinIn className=" text-4xl   bg-sky-500  hover:bg-black p-1 rounded-lg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

