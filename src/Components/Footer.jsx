import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
export const Footer = () => {
    return (
        <div>

            <footer className="bg-sky-500 text-white py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* About Us */}
                        <div className='ml-8'>
                            <h3 className="text-2xl font-semibold mb-4 ">About Us</h3>
                            <p className="text-gray-300 text-base font-bold">
                                Our platform provides top-notch education and guidance with industry-leading instructors. Learn and grow with us to achieve your dreams.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className='ml-8'>
                            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-base text-gray-300">
                                <li>
                                    <a href="#courses" className=" font-bold hover:text-gray-200 transition duration-300">Courses</a>
                                </li>
                                <li>
                                    <a href="#about" className="hover:text-gray-200 font-bold transition duration-300">About</a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-gray-200 font-bold transition duration-300">Contact</a>
                                </li>
                                <li>
                                    <a href="#faq" className="hover:text-gray-200 font-bold transition duration-300">FAQs</a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className='ml-8'>
                            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
                            <p className="text-sm text-gray-300 font-bold">1234 Dinesh st, Vellore, India</p>
                            <p className="text-sm text-gray-300 mt-2 font-bold">Email: Balajiking435@gmail.com</p>
                            <p className="text-sm text-gray-300 mt-2 font-bold">Phone:+91 8825549901</p>
                        </div>

                        {/* Follow Us */}
                        <div className='ml-8'>
                            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                            <div className="mt-6 flex p-2 space-x-8 ">
                                <a href="https://www.facebook.com/share/1UpWe3kjPt/" className="text-black ">
                                    <FaFacebookF className=" text-4xl bg-white hover:bg-black  hover:text-white p-1  " />
                                </a>
                                <a href="https://www.linkedin.com/in/balaji-m-8a3765288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-black">
                                    <FaTwitter className=" text-4xl bg-white hover:bg-black  hover:text-white p-1  " />
                                </a>
                                <a href="https://www.instagram.com/rc_mello_boy/profilecard/?igsh=aXV5c3lmenUyN3lx" className="text-black">
                                    <FaInstagram className=" text-4xl bg-white hover:bg-black  hover:text-white p-1  " />
                                </a>
                                <a href="https://www.linkedin.com/in/balaji-m-8a3765288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-black">
                                    <FaLinkedinIn className=" text-4xl bg-white hover:bg-black  hover:text-white p-1  " />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white mt-10 pt-4 text-center text-sm text-black">
                        © {new Date().getFullYear()} VITEE. All Rights Reserved.
                    </div>
                </div>
            </footer>

        </div>
    )
}
