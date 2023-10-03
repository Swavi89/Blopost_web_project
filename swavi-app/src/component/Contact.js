import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import './Style.css'
import './Utils.css'
import './Contact.css'
import './Mobile.css'

const Contact = () => {
    const navigate = useNavigate();
  return (
    <div>
       <nav className="navigation max-width-1 m-auto">
                <div className="nav-left">
                    <a href="/">
                        <span><img src="img/logo.png" width="94px" alt="" /></span>
                    </a>
                    <ul>
                       
                    <i className="fa-solid fa-backward" onClick={() => navigate(-1)}></i>
                   
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>

            <div className="max-width-1 m-auto">
                <hr />
            </div>

            <div className="contact-content font1 max-width-1 m-auto">
                <div className="max-width-1 m-auto mx-1">
                    <h2>Feel Free to Contact Us</h2>
                    <form action="https://formspree.io/f/mnqkapbb" method="POST">
                        <div className="contact-form">
                            <div className="form-box">
                                <input type="text" name="name" placeholder="Enter Your Name" required />
                            </div>
                            <div className="form-box">
                                <input type="text" name="phone" placeholder="Enter Your Phone Number" required />
                            </div>
                            <div className="form-box">
                                <input type="email" name="email" placeholder="Enter Your Email Id" required />
                            </div>
                            <div className="form-box">
                                <textarea name="message" id="" cols="30" rows="10" placeholder="How may we help you?"></textarea>
                            </div>
                            <div className="form-box">
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="footer">
                <p>Copyright &copy; iBlog.com</p>
                <a href="https://www.vecteezy.com/free-vector/typewriter">Vector Credits: Vecteezy</a>
            </div>
    </div>
  )
}

export default Contact

