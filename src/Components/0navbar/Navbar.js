import React from 'react'
import "./Navbar.css"
import { IoIosSearch } from "react-icons/io";
import { FaCompass } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";


const Navbar = () => {
  return (
    <div className="container margin">
      <div className="row">
        <div className="col2">
          <div className='navlogo'>
            <img src='./image/logo/bigbasket.png' alt="image"/>
          </div>
            </div>
              <div className='col6'>
                  <div className='searchbar'>
                    <div className='sebar'>
                        <IoIosSearch className='searchicon'/>
                        <input type="text" placeholder='Search for Products'></input>
                    </div>
                  </div>
              </div>
                <div className='col2'>
                  <div className='locationicon'>
                   <a href="#">
                   <FaCompass className='compass'/>
                    Seclect Location
                   </a>
                  </div>
                </div>
                  <div className='col1'>
                    <div className='login'>
                      <a href='#'>Login</a>
                    </div>
                  </div>
                    <div className='col1'>
                      <div className='addtocard'>
                        <RiShoppingBasketFill  className='baskesticon'/>
                      </div>
                    </div>
      </div>
    </div>
  )
}

export default Navbar;
