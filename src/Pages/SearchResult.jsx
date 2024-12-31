import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const SearchResults = () => {
    const location = useLocation();
    const { query, results } = location.state || { query: '', results: [] };
    const navigate = useNavigate();
    function viewmore(course) {
        navigate(`/course/${encodeURIComponent(course.courseTitle)}`);
    }
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Search Results for: "{query}"</h1>
            {results.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {results.map((course, index) => (
                        <li key={index} className="p-4 border rounded shadow" data-aos="fade-up" data-aos-duration="500">
                            <img src={course.image} alt={course.courseTitle} className='w-full h-48 object-fit ' />
                            <h2 className='text-lg font-semibold mt-4 line-clamp-1'>{course.courseTitle}</h2>
                            <p className='text-sm pt-2 text-gray-600 line-clamp-2 '>{course.description}</p>
                            <p className='text-sm pt-2 text-gray-600 '> Total users : {course.studentsEnrolled}</p>
                            <button onClick={() => viewmore(course)} className=' flex justify-center mt-4 px-4 py-2 bg-sky-500 text-white  shadow hover:bg-sky-700 transition w-full '>View more</button>

                        </li>
                    ))}
                </ul>
            ) : (
                <p className=" mb-20 stext-gray-600">No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;
