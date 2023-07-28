import React from "react";
import Home from "../section/home/Home";
import {useState,useRef, useEffect} from 'react';
import  "./Header.css";

export default function Header() {

  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 600 ? setnavColor("#000") : setnavColor("transparent");
 
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
 
  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top navbarScroll" style={{
          backgroundColor: navColor,
         }}>
        <div className="container"  >
            <a className="navbar-brand" href="#">Brad</a>
            <div class="toggle"></div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
      <Home/>

      </>
      
  );


}
