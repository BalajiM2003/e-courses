import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import signup from '../assets/login.png'
export const SignUp = () => {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const { setEmail } = useAuth();
    const navigate = useNavigate();
    const handleValidation = (e) => {

        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let errors = {};

        if (!name) {
            errors.name = "Full name is required.";
        }
        if (!userEmail) {
            errors.email = "Email is required.";
        } else if (!emailRegex.test(userEmail)) {
            errors.email = "Please enter a valid email address.";
        }
        if (!password) {
            errors.password = "Password is required.";
        }


        setError(errors);

        if (Object.keys(errors).length === 0) {
            const isConfirmed = window.confirm("Sign Up Successfull");
            if (isConfirmed) {
                setEmail(userEmail);
                navigate("/e-courses/login");
            }


            // Add further form submission logic here.
        }

    };

    return (
        <div className="min-h-screen p-10 flex -mt-10 items-center justify-center">
            <div className="items-center justify-center">
                <img className="h-40 ml-2 lg:ml-6 md:ml-8" src={signup} alt="" />

                <div className="container block">
                    <p className="mt-2 font-extrabold text-xl flex justify-center items-center">
                        Sign up and start learning
                    </p>

                    {/* Name Input */}
                    <div className="relative mt-4">
                        <input
                            className="border-2 flex border-black pr-60 p-2 w-full"
                            type="text"
                            placeholder="Enter Full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <FaUser className="absolute right-3 top-3 text-gray-500absolute right-3 top-3 text-gray-500" />
                    </div>
                    {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}

                    {/* Email Input */}
                    <div className="relative mt-4">
                        <input
                            className="border-2 flex border-black pr-60 p-2 w-full"
                            type="email"
                            placeholder="Enter E-mail"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                        <FaEnvelope className="absolute right-3 top-3 text-gray-500" />
                    </div>
                    {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}

                    {/* Password Input */}
                    <div className="relative mt-4">
                        <input
                            className="border-2 flex border-black pr-60 p-2 w-full"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-3 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {error.password && (
                        <p className="text-red-500 text-sm mt-1">{error.password}</p>
                    )}

                    {/* Checkbox */}
                    <p className="mt-4">
                        <input type="checkbox" className="mr-2" />
                        Send me special offers and personalized recommendations.
                    </p>

                    {/* Sign-Up Button */}
                    <a
                        onClick={handleValidation} href="/login"
                        className="bg-sky-500 flex justify-center text-white items-center  mt-4 p-2 cursor-pointer hover:bg-sky-600 "
                    >
                        Sign up
                    </a>

                    <p className="mt-2 ml-10">
                        By signing up, you agree to our terms and conditions.
                    </p>

                    {/* Already Have Account */}
                    <a
                        href="/login"
                        className="mt-2 flex justify-center text-white bg-sky-500  p-2 cursor-pointer hover:bg-sky-600 "
                    >
                        Already have an account
                    </a>
                </div>
            </div>
        </div>
    );
};
