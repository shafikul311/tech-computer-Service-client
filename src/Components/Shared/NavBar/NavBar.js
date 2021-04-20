import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const NavBar = () => {
    return (
        <div style={{background:'#3742fa'}}>
          <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
        <img style={{height:'50px'}} src={logo} alt=""/>
        <h3 style={{color:'white'}}>Tech Computer Service</h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ml-5">
            <Link style={{color:'white', fontSize:'18px'}} to="/home">Home</Link>
            </li>
            <li className="nav-item ml-5">
            <Link style={{color:'white', fontSize:'18px'}} to="/review">Review</Link>
            </li>
            <li className="nav-item ml-5">
            <Link style={{color:'white', fontSize:'18px'}} to="/admin">Admin</Link>
            </li>
            <li className="nav-item ml-5">
            <button className="btn btn-danger"><Link style={{color:'white', fontSize:'18px'}} to="/login">Login</Link></button>
            </li>
          
          </ul>
     
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default NavBar;