import React from "react";
import Home from '../photo/Home.jpeg';
import home1 from '../photo/1.jpg'
import home2 from '../photo/2.jpeg'

function Header() {
  return (
    <>
      <header className="w-full h-auto ">
        <img className="w-full hidden md:block h-dvh" src={Home}
          alt=""
          srcset="" />



        <img className="w-full  md:hidden " src={home2}
          alt=""
          srcset="" />

        <img className="w-full  md:hidden " src={home1}
          alt=""
          srcset="" />
      </header>
    </>

  );
}

export default Header;