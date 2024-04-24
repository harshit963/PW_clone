import React from "react";
import Book from "../photo/book.png"
import Success from "../photo/approved.png"
import Student from "../photo/graduating-student.png"

function Students() {
    return (
        <>
            <div className="h-auto w-100 flex flex-wrap flex-col items-center 
                  text-center p-10 mt-8 mb-10">
                {/* Heading Section */}
                <div className="w-full h-auto flex flex-wrap flex-col items-center 
                    text-center">
                    <p className="text-indigo-800 font-bold text-2xl md:text-4xl text-center ">"Pure Hardwork, No Shortcuts!"</p>
                    <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2
                    rounded-2xl md:mt-4 mb-10"></div>
                </div>

                {/* Card Section Area  */}
                <div className="w-full flex flex-wrap justify-evenly" >
                    {/* Cards  */}
                    <div className="w-46 flex flex-col items-center mt-12">
                        <div className="w-39 h-37 rounded-full bg-white overflow-hidden">
                            <img className="w-30 h-20" src={Book}
                                alt="" srcset="" />
                        </div>
                        <p className="text-2xl font-bold text-white mt-1 hover:text-indigo-700 cursor-pointer">600+</p>
                        <p className="text-xl font-semibold text-gray-500">Different Courses</p>
                    </div>

                     {/* Cards  */}
                     <div className="w-46 flex flex-col items-center mt-12">
                        <div className="w-39 h-37 rounded-full bg-white overflow-hidden">
                            <img className="w-30 h-20" src={Student}
                                alt="" srcset="" />
                        </div>
                        <p className="text-2xl font-bold text-white mt-1 hover:text-indigo-700 cursor-pointer">7000,000+</p>
                        <p className="text-xl font-semibold text-gray-500">Students Enrolled</p>
                    </div>

                     {/* Cards  */}
                     <div className="w-46 flex flex-col items-center mt-12">
                        <div className="w-39 h-37 rounded-full bg-white overflow-hidden">
                            <img className="w-30 h-20" src={Success}
                                alt="" srcset="" />
                        </div>
                        <p className="text-2xl font-bold text-white mt-1 hover:text-indigo-700 cursor-pointer">10,000+</p>
                        <p className="text-xl font-semibold text-gray-500">Successful Transition</p>
                    </div>
                </div>

                
            </div>
        </>
    );
}

export default Students;