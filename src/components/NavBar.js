import React, { useState } from 'react'
import './NavBar.css';

function NavBar (){
    const [click, setclick] = useState(false);

    const clickHandle = () => {setclick(!click)};
        
    return(
            <>
            <nav className='navbar'>
                <div><h1>MY APP</h1></div>
                <ul className="inline-menu">
                    <li> Home</li>
                    <li> About</li>
                    <li> Contact</li>
                    <li> Projects</li>
                    <li> Team</li>
                </ul>
                <div className='menu-icon' onClick={clickHandle}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </nav>

            <ul className={click ? 'active' : 'nav-bar'}>
                    <li> Home</li>
                    <li> About</li>
                    <li> Contact</li>
                    <li> Projects</li>
                    <li> Team</li>
                </ul>

            </>
        );
}
export default NavBar;