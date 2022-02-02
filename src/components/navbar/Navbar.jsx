import React,{useState} from 'react';
import "./navbar.css";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'

//BEN ->Block Element Modifier
const Menu =() =>(
  <>
  <p><a href="#home">Home</a></p>
        <p><a href="#dhannfit">What is Dhann Fitness?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false)
  return(
    <div className="dhann__navbar">
      <div className="dhann__navbar-links">
        <div className="dhann__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dhann__navbar-links_container">
        <Menu />
        </div>
      </div>
      <div className="dhann__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className="dhann__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)} />
        :  <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)} /> 
      } 
      {toggleMenu && (
        <div className="dhann__navbar-menu_container scale-up-center">
          <div className="dhann__navbar-menu_container-links">
          <Menu />
           <div className="dhann__navbar-menu_container-links-sign">
            <p>Sign In</p>
            <button type='button'>Sign Up</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  ) 
};

export default Navbar;
