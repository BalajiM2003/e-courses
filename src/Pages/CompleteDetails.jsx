import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { useCart } from '../CartContext'; // Import the custom hook
import { useAuth } from "../AuthContext";

export const CompleteDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    // Retrieve tutor details from state
    const tutor = location.state?.tutor;

    // Access the cart context using the custom hook
    const { addToCart } = useCart();

    const StarRating = ({ rating }) => {
        const maxStars = 5;
        return (
            <div className="flex">
                {Array.from({ length: maxStars }, (_, index) => (
                    <span key={index}>
                        {index + 1 <= Math.floor(rating) ? (
                            <FaStar className="text-yellow-500" />
                        ) : index + 1 === Math.ceil(rating) ? (
                            <FaStarHalfAlt className="text-yellow-500" />
                        ) : (
                            <FaRegStar className="text-gray-400" />
                        )}
                    </span>
                ))}
            </div>
        );
    };
    const handleBuy = () => {
        if (isLoggedIn) {
            navigate('/payment');
        } else {
            const confirm = window.confirm("Login to Get the Course");
            if (confirm) {
                navigate('/login');
            }
        }
    }
    if (!tutor) {
        return (
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">No Tutor Found</h2>
                <button onClick={() => navigate(-1)} className="text-blue-500 underline">
                    Go Back
                </button>
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(tutor); // Add the tutor to the cart
        alert(`${tutor.name} has been added to your cart!`);
    };

    return (
        <div>
            <div className="relative flex h-80 bg-sky-500 shadow-lg">
                <div className="absolute text-6xl top-16 left-20 w-96 text-white">
                    {tutor.name}
                </div>
                <div className="absolute text-3xl top-32 border-t-2 left-20 text-white">
                    {tutor.experience}
                </div>
            </div>
            <div className="absolute top-72 right-60">
                <img src={tutor.image} alt="" className="w-40 lg:w-56 border-white border-4" />
            </div>
            <div>
                <div className="grid lg:flex justify-center gap-10 mt-10">
                    <div className="w-96 mt-28 shadow-2xl">
                        <div className="flex flex-col gap-4 p-14">
                            <div>
                                <p className="font-bold text-2xl text-gray-600">Courses:</p>
                                {tutor.courses.map((item, index) => (
                                    <li key={index} className="font-bold text-xl text-gray-500">
                                        {item}
                                    </li>
                                ))}
                            </div>
                            <p className="font-bold text-xl text-gray-500">
                                <span className="font-bold text-2xl text-gray-600 block">Bio:</span>
                                {tutor.bio}
                            </p>
                        </div>
                    </div>
                    <div className="w-96 bg-white mt-28 shadow-xl">
                        <div className="p-14 space-y-4">
                            <p className="text-gray-500 text-lg font-bold">
                                <span className="font-bold text-2xl text-gray-600 block">Experience:</span>
                                {tutor.experience}
                            </p>
                            <p className="text-gray-500 text-lg font-bold">
                                <span className="font-bold text-2xl text-gray-600 block">Course Duration:</span>
                                {tutor.duration}
                            </p>
                            <p className="text-gray-500 text-lg font-bold">
                                <span className="font-bold text-2xl text-gray-600 block">Course Price:</span>
                                {tutor.price}
                            </p>
                            <p className="font-bold text-2xl text-gray-600">Rating:</p>
                            <StarRating rating={tutor.rating} />
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <div className="flex gap-10 justify-center">
                        <button
                            onClick={handleAddToCart}
                            className="bg-sky-500 p-4 text-white font-bold hover:bg-sky-600 w-80"
                        >
                            ADD TO CART
                        </button>
                        <button className="bg-sky-500 p-4 text-white font-bold hover:bg-sky-600 w-80" onClick={handleBuy}>
                            Buy Now
                        </button>
                    </div>
                    <div className="mt-20 mb-8">
                        <h3 className="text-4xl font-bold mb-4 text-gray-700 flex justify-center">
                            What You Will Learn:
                        </h3>
                        <div className="flex justify-center">
                            <ol className="list-decimal list-inside">
                                {tutor.what_you_learn.map((item, index) => (
                                    <li key={index} className="text-2xl text-gray-600 mb-4 mt-8 font-bold ml-8">
                                        {item}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
