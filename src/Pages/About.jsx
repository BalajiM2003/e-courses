import React from 'react';
import { FaCheckCircle, FaRegLightbulb } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const About = () => {
    const navigate = useNavigate();
    const teamMembers = [
        {
            id: 1,
            name: 'BALAJI M',
            role: 'REACT DEVELOPER',
            image: './src/assets/BALAJI.png',
        },
        {
            id: 2,
            name: ' DINESH KUMAR P',
            role: 'BACKEND DEVELOPER',
            image: './src/assets/dinesh.png',
        },
        {
            id: 3,
            name: 'DIVAKAR S',
            role: 'DEVOPS ENGINEER',
            image: './src/assets/diva.jpeg',
        },
        {
            id: 4,
            name: 'SANGEETH E',
            role: 'DEVOPS ENGINEER',
            image: './src/assets/sangee.jpeg',
        },
        {
            id: 5,
            name: 'SURENDHAR G M',
            role: 'DEVOPS ENGINEER',
            image: './src/assets/suri.png',
        },
    ];

    function contact() {

        navigate("/e-courses/contact")

    }
    return (
        <div className=" text-black min-h-screen py-12">
            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                {/* Section 1: Introduction */}
                <div className="text-center  mb-16 pb-4 border-b-2">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        About Us
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl">
                        We are a forward-thinking company delivering innovative solutions that help businesses thrive.
                    </p>
                </div>

                {/* Section 2: Our Mission */}
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-semibold ">Our Mission</h3>
                    <p className="mt-4 text-lg  opacity-80">
                        Our mission is to create impactful and cutting-edge solutions that drive transformation and success for businesses.
                    </p>
                </div>

                {/* Section 3: Our Values */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    <div data-aos="fade-up" data-aos-duration="500" className="bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <FaCheckCircle className="text-5xl text-sky-500 mx-auto mb-6" />
                        <h4 className="text-2xl font-semibold text-gray-800">Innovation</h4>
                        <p className="text-gray-600 mt-4">
                            We embrace new ideas and technologies to solve real-world challenges.
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <FaRegLightbulb className="text-5xl text-sky-500 mx-auto mb-6" />
                        <h4 className="text-2xl font-semibold text-gray-800">Creativity</h4>
                        <p className="text-gray-600 mt-4">
                            Our creative approach allows us to think outside the box and craft unique solutions.
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                        <FaCheckCircle className="text-5xl text-sky-500 mx-auto mb-6" />
                        <h4 className="text-2xl font-semibold text-gray-800">Excellence</h4>
                        <p className="text-gray-600 mt-4">
                            We are committed to the highest standards of excellence in everything we do.
                        </p>
                    </div>
                </div>

                {/* Section 4: Our Team */}
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="500">
                    <h3 className="text-3xl font-semibold ">Meet Our Team</h3>
                    <p className="mt-4 text-lg opacity-80">
                        Our team is made up of talented professionals who are passionate about bringing ideas to life.
                    </p>
                </div>

                {/* Team Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 ">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            data-aos="fade-up" data-aos-duration="500"
                            className="bg-white inline-block justify-center  p-8 rounded-full shadow-2xl transform hover:scale-105  transition duration-300 ease-in-out"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32  rounded-full mx-auto object-cover"
                            />
                            <h4 className="text-xl font-semibold text-gray-800 mt-4 flex justify-center">{member.name}</h4>
                            <p className="text-gray-600 text-sm flex justify-center">{member.role}</p>
                        </div>
                    ))}
                </div>
                {/* Section 5: Contact CTA */}
                <div className="text-center mt-24">
                    <h3 className="text-3xl font-semibold text-white">Let's Work Together</h3>
                    <p className="mt-4 text-lg text-white opacity-80">
                        Ready to take your business to the next level? Contact us today to start your journey.
                    </p>
                    <button onClick={contact} className="mt-6 px-8 py-4 bg-sky-500 text-white text-lg font-semibold  hover:bg-sky-600 transition" data-aos="fade-up" data-aos-duration="500">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};


