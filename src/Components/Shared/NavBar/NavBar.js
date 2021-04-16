import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h3>Navbar</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ml-5">
        <Link to="/home">Home</Link>
        </li>
        <li className="nav-item ml-5">
        <Link to="/review">Review</Link>
        </li>
        <li className="nav-item ml-5">
        <Link to="/admin">Admin</Link>
        </li>
        <li className="nav-item ml-5">
        <button><Link to="/login">Login</Link></button>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
            
        </div>
    );
};

export default NavBar;