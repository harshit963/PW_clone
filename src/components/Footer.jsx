import React from "react";


function Footer()
{
    return(
        <>
        <footer className="w-full bg-gray-900 px-4 pb-12 text-white pt-8 flex 
        flex-row flex-wrap justify-between  md:px-12">
            <div className="md:w-auto w-screen">
                <img className="w-40 h-16 " src="https://lab.pwskills.com/images/PWSkills-white.png" alt="" />
               <p className="my-4">Email us : <span className="cursor-pointer hover:text-blue-700">support@pwskills.com</span> </p>
               <img className="w-20 h-15 rounded-xl" src="https://png.pngtree.com/png-clipart/20221012/original/pngtree-red-award-ribbon-certificate-vector-clipart-png-image_8677017.png" alt="" />
            </div>

            <div className="">
                <h2 className="font-bold text-xl mt-4 text-indigo-700 cursor-pointer hover:text-white">PW Skills</h2>
                <div className="w-32 h-1 border-b-2 border-y border-yellow-400 rounded-xl  my-2"></div>
                <div>
                    <p className="cursor-pointer hover:text-blue-700">About us</p>
                    <p className="cursor-pointer hover:text-blue-700">FAQS</p>
                    <p className="cursor-pointer hover:text-blue-700">Privacy Policy</p>
                </div>
            </div>

            <div className="">
                <h2 className="font-bold text-xl mt-4  text-indigo-700 cursor-pointer hover:text-white">Products</h2>
                <div className="w-32 h-1 border-b-2 border-y border-yellow-400 rounded-xl  my-2"></div>
                <div>
                    <p className="cursor-pointer hover:text-blue-700">PW Skills Lab</p>
                    <p className="cursor-pointer hover:text-blue-700">Job Portal</p>
                    <p className="cursor-pointer hover:text-blue-700">Experience Portal</p>
                    <p className="cursor-pointer hover:text-blue-700">Become an affiliate</p>
                    <p className="cursor-pointer hover:text-blue-700">Hall of fame</p>
                </div>
            </div>

            <div className="">
                <h2 className="font-bold text-xl mt-4  text-indigo-700 cursor-pointer hover:text-white">Links</h2>
                <div className="w-32 h-1 border-b-2 border-y border-yellow-400 rounded-xl  my-2"></div>
                <div>
                    <p className="cursor-pointer hover:text-blue-700">Discord Channel</p>
                    <p className="cursor-pointer hover:text-blue-700">PW YouTube</p>
                    <p className="cursor-pointer hover:text-blue-700">Carrers</p>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;