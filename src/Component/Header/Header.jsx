import React, { useEffect, useState } from 'react';
import {NavLink } from 'react-router-dom';
import { FaBars, FaFileVideo, FaHome, FaShoppingCart } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { TbTournament } from "react-icons/tb";
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
      <header className="shadow-xl  z-40 fixed  p-4 bg-transparent text-white w-full">
        <nav>
          <div className="flex md:justify-around items-center justify-end">
            {/* nav-list */}

            <div className=" hidden md:block">
              <NavList></NavList>
            </div>

            {/* sign in and sign up */}
            <div className="flex gap-5 items-center">
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="bt "
              >
                Login
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
                  <FaHome></FaHome>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li className="flex gap-2  items-center">
                  <FaShoppingCart></FaShoppingCart>
                  <NavLink to={"/Shop"}>Shop</NavLink>
                </li>
                <li className="flex gap-2  items-center">
                  <TbTournament></TbTournament>
                  <NavLink to={"/Tournament"}>Tournament</NavLink>
                </li>
                <li className="flex gap-2  items-center">
                  <FaFileVideo></FaFileVideo>
                  <NavLink to={"/LiveStreaming"}>Live Streaming</NavLink>
                </li>
                <li className="flex gap-2  items-center">
                  <FaEarthAfrica></FaEarthAfrica>
                  <NavLink to={"/Community"}>Community</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* modal */}
    </>
  );
};

export default Header;