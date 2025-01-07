import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { MdDeleteOutline } from "react-icons/md";
import dummy from '../assets/profile.png';
import { image } from "framer-motion/client";
import dummyImage from '../assets/profile.png';

export const Profile = () => {

    const { profile, setProfile } = useAuth();
    useEffect(() => {
        const savedImage = localStorage.getItem("image");
        if (savedImage && profile.image !== savedImage) {
            setProfile((prev) => ({
                ...prev,
                image: savedImage,
            }));
        }
    }, [setProfile, profile.image]);
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imageData = event.target.result;
                setProfile((prev) => ({
                    ...prev,
                    image: imageData,
                }));
                localStorage.setItem("image", imageData);

            };
            reader.readAsDataURL(file);
        }

    }
    const handleDelete = () => {
        setProfile((prev) => ({
            ...prev,
            image: { dummy },
        }));
        localStorage.setItem("image", dummy);
    };
    const [isEditing, setIsEditing] = useState({
        name: false,
        email: false,
        phoneNumber: false,
        dob: false,
        image: false,
    });

    const handleEditToggle = (field) => {
        setIsEditing((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const handleInputChange = (e, field) => {
        setProfile((prev) => ({
            ...prev,
            [field]: e.target.value,
        }));
    };


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
            {/* Profile Header */}
            <div className="w-full max-w-3xl bg-white shadow rounded-lg p-6 mb-8">
                <div className="relative flex">
                    <img
                        src={profile.image || dummyImage}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-blue-500"
                    />
                    <p className="flex justify-center items-center p-8 font-bold text-2xl text-sky-600">{profile.name}</p>
                    <button className="absolute bottom-0 right-8 p-1 text-lg" ><MdDeleteOutline onClick={handleDelete} /></button>
                    <label
                        htmlFor="profileImageUpload"
                        className="absolute bottom-0 right-0 text-sky-600  p-1  cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M11 17l-4-4m0 0l4-4m-4 4h12"
                            />
                        </svg>
                    </label>
                    <input
                        type="file"
                        id="profileImageUpload"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                </div>
            </div>

            {/* Profile Details */}
            <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold text-gray-700">Name</h3>
                        <button
                            className="text-blue-500 hover:text-blue-600 focus:outline-none"
                            onClick={() => handleEditToggle("name")}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11 17l-4-4m0 0l4-4m-4 4h12"
                                />
                            </svg>
                        </button>
                    </div>
                    {isEditing.name ? (
                        <input
                            type="text"
                            value={profile.name}
                            onChange={(e) => handleInputChange(e, "name")}
                            className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    ) : (
                        <p className="text-gray-500 mt-2">{profile.name}</p>
                    )}
                </div>

                {/* Email Field */}
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold text-gray-700">Email</h3>
                        <button
                            className="text-blue-500 hover:text-blue-600 focus:outline-none"
                            onClick={() => handleEditToggle("email")}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11 17l-4-4m0 0l4-4m-4 4h12"
                                />
                            </svg>
                        </button>
                    </div>
                    {isEditing.email ? (
                        <input
                            type="email"
                            value={profile.email}
                            onChange={(e) => handleInputChange(e, "email")}
                            className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    ) : (
                        <p className="text-gray-500 mt-2">{profile.email}</p>
                    )}
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold text-gray-700">Mobile Number</h3>
                        <button
                            className="text-blue-500 hover:text-blue-600 focus:outline-none"
                            onClick={() => handleEditToggle("phoneNumber")}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11 17l-4-4m0 0l4-4m-4 4h12"
                                />
                            </svg>
                        </button>
                    </div>
                    {isEditing.phoneNumber ? (
                        <input
                            type="number"
                            value={profile.phoneNumber}
                            onChange={(e) => handleInputChange(e, "phoneNumber")}
                            className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    ) : (
                        <p className="text-gray-500 mt-2">{profile.phoneNumber}</p>
                    )}
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold text-gray-700">D.O.B</h3>
                        <button
                            className="text-blue-500 hover:text-blue-600 focus:outline-none"
                            onClick={() => handleEditToggle("dob")}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11 17l-4-4m0 0l4-4m-4 4h12"
                                />
                            </svg>
                        </button>
                    </div>
                    {isEditing.dob ? (
                        <input
                            type="date"
                            value={profile.dob}
                            onChange={(e) => handleInputChange(e, "dob")}
                            className="mt-2 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    ) : (
                        <p className="text-gray-500 mt-2">{profile.dob}</p>
                    )}
                </div>
            </div>

            {/* Save Changes Button */}
            <div className="w-full max-w-3xl mt-8 flex justify-end">
                <button className="px-6 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition" onClick={() => alert("Changes Updated")}>
                    Save Changes
                </button>
            </div>
        </div>
    );
};

