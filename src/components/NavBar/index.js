import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SidebarData from './SidebarData';
import './styles.css';
import { IconContext } from 'react-icons';
import { Sling as Hamburger } from 'hamburger-react'
import Header from '../Header';
import Modal from '../Modal';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);


  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
             {/* <Hamburger color="#81c043" onClick={showSidebar} /> */}
            <Hamburger duration={0.8} size={26} color="#fff" toggled={sidebar} toggle={setSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    
      <Header/>
    </>
  );
}

export default Navbar;