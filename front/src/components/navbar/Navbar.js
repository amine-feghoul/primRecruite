import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    const [clicked,setClicked] = useState(false)
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <Link to="/" className="navbar-logo">
                    <img src="" alt="branding-logo" />
                </Link>
                <div className="navbar-links">
                    <ul className={clicked? "nav-links active":"nav-links"}>
                        <Link to="/about" className="nav-link">  About Us <div className="nav-link-u-line"></div></Link>
                        <Link to="/contacts" className="nav-link">Contacts <div className="nav-link-u-line"></div></Link>
                        <Link to="/blog"className="nav-link">Blog <div className="nav-link-u-line"></div></Link>
                        <Link to="/login"className="nav-link">login <div className="nav-link-u-line"></div></Link>
                        <Link to="/sign-up"className="" id="nav-sign-up-btn"> Sign up <div className="nav-link-u-line"></div></Link>                       
                    </ul>
                </div>
                <i className= {clicked? "fas fa-times":"fas fa-bars"} onClick ={()=> setClicked(!clicked)}></i>
            </div>            
        </div>
    )
}

export default Navbar
