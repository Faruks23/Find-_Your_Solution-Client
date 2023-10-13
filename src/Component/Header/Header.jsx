import React, { useState } from 'react';
import {NavLink } from 'react-router-dom';
import { FaBars} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import NavList from './NavList';
import './Header.css'
const Header = () => {

  const [Open,setIsOpen]=useState(false)

  const handleOpenMenu = () => {
    setIsOpen(true);

  }
  const handleClosMenu = () => { 

    setIsOpen(false);
  }
  



  return (
    <>
      <header className="z-40 fixed  p-4 bg-transparent  w-full">
        <nav>
          <div className="flex md:justify-around items-center    justify-end  font-[Poppins]">
            {/* logo */}

            {/* nav-list */}

            <div className=" hidden md:block">
              <NavList></NavList>
            </div>

            {/* sign in and sign up */}
            <div className="flex gap-5 items-center">
              <button className="py-[10px] px-[20px] border-[1.5px] rounded-[10px] border-[#0076CE] text-[#0076CE] text-[16px] font-[700] ">
                Login
              </button>
              <button className="py-[10px] px-[20px] border-[1.5px] rounded-[10px]  text-[16px] font-[700] text-white bg-[#0076CE]">
                Register
              </button>

              {Open ? (
                <>
                  <p
                    onClick={handleClosMenu}
                    className="md:hidden block cursor-pointer"
                  >
                    <AiOutlineClose className="w-6 h-6"></AiOutlineClose>{" "}
                  </p>
                </>
              ) : (
                <>
                  <p
                    onClick={handleOpenMenu}
                    className="md:hidden block cursor-pointer"
                  >
                    {" "}
                    <FaBars className="w-6 h-6"></FaBars>{" "}
                  </p>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>

      {Open && (
        <>
          <div id="close w-full h-full  ">
            <div className=" fixed bg-[#1B234D] z-10 h-full px-5 w-[50%] mobile-nav ">
              <h1 className="py-2 text-xl font-bold  uppercase">MY TopUP</h1>
              <hr />
              <ul className="flex  flex-col gap-5 text-green-300 mt-2">
                <li className="flex gap-2  items-center">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="flex gap-2  items-center">
                  <NavLink to={"/Shop"}>Shop</NavLink>
                </li>
                <li className="flex gap-2  items-center">
                  <NavLink to={"/Tournament"}>Tournament</NavLink>
                </li>
                <li className="flex gap-2  items-center">
                  <NavLink to={"/LiveStreaming"}>Live Streaming</NavLink>
                </li>
                <li className="flex gap-2  items-center">
                  <NavLink to={"/Community"}>Community</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;