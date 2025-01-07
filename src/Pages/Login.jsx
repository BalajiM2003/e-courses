import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import login from '../assets/login2.png';
export const Login = () => {
    const [userNameInput, setUserNameInput] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { setIsLoggedIn, setProfile } = useAuth(); // Access the global context
    const navigate = useNavigate();

    const handleValidation = (e) => {
        e.preventDefault();

        if (!userNameInput || !password) {
            setError("Both UserName and password are required.");
        } else {
            setError("");
            const isConfirmed = window.confirm("Successfully Logged In");
            if (isConfirmed) {
                setProfile((prev) => ({
                    ...prev,
                    name: userNameInput,
                }));
                // Update context state
                setIsLoggedIn(true); // Update login status
                localStorage.setItem("isLoggedIn", "true");
                navigate("/e-courses/");
            }
        }
    };

    return (
        <div className="min-h-screen p-10 flex -mt-10 items-center justify-center">

            <div className="items-center justify-center">

                <div className="container block">
                    <div className=" -mt-20 ">
                        <img src={login} className="h-80 ml-10" />
                    </div>
                    <p className="mt-2 font-extrabold text-xl ml-4">
                        Log in to continue your learning journey
                    </p>
                    <div className="relative">
                        <input
                            className="mt-4 border-2 border-black pr-60 p-2"
                            type="text"
                            placeholder="Enter User Name"
                            value={userNameInput}
                            onChange={(e) => setUserNameInput(e.target.value)}
                            required
                        />
                        <FaUser className="absolute right-3 text-gray-500 -mt-7" />
                    </div>
                    <div className="relative mt-4">
                        <input
                            className="border-2 flex border-black pr-60 p-2 w-full"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-3 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    <a
                        href="#"
                        onClick={handleValidation}
                        className="flex border-purple-600 p-2 w-98 mt-4 items-center justify-center cursor-pointer bg-sky-500 text-white hover:bg-sky-600"
                    >
                        Log in
                    </a>
                </div>
            </div>
        </div>
    );
};
