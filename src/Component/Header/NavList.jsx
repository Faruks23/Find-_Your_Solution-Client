import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import navIcon from "../../assets/material-symbols_keyboard-arrow-down-rounded.svg"

import logo from "../../assets/image 1.png";

const NavList = () => {

  // const hello = "amination";
  //  console.log(hello);
  // const [post, setPost] = useState([])
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setPost(data);
  //   })
  // },[])
  return (
    <>
      <ul
        className="md:flex  capitalize gap-10 text-black  text-[18px]"
        style={{ fontWeight: "700" }}
      >
        <li>
          {" "}
          <img src={logo} alt="" />
        </li>
        <li className="flex gap-2  ml-[8px] items-center">
          <NavLink to={"/"}>Solutions</NavLink>
          <span>
            <img src={navIcon} alt="" />
          </span>
        </li>
        <li className="flex gap-2  items-center">
          <NavLink to={"/Shop"}>Features</NavLink>
          <span>
            <img src={navIcon} alt="" />
          </span>
        </li>
        <li className="flex gap-2  items-center">
          <NavLink to={"/Tournament"}>Services</NavLink>
          <span>
            <img src={navIcon} alt="" />
          </span>
        </li>
        <li className="flex gap-2  items-center">
          <NavLink to={"/LiveStreaming"}>About</NavLink>
          <span>
            <img src={navIcon} alt="" />
          </span>
        </li>
      </ul>
    </>
  );
};

export default NavList;