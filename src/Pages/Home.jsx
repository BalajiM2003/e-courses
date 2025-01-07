import React from 'react'
import { Details } from './Details'
import { Header } from '../Components/Header'
import { About } from './About'
import Courses from '../Json/Courses.json'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner from '../assets/banner.png'
import bannerr from '../assets/banner2.png'
AOS.init();
export const Home = () => {
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        setCourses(Courses);
        setFilteredCourses(Courses.slice(0, 3)); // Initially display all courses
    }, []);
    const filterBestSeller = () => {
        const bestSeller = courses.filter(course => course.isBestseller === true).slice(0, 3);
        setFilteredCourses(bestSeller);
    };

    const filterMostUsed = () => {
        const mostUsedCourses = courses.filter(course => course.studentsEnrolled > 900000).slice(0, 3);
        setFilteredCourses(mostUsedCourses);
    };

    const filterNewOne = () => {
        const latestCourses = courses.filter(course => new Date(course.lastUpdated) > new Date().setFullYear(new Date().getFullYear() - 1)).slice(0, 3);
        setFilteredCourses(latestCourses);
    };
    const getCourse = (course) => {

        navigate(`/e-courses/course/${encodeURIComponent(course.courseTitle)}`);
    }
    return (
        <div className=''>
            <div className='container'>
                <div className='mt-8  mx-auto text-center w-screen p-10  '>
                    <h1 className='text-3xl font-bold p-5'>Unlock Your Potential With Our Courses</h1>
                    <p className='font-bold text-gray-700' >Transform your skills and advance your career with our expertly designed courses.<br></br>Join community of learners and take the first step towards your future today!</p>
                    <div className='flex gap-5 justify-center mt-8'>
                        <button className='border-2 p-2 border-black  hover:bg-black hover:text-white w-40' onClick={() => navigate('/e-courses/products')}>Explore Now</button>
                    </div>
                </div>
                <div className='w-screen  h-96 object-cover'>
                    <img src={banner} alt='' className='w-full h-full object-fit' />
                </div>
                <div className='block lg:flex md:flex  w-screen'>
                    <div className=' grid text-center lg:text-left md:text-left mt-20 space-y-4 p-4 ml-auto lg:pl-10 md:pl-10 w-full lg:w-1/2 md:w-1/2 ' data-aos="fade-up" data-aos-duration="500">
                        <p className='font-bold text-2xl'>Get Ready To Engage With Our Top Rated And Trending Courses.</p>
                        <p className='font-bold text-gray-700'>
                            Our courses offer high-quality content designed to elevate your skills.Learn from industry experts at your own pace.
                        </p>
                        <div className='p-8 flex gap-4'>
                            <div data-aos="fade-right" data-aos-duration="500">
                                <h3 className='text-xl font-bold'  >Expert Instructors</h3>
                                <p className='font-bold text-gray-700'> Gain insigghts from professionals with years of experience in their fields. </p>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="500">
                                <h3 className='text-xl font-bold'>
                                    Flexible Learning
                                </h3>
                                <p className='font-bold text-gray-700' >Study whatever and wherever it suits you best</p>
                            </div>

                        </div>


                    </div>
                    <div className='w-full lg:w-1/2  md:w-1/2 p-10  lg:p-20 md:p-18' data-aos="fade-up" data-aos-duration="500">
                        <img src={bannerr} alt='' className='w-full h-full pb-2' />
                    </div>
                </div>

                <div className=' w-screen flex justify-center items-center p-8 shadow-2xl' >
                    <h3 className='w-80 font-bold text-xl  pr-8' >Your Path To Knowledge Starts Here</h3>
                    <p className=' w-80 font-bold  text-gray-700 text-left'>  Purchasing a course is simple and straight forward .Start by browsing our extensive catalog of courses tailored to your  interests.Once you find  the perfect course , just follow the prompts to complete your purchase and gain instant access.  </p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3  gap-2 place-items-center w-screen p-4 pb-20 mt-24'  >
                    <div className=' p-8 rounded bg-sky-500 text-white w-full ' data-aos="zoom-in-out" data-aos-duration="1000" >
                        <h3 className=' font-bold text-xl '>Step 1: Browse Our Course Catalog</h3>
                        <p>Explore a wide range of topics and formats</p>
                    </div>
                    <div className=' p-8 rounded bg-sky-500 text-white w-full  ' data-aos="zoom-in-out" data-aos-duration="1500">
                        <h3 className=' font-bold text-xl'>Step 2: Select Your Desired Course </h3>
                        <p>
                            Choose the course that best fits your needs
                        </p>
                    </div>
                    <div className=' p-8 rounded bg-sky-500 text-white w-full ' data-aos="zoom-in-out" data-aos-duration="2000">
                        <h3 className=' font-bold text-xl'>
                            Step 3:  Complete Your Purchase in our app
                        </h3>
                        <p>
                            Securely checkout and unlock your learning
                        </p>
                    </div>
                </div>
            </div>
            <section className="py-8 dark:bg-gray-100 dark:text-gray-800">
                <div className="container mx-auto">
                    <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl" data-aos="fade-up" data-aos-duration="500">
                        <h2 className="text-2xl font-bold leading-none sm:text-4xl">Get Our Hot Courses Here</h2>
                        <p className="px-8 my-4">The most popular,highly recommended courses which students prefer in current days</p>
                    </div>
                    <div className="flex justify-center pb-4  " data-aos="fade-up" data-aos-duration="500">
                        <button className="p-2  md:py-3 border-b hover:border-black hover:text-lg transition" onClick={filterBestSeller}>Best Seller</button>
                        <button className="px-2 py-1 md:py-3 border-b hover:border-black  hover:text-lg" onClick={filterMostUsed}>Most Used</button>
                        <button className="px-2 py-1 md:py-3 border-b hover:border-black  hover:text-lg" onClick={filterNewOne}>New One</button>

                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-10 justify-center p-6'>
                        {filteredCourses.map((course, index) => (
                            <div
                                key={index}
                                className='p-6 space-y-2 shadow flex flex-col justify-between h-full'
                                data-aos="fade-up"
                                data-aos-duration="500"
                            >
                                <div>
                                    <h3 className='w-full font-bold text-gray-700 text-xl'>{course.courseTitle}</h3>
                                    <p className='font-bold text-gray-500'>Subtitle: {course.subtitles}</p>
                                </div>

                                <button
                                    onClick={() => getCourse(course)}
                                    className='p-2 border bg-sky-500 text-white hover:bg-sky-600 mt-auto'
                                >
                                    Get the Course
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </div >

    )
}
