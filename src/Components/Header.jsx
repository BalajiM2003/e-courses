import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import courses from '../Json/Courses.json';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoggedIn, setIsLoggedIn, profile } = useAuth(); // Use the auth context to get/set login state
    const [searchQuery, setSearchQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
        // Load login state from localStorage on component mount
        const storedLoginState = localStorage.getItem("isLoggedIn");
        if (storedLoginState) {
            setIsLoggedIn(storedLoginState === "true");
        }
    }, [setIsLoggedIn]);

    const handleOpen = () => {
        setIsOpen(false)
    }
    const handleSearch = () => {
        if (searchQuery.trim()) {
            const results = courses.filter(course =>
                course.courseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
            navigate('/e-courses/search-results', { state: { query: searchQuery, results } });
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Update context state
        localStorage.removeItem("isLoggedIn"); // Remove login state from localStorage
        navigate('/e-courses/login');
    };

    const isLoginPage = location.pathname === "/e-courses/login";
    const isSignUpPage = location.pathname === "/e-courses/signup";

    return (
        <div className="relative">
            <Disclosure as="nav" className="fixed top-0 left-0 w-full bg-sky-500 z-50 shadow-[0_4px_5px_rgba(3,105,161,0.8)]">
                {({ open }) => (
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon aria-hidden="true" className="block size-8 group-data-[open]:hidden" />
                                    <XMarkIcon aria-hidden="true" className="hidden size-8 group-data-[open]:block" />
                                </DisclosureButton>
                            </div>

                            <div className="flex">
                                <img className="h-44 ml-6 lg:-ml-10 lg:pl-0 md:pl-0 sm:pl-10 " src="./src/assets/Vite.png" alt="Logo" />

                                <div className="hidden  md:block">
                                    <div className="flex space-x-4 mt-16 pt-2  lg:space-x-4 md:space-x-2 sm:space-x-1">

                                        <button onClick={() => navigate('/e-courses/')}
                                            className='text-white hover:bg-gray-700 px-3 py-2  text-sm font-medium' >
                                            Home
                                            {/* //text-white hover:bg-gray-700 px-3 py-2  text-sm font-medium */}
                                        </button>
                                        <button onClick={() => navigate('/e-courses/about')}
                                            className='text-white hover:bg-gray-700 px-3 py-2  text-sm font-medium' >

                                            About                                            {/* //text-white hover:bg-gray-700 px-3 py-2  text-sm font-medium */}
                                        </button>
                                        <button onClick={() => navigate('/e-courses/contact')}
                                            className='text-white hover:bg-gray-700 px-3 py-2  text-sm font-medium' >
                                            Contact
                                            {/* //text-white hover:bg-gray-700 px-3 py-2  text-sm font-medium */}
                                        </button>
                                        <button onClick={() => navigate('/e-courses/event')}
                                            className='text-white hover:bg-gray-700 px-3 py-2  text-sm font-medium' >
                                            Event                                            {/* //text-white hover:bg-gray-700 px-3 py-2  text-sm font-medium */}
                                        </button>

                                        <div className="flex justify-center items-center w-full ml-20 md:w-1/3 lg:w-80 lg:pr-8 pr-2">
                                            <div className="flex border-2 p-1 w-full border-white hover:border-sky-800 rounded-xl -mt-1 pr-2 hidden lg:flex ">
                                                <input
                                                    value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)}
                                                    type="text"
                                                    placeholder="Search anything"
                                                    className="flex w-full outline-none focus:placeholder-transparent pl-2 bg-sky-500 placeholder-gray-200 text-white"
                                                />
                                                <button onClick={handleSearch} className="search-button">
                                                    <IoSearchSharp className='text-white' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                {!isLoggedIn ? (
                                    <div className="flex gap-4 ">
                                        <button
                                            onClick={() => navigate('/e-courses/login')}
                                            className={`px-4 py-2 text-sm border-2  h-10 w-full ${isLoginPage ? "bg-sky-800 text-white border-white hover:bg-sky-900" : "text-white border-white hover:bg-sky-600"}`}
                                        >
                                            Login
                                        </button>

                                        <button
                                            onClick={() => navigate('/e-courses/signup')}
                                            className={`px-4 py-2 text-sm border-2  ${isSignUpPage ? "bg-sky-800 text-white border-white hover:bg-sky-900" : "text-white border-white hover:bg-sky-600"}`}
                                        >
                                            SignUp
                                        </button>
                                    </div>
                                ) : (
                                    <div className='flex items-center gap-4'>
                                        <button onClick={() => navigate('/e-courses/Cart')}>
                                            <FaShoppingCart className='text-white text-2xl hover:text-sky-800' />
                                        </button>
                                        <div className="relative">
                                            <button onClick={toggleDropdown} className="px-4 py-2">
                                                <img src={profile.image} className=' h-12 rounded-full  border-4 border-sky-600  w-12   object-cover' />
                                            </button>
                                            {isOpen && (
                                                <div className="absolute mt-4 w-48 bg-white border rounded-lg shadow-lg">
                                                    <ul className="py-2 " onClick={handleOpen}>
                                                        <li className="px-2 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => navigate('/e-courses/profile')}>Profile</li>
                                                        <li className="px-2 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
                                                        <li className="px-2 py-2 hover:bg-gray-200 cursor-pointer" onClick={handleLogout}>
                                                            Log out
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <DisclosurePanel className="md:hidden">
                            <div className="space-y-2 px-2 pb-4 pt-2 bg-sky-500">
                                {navigation.map((item) => (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            location.pathname === item.href ? "bg-sky-800 text-white" : "text-white hover:bg-sky-700 hover:text-white",
                                            "block rounded-md px-3 py-2 text-base font-medium"
                                        )}
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                ))}
                            </div>
                            <div className="flex justify-center w-full mx-6 md:w-1/3 lg:w-1/4 pr-8 pb-8">
                                <div className="flex border-2 p-2 w-full hover:border-sky-800">
                                    <input
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        type="text"
                                        placeholder="Search anything"
                                        className="flex w-full text-white outline-none focus:placeholder-transparent bg-sky-500 placeholder-white"
                                    />
                                    <button onClick={handleSearch} className="search-button">
                                        <IoSearchSharp className='text-white' />
                                    </button>
                                </div>
                            </div>
                        </DisclosurePanel>
                    </div>
                )}
            </Disclosure>

            <div className="pt-16"></div>
        </div>
    );
}

export default Header;
