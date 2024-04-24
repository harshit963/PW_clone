import React from "react";
import Lab from "../photo/gold.png"
import Resume from "../photo/resume.png"
import Medal from "../photo/medal.png"
import Laptop from "../photo/laptop.png"
import Bag from "../photo/briefcase.png"

function Products() {
    return (
        <>
            <div className="h-auto w-full flex flex-wrap flex-col items-center 
                  text-center p-10  bg-black">
                {/* Heading Section */}
                <div className="w-full h-auto flex flex-wrap flex-col items-center 
                    text-center">
                    <p className="text-indigo-800 font-bold text-2xl md:text-4xl text-center">Our Products</p>
                    <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2
                    rounded-2xl md:mt-4 mb-10"></div>
                </div>

                {/* Card Section AREA  */}

                <div className="w-[90%] h-auto flex flex-wrap justify-around" >
                    {/* Cards */}
                    <div className="w-48 flex flex-col items-center mb-12 border-white 
                     border-2 rounded-xl p-3 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-white
                     ">
                        <div className="w-20 h-30 my-2 rounded-full bg-white overflow-hidden">
                            <img className="w-20 h-20" src={Lab}
                                alt="" srcset="" />
                        </div>

                        <p className="text-xl font-bold mt-2 text-white cursor-pointer hover:text-indigo-700">PW Skills Lab</p>
                        <p className="text-lg font-semibold p-2 text-gray-500">Supercharge your project development
                            with our robust lab.</p>
                    </div>

                      {/* Cards */}
                      <div className="w-48 flex flex-col items-center mb-12  hover:border-white 
                     hover:border-2 hover:rounded-xl p-3 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-white  ">
                        <div className="w-20 h-30 my-2 rounded-full bg-white overflow-hidden">
                            <img className="w-20 h-20" src={Resume}
                                alt="" srcset="" />
                        </div>

                        <p className="text-xl font-bold mt-2 text-white cursor-pointer hover:text-indigo-700">Job Portal</p>
                        <p className="text-lg font-semibold p-2 text-gray-500">Supercharge your project development
                            with our robust lab.</p>
                    </div>

                      {/* Cards */}
                      <div className="w-48 flex flex-col items-center mb-12  hover:border-white 
                     hover:border-2 hover:rounded-xl p-3 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-white">
                        <div className="w-20 h-30 my-2 rounded-full bg-white overflow-hidden">
                            <img className="w-20 h-20" src={Bag}
                                alt="" srcset="" />
                        </div>

                        <p className="text-xl font-bold mt-2 text-white cursor-pointer hover:text-indigo-700">Experience Portal</p>
                        <p className="text-lg font-semibold p-2 text-gray-500">PW Skills self placed experience portal with internship project </p>
                    </div>

                      {/* Cards */}
                      <div className="w-48 flex flex-col items-center mb-12  hover:border-white 
                     hover:border-2 hover:rounded-xl p-3 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-white">
                        <div className="w-20 h-30 my-2 rounded-full bg-white overflow-hidden">
                            <img className="w-20 h-20" src={Laptop}
                                alt="" srcset="" />
                        </div>

                        <p className="text-xl font-bold mt-2 text-white cursor-pointer hover:text-indigo-700">Affiliate</p>
                        <p className="text-lg font-semibold p-2 text-gray-500">Explore affiliate marketing opportunities with PW skills</p>
                    </div>

                      {/* Cards */}
                      <div className="w-48 flex flex-col items-center mb-12   hover:border-white 
                     hover:border-2 hover:rounded-xl p-3 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-white">
                        <div className="w-20 h-30 my-2 rounded-full bg-white overflow-hidden">
                            <img className="w-20 h-20" src={Medal}
                                alt="" srcset="" />
                        </div>

                        <p className="text-xl font-bold mt-2 text-white cursor-pointer hover:text-indigo-700">Hall of fame</p>
                        <p className="text-lg font-semibold p-2 text-gray-500">Our students placement and 100k+ carrer transition</p>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Products;