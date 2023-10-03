import React from 'react'
import './Error.css'
import { NavLink, } from 'react-router-dom'


const Error = () => {
    // const navigate = useNavigate()
    // const handleGoBack = () => {
    //     navigate('/');
    //   };
    return (
        <div className="error-img">
            <NavLink to="/">
            <img src="img/error.svg" alt="error" />
            {/* <button className="botn" onClick={handleGoBack}>Go Back To Home</button> */}
            </NavLink> 
        </div>
    )
}

export default Error