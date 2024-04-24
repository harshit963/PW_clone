import React from "react";

import ImageSlider from './ImageSlider';

function PromiseSection() {
    const images = [
        'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=450&h=550&dpr=1',
        'https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=450&h=550&dpr=1',
        'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=450&h=550&dpr=1',
    ];
    return (
        <>
            <div className="max-w-md mx-auto mt-2 mb-5 bg-slate-950 rounded-xl overflow-hidden md:max-w-5xl">
            <div className="w-full h-auto flex flex-wrap flex-col items-center 
                    text-center mt-5">
                    <p className="text-indigo-800 font-bold text-2xl md:text-4xl text-center">Our Promise</p>
                    <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2
                    rounded-2xl md:mt-4 mb-10"></div>
                </div>

                <div className="md:flex">

                    <div className="p-3 ">


                        <p className="mt-2 text-slate-300 px-4">
                            At The Interns, we are committed to providing a supportive learning environment where every student feels valued and empowered to succeed.

                        </p>
                        <p className="mt-2 text-slate-300 px-4">
                            With our comprehensive courses, expert instructors, and dedicated support team, we assure you that your journey with us will be nothing short of exceptional.

                        </p>
                    
                        <p className="mt-2 text-slate-300 px-4">
                        The Interns Today and take the first step towards a brighter future!
                        </p>
                        <button className="mt-2 mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-40 transition-transform duration-300 transform hover:scale-110">Join</button>
                       
                       
                    </div>
                    {/* Image Section */}
                    <div className="md:shrink-0 ">
                        <ImageSlider images={images} />
                    </div>

                </div>

            </div>

        </>
    );
}

export default PromiseSection;