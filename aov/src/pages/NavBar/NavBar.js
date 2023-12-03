import './NavBar.css';
import React from 'react';
import {NavLink} from "react-router-dom";


function NavBAr() {
  return (
    <nav id="nav-bar-master">
        <ul id='nav-bar-ul'>
            <li>
                <NavLink to="/"><div className='nav-icons'><ion-icon name="boat-outline"></ion-icon></div>Backend</NavLink>
            </li>
            <li>
                <NavLink to="/control"><div className='nav-icons'><ion-icon name="game-controller-outline"></ion-icon></div>Control</NavLink>
            </li>
            <li>
                <NavLink to="/Banpick"><div className='nav-icons'><ion-icon name="partly-sunny"></ion-icon></div>Banpick</NavLink>
            </li>
            <li>
                <NavLink to="/vmixapi"><div className='nav-icons'><ion-icon name="rocket"></ion-icon></div>Vmix API</NavLink>
            </li>
            <li>
                <NavLink id="nav-last" to="/layout" target='_blank'><div className='nav-icons'><ion-icon name="paper-plane"></ion-icon></div>Layout</NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default NavBAr;
