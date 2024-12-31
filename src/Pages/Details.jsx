import React from 'react';
import { useState, useEffect } from 'react';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export const Details = () => {

    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        // Assuming you are fetching from an API or a local file
        fetch('./src/Json/Courses.json')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);
    useEffect(() => {
        const elements = document.querySelectorAll(".scroll-element");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    const reviews = [
        {
            id: 1,
            name: "Emily Johnson",
            rating: 4.5,
            comment:
                "The product is amazing! I love how it fits perfectly into my daily routine.",
            avatar: "https://via.placeholder.com/60",
            timestamp: "3 days ago",
        },
        {
            id: 2,
            name: "Chris Brown",
            rating: 5,
            comment: "Outstanding quality and top-notch service. Highly recommend!",
            avatar: "https://via.placeholder.com/60",
            timestamp: "1 week ago",
        },
        {
            id: 3,
            name: "Sophia Martinez",
            rating: 4,
            comment: "Good value for money. Will buy again!",
            avatar: "https://via.placeholder.com/60",
            timestamp: "2 weeks ago",
        },
    ];




    const suggestedProducts = [
        { id: 1, name: 'Aws Devops', price: '3000', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Networking', price: '4000', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'UI/IX Designing', price: '2999', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Cloud Engineer', price: '4999', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Cyber Security', price: '1999', image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Ethical Hacking', price: '3900', image: 'https://via.placeholder.com/150' },
    ];
    function viewmore(course) {
        navigate(`/course/${encodeURIComponent(course.courseTitle)}`);
    }
    return (
        <div className="container mx-auto">

            <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10  '>
                {
                    courses.map((course, index) =>
                    (
                        <div className='course-item shadow-md overflow-hidden  h-90 p-4 hover:shadow-2xl' key={index}>
                            <div className='container' data-aos="fade-up" data-aos-duration="500" >
                                <img src={course.image} alt={course.courseTitle} className='w-full h-48 object-fit ' />
                                <h2 className='text-lg font-semibold mt-4 line-clamp-1'>{course.courseTitle}</h2>
                                <p className='text-sm pt-2 text-gray-600 line-clamp-2 '>{course.description}</p>
                                <p className='text-sm pt-2 text-gray-600 '> Total users : {course.studentsEnrolled}</p>
                                <button onClick={() => viewmore(course)} className=' flex justify-center mt-4 px-4 py-2 bg-sky-500 text-white  shadow hover:bg-sky-700 transition w-full '>View more</button>
                            </div>
                        </div>
                    ))
                }

            </div>



            {/* Suggested Products Section */}
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h3 className="text-3xl font-bold text-gray-800">You May Also Like</h3>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {suggestedProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-gradient-to-r from-blue-50 to-white   p-4 shadow-xl hover:shadow-2xl transition " data-aos="fade-up" data-aos-duration="500"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-cover "
                                />
                                <h4 className="mt-4 text-lg font-semibold text-gray-800">{product.name}</h4>
                                <p className="text-gray-600 flex"><MdOutlineCurrencyRupee className='h-7' />{product.price}</p>
                                <button className="mt-4 px-4 py-2 bg-sky-500 text-white  shadow hover:bg-sky-700 transition w-full">
                                    View Product
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 py-10 px-6 rounded-lg shadow-lg mt-10" data-aos="fade-up" data-aos-duration="500">
                {/* Header */}
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    What Our Customers Say
                </h2>

                {/* Average Rating Section */}
                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="flex items-center space-x-1">
                        <AiFillStar className="text-yellow-400 text-3xl" />
                        <span className="text-2xl font-semibold text-gray-700">4.7</span>
                    </div>
                    <p className="text-gray-500">Based on 120 reviews</p>
                </div>

                {/* Review Carousel */}
                <div className="space-y-6 overflow-hidden">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Avatar */}
                            <img
                                src={review.avatar}
                                alt={review.name}
                                className="w-16 h-16 rounded-full border-2 border-blue-300"
                            />

                            {/* Content */}
                            <div className="md:ml-4 mt-4 md:mt-0">
                                {/* Name and Timestamp */}
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {review.name}
                                    </h3>
                                    <span className="text-sm text-gray-500">{review.timestamp}</span>
                                </div>

                                {/* Star Rating */}
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, index) => (
                                        <AiFillStar
                                            key={index}
                                            className={`text-yellow-400 ${index < Math.floor(review.rating)
                                                ? "opacity-100"
                                                : "opacity-50"
                                                }`}
                                        />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-500">
                                        {review.rating.toFixed(1)}
                                    </span>
                                </div>

                                {/* Comment */}
                                <p className="text-gray-600">{review.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <div className="flex justify-center space-x-2 mt-6">
                    {reviews.map((_, index) => (
                        <span
                            key={index}
                            className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-400 transition duration-300 cursor-pointer"
                        ></span>
                    ))}
                </div>
            </div>
        </div >
    );
}


