import React, { useEffect, useState } from 'react';
import { FaFileVideo, FaHome, FaShoppingCart } from 'react-icons/fa';
import { FaEarthAfrica } from 'react-icons/fa6';
import { TbTournament } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const NavList = () => {

  const hello = "amination";
   console.log(hello);
  const [post, setPost] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPost(data);
    })
  },[])
  return (
    <>
      <ul className="md:flex  uppercase gap-10 font-bold text-white ">
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
    </>
  );
};

export default NavList;