import React, { Profiler } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Event } from './Pages/Event';
import TutorDetails from './Pages/TutorDetails';
import { CompleteDetails } from './Pages/CompleteDetails';
import SearchResults from './Pages/SearchResult';
import { Cart } from './Cart';
import { Profile } from './Pages/Profile';
import { Details } from './Pages/Details';
import PaymentPage from './Pages/PaymentPage';
export const Routers = () => {
    return (


        <Routes>

            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='event' element={<Event />} />
            <Route path='contact' element={<Contact />} />
            <Route path='tutor/:name' element={<CompleteDetails />} />
            <Route path="course/:courseTitle" element={<TutorDetails />} />
            <Route path='search-results' element={<SearchResults />} />
            <Route path='profile' element={<Profile />} />
            <Route path='products' element={<Details />} />
            <Route path='cart' element={<Cart />} />
            <Route path='payment' element={<PaymentPage />} />
        </Routes>

    );
};

// import React, { useState } from 'react'
// import { Home } from '../Pages/Home'
// import { Event } from '../Pages/Event'
// import { Contact } from '../Pages/Contact'
// import { About } from '../Pages/About'
// import { Explore } from '../Pages/Explore'
// import { use } from 'react'
// import { Login } from '../Pages/Login'
// import { SignUp } from '../Pages/SignUp'
// import { NavLink } from 'react-router-dom'
// import { IoSearchOutline } from "react-icons/io5";

// export const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);


//     return (

//         <div className="navbar  flex  border-b-2  ">
//             <div className="container   flex space-x-6 mt-1 -mb-4  ">
//                 <button onClick={() => setIsOpen(!isOpen)}
//                     className="inline-flex items-center p-2 mb-4 text-white-500 rounded-lg hover:bg-white-200 focus:outline-none focus:ring-2 focus:ring-gray-400 md:hidden"
//                     aria-controls="menu "
//                     aria-expanded={isOpen}>
//                     <span className="sr-only ">Open main menu</span>
//                     <svg
//                         className="w10 h-10 "
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d={
//                                 isOpen
//                                     ? 'M6 18L18 6M6 6l12 12' // X icon
//                                     : 'M4 6h16M4 12h16m-7 6h7' // Hamburger icon
//                             }
//                         />
//                     </svg>
//                 </button>
//                 <div className={`${isOpen ? 'block' : 'hidden'
//                     } w-full md:flex md:w-auto`}
//                     id="menu">
//                     <ul className="flex flex-col mt-2 md:flex-row md:space-x-4">
//                         <li className="nav-item  ">
//                             <a href={<Home />} className="block  text-2xl px-3 py-2 text-black hover:text-blue-600">Home</a>
//                         </li>
//                         <li className="nav-item">
//                             <a href={<About />} className="block  text-2xl px-3 py-2 text-black hover:text-blue-600">About </a>
//                         </li>
//                         <li className="nav-item">
//                             <a href={<Contact />} className="block text-2xl  px-3 py-2 text-black hover:text-blue-600">Contact </a>
//                         </li>
//                         <li className="nav-item">
//                             <a href={<Event />} className="block text-2xl px-3 py-2 text-black hover:text-blue-600">Event</a>
//                         </li>
//                         <li className="nav-item">
//                             <a href={<Explore />} className="block text-2xl px-3 py-2 text-black hover:text-blue-600">Explore</a>
//                         </li>
//                     </ul>


//                 </div>
//                 <div className='flex  list-none justify-end space-x-8 w-full  '>

//                     <li className='btn-item'>

//                         <NavLink to='/login' className={`${isOpen ? 'hidden' : 'block'
//                             } px-6 text-sm text-base cursor-pointer  border border-black     hover:bg-black hover:text-white transition p-2 mb-9 mt-3`} >
//                             Login</NavLink>
//                     </li>
//                     <li className='btn-item '>
//                         <NavLink to='/signup' className={`${isOpen ? 'hidden' : 'block'
//                             } px-6 text-sm text-base cursor-pointer bg-black   text-white   transition ml-auto  p-2 mb-9 mt-3`}>SignUp</NavLink>
//                     </li>


//                 </div>

//             </div>
//         </div >
//     )
// }
