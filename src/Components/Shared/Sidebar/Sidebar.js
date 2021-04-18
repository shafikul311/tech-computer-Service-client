import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
       
        <div style={{backgroundColor:'#dfe6e9',height:'100vh'}} className="col-md-2 linked-style">
            <h1>Logo</h1>
            <ul className="linked-style">       
                <li>
                    <Link to="/"> 
                        <p>Home</p>
                    </Link>
                </li>
                <li>
                    <Link to="/orderList">
                        <p>Order List</p>
                    </Link>
                </li>
                <li>
                    <Link to="/addService">
                        <p>Add Service</p>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin">
                            <p>Make Admin</p>
                    </Link>
                </li>
                <li>
                <Link to="/manageService">
                        <p>Manage Service</p>
                    </Link>
                </li>
                <hr/>
                <li>
                <Link to="/bookedServiceList">
                        <p>Booked Service List</p>
                    </Link>
                </li>
                <li>
                <Link to="/review">
                        <p>Add A Review</p>
                    </Link>
                </li>
               
            </ul>
        </div>
  
    );
};

export default Sidebar;