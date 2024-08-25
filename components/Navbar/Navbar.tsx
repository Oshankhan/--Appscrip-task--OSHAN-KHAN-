'use client'
import React, { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { BiHeart, BiSearch, BiShoppingBag, BiUser } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
    <div className="topNavbar">
      
        <div  className={ ` nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}><FaBars className="bar"/></div>
      
      
      <Image src="/assets/Logo.png" height={20} width={22} alt="logoPng" className="logo"/>
      <p className="nav-logo">LOGO</p>
      <div className="tnav-items">
        <BiSearch size={20}/>
        <BiHeart size={20}/>
        <BiShoppingBag size={20}/>
        <BiUser size={20}/>
        <div className="tnav-items">
          <p>ENG</p>
          <IoMdArrowDropdown  size={20}/>
          </div>
      </div>
    </div>
    <div className="Navbar">

     
      <div className={`nav-items ${isOpen && "open"}`}>
        <div  className="nav-cross" onClick={()=>setIsOpen(!isOpen)}><CgClose/></div>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <a href="/contact">Contact</a>
      </div>
      
    </div>
    <div className="bottom-navBar" >
            <h1>DISCOVER OUR PRODUCT</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ut officia voluptate </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ut officia voluptate recusandae</p>
        </div>

    </>
  );
};

export default Navbar;