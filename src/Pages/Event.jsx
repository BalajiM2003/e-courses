import React from "react";
import placement from '../Json/Placement.json'
export const Event = () => {
    return (
        <div className="">

            {/* Hero Section */}
            <section className="bg-sky-500 text-white text-center py-20">
                <h1 className="text-4xl font-bold">Empower Your Future with Placements</h1>
                <p className="text-lg mt-4">Discover the best courses and placement opportunities tailored for you.</p>

            </section>





            {/* Upcoming Placement Events Section */}
            <section className="p-8 bg-gray-100">
                <h2 className="text-2xl font-bold text-center mb-6">Upcoming Placement Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 w-full rounded shadow">
                        <h3 className="text-xl font-semibold">Software Developer Hiring Drive</h3>
                        <p className="mt-2">Date: 25th January 2024</p>
                        <p>Time: 10:00 AM</p>
                        <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded">Register Now</button>
                    </div>
                    <div className="bg-white p-6 w-full rounded shadow">
                        <h3 className="text-xl font-semibold">Software Developer Hiring Drive</h3>
                        <p className="mt-2">Date: 25th January 2024</p>
                        <p>Time: 10:00 AM</p>
                        <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded">Register Now</button>
                    </div>
                    <div className="bg-white p-6 w-full rounded shadow">
                        <h3 className="text-xl font-semibold">Software Developer Hiring Drive</h3>
                        <p className="mt-2">Date: 25th January 2024</p>
                        <p>Time: 10:00 AM</p>
                        <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded">Register Now</button>
                    </div>
                    {/* Repeat similar cards for more events */}
                </div>
            </section>

            <section className="p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Placement Board</h2>
                <div className="flex  overflow-y-scroll space-x-8 w-full p-6">
                    {placement.map((students, index) => (
                        <div className="" key={index}>
                            <div className="w-80 p-6 shadow-xl ">
                                <h3 className="font-bold text-2xl">{students.studentName}</h3>
                                <p className=" text-lg pt-4 font-bold ">Courses Engaged</p>

                                <p>{students.completedCourses.map((completed) => (
                                    <div>
                                        <li className=" text-gray-600 pt-2">{completed}</li>
                                    </div>
                                ))}</p>
                                <p className="text-lg  pt-4 font-bold ">Placed In <b className="block text-gray-600 text-base font-normal pl-6 ">{students.selectedCompany}</b></p>
                                <p className="text-lg  pt-4 font-bold "> Current CTC  <b className="block text-gray-600 text-base font-normal pl-6 ">{students.currentCTC}</b></p>

                            </div>
                        </div>

                    ))}
                    {/* Repeat similar cards for more courses */}
                </div>
            </section>


        </div>
    );
};

export default Event;