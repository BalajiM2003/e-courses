import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import tutorsData from '../Json/tut.json';
import { useAuth } from "../AuthContext";
const TutorDetails = () => {
    const { courseTitle } = useParams();
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    // Decode courseTitle and get tutors
    const tutors = tutorsData[decodeURIComponent(courseTitle)] || [];

    function moreDetails(tutor) {
        navigate(`/e-courses/tutor/${encodeURIComponent(tutor.name)}`, { state: { tutor } });
    }
    const handleBuy = () => {
        if (isLoggedIn) {
            navigate('/e-courses/payment');
        } else {
            const confirm = window.confirm("Login to Get the Course");
            if (confirm) {
                navigate('/e-courses/login');
            }
        }
    }
    if (tutors.length === 0) {
        return (
            <div className="p-8">
                <h2 className="text-2xl font-bold ">No Tutors Found</h2>
                <button onClick={() => navigate(-1)} className="text-blue-500 mb-60 underline">
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Tutors for {courseTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tutors.map((tutor, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-md" data-aos="fade-up" data-aos-duration="500">
                        <img src={tutor.image} alt={tutor.name} className="w-full h-40 object-cover mb-4" />
                        <h3 className="text-lg font-bold">{tutor.name}</h3>
                        <p className="text-sm text-gray-500">{tutor.experience}</p>
                        <p className="mt-2 text-gray-700">{tutor.bio}</p>
                        <p className="text-gray-700 text-lg mt-2">Price: {tutor.price}</p>
                        <button className="p-2 mt-2 w-full bg-sky-500 text-white hover:bg-sky-600" onClick={handleBuy}>
                            Buy now
                        </button>
                        <button
                            onClick={() => moreDetails(tutor)}
                            className="p-2 mt-2 w-full bg-sky-500 text-white hover:bg-sky-600"
                        >
                            More Details
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button
                    onClick={() => navigate(-1)}
                    className="mt-20 mb-10 bg-sky-500 text-white px-4 py-2 hover:bg-sky-600 " data-aos="fade-up" data-aos-duration="500"
                >
                    Back to Courses
                </button>
            </div>
        </div>
    );
};

export default TutorDetails;
