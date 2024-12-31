// AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

// Custom hook to access auth context
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component that provides the context value
export const AuthProvider = ({ children }) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        dob: "",
        phoneNumber: "",
        image: "", // Default image
    });
    useEffect(() => {
        // Load profile from localStorage
        const savedImage = localStorage.getItem("image");
        if (savedImage) {
            setProfile((prev) => ({
                ...prev,
                image: savedImage,
            }));
        }
    }, []);
    return (
        <AuthContext.Provider value={{ userName, setUserName, email, setEmail, isLoggedIn, setIsLoggedIn, profile, setProfile }}>
            {children}
        </AuthContext.Provider>
    );
};
export default { useAuth, AuthProvider };