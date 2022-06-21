import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import './Navbar.css';
import images from "../../constants/images"
import { useState } from 'react';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return  (
    <div className="app__navbar">
      <div className='app_navbar-logo'>
        <img src={images.gericht} alt="app logo"/>
      </div>
      <ul className='app_navbar-links'>
        <li className="p__opensans"><a href='#home'></a>Home</li>
        <li className="p__opensans"><a href='#about'>About</a></li>
        <li className="p__opensans"><a href='#menu'>Menu</a></li>
        <li className="p__opensans"><a href='#awards'>Awards</a></li>
        <li className="p__opensans"><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Log In/Register</a>
        <div />
        <a href='/' className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} style={{cursor: "pointer"}}/>
        {
          toggleMenu && (
            <div className='app_navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
          <ul className='app_navbar-smallscreen-links'>
        <li className="p__opensans"><a href='#home'></a>Home</li>
        <li className="p__opensans"><a href='#about'>About</a></li>
        <li className="p__opensans"><a href='#menu'>Menu</a></li>
        <li className="p__opensans"><a href='#awards'>Awards</a></li>
        <li className="p__opensans"><a href='#contact'>Contact</a></li>
      </ul>
        </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;
