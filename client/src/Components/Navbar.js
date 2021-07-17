import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import reactLogo from './images/logo.svg'
import {userContext} from '../App'

export const Navbar = () => {
    const {state,dispatch} = useContext(userContext)

    const RenderMenu = ()=>{
        if(state){
            return(
                <>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">Profile</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                </>
            )
        }
        if(!state){
            return(
                <>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">Profile</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/signup">Register</Link>
                    </li>
                </>
            )
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#"><img style={{    marginBottom: '2px'}} src={reactLogo} alt="logo" /> Vivek</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                    <RenderMenu />        
                    
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}
