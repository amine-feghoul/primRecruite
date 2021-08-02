import React,{useState} from 'react'
import './Navbar.css'
function Navbar() {
    const [clicked,setClicked] = useState(false)
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="navbar-logo">
                    <img src="" alt="branding-logo" />
                </div>
                <div className="navbar-links">
                    <ul className={clicked? "nav-links active":"nav-links"}>
                        <li className="nav-link">About Us <div className="nav-link-u-line"></div></li>
                        <li className="nav-link">Contacts <div className="nav-link-u-line"></div></li>
                        <li className="nav-link">Blog <div className="nav-link-u-line"></div></li>
                        <li className="nav-link">login <div className="nav-link-u-line"></div></li>
                        <li className="" id="nav-sign-up-btn"> Sign up <div className="nav-link-u-line"></div></li>                       
                    </ul>
                </div>
                <i className= {clicked? "fas fa-times":"fas fa-bars"} onClick ={()=> setClicked(!clicked)}></i>
            </div>            
        </div>
    )
}

export default Navbar
