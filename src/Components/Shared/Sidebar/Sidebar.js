import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
// import img from '../../images/logo.png'
import './Sidebar.css'

const Sidebar = () => {
        const [loggedInUser , setLoggedInUser] = useContext(UserContext);
        const [isAdmin , setIsAdmin] = useState(false)

        useEffect(()=>{
            const url = `http://localhost:5080/isAdmin`
            fetch(url, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ email:loggedInUser.email})
            })
                
            .then(res => res.json())
            .then(data=> setIsAdmin(data))
        }, [])

        console.log(isAdmin)


    return (
       
        <div  className="col-md-2 linked-style">
            {/* <img style={{height:'50px', textAlign:'center'}} src={img} alt=""/> */}
            <ul className="linked-style pt-5">       
                <li>
                    <Link className="side-bar"  to="/"> 
                        <p>Home</p>
                    </Link>
                </li>

             { isAdmin  ?  <div>
                <li>
                    <Link className="side-bar"  to="/orderList">
                        <p>Order List</p>
                    </Link>
                </li>
                <li>
                    <Link className="side-bar"  to="/addService">
                        <p>Add Service</p>
                    </Link>
                </li>
                <li>
                    <Link  className="side-bar" to="/makeAdmin">
                            <p>Make Admin</p>
                    </Link>
                </li>
                <li>
                <Link className="side-bar"  to="/manageService">
                        <p>Manage Service</p>
                    </Link>
                </li>

                </div> :  
                <div>
                    <li>
                <Link className="side-bar"  to="/bookedServiceList">
                        <p>Booked Service List</p>
                    </Link>
                </li>
                <li>
                <Link className="side-bar"  to="/review">
                        <p>Add A Review</p>
                    </Link>
                </li>
                <li>
                <Link className="side-bar"  to="/bookNow/:_id">
                        <p>Book Now</p>
                    </Link>
                </li>
                </div>  }

                <hr/>
                
               
            </ul>
        </div>
  
    );
};

export default Sidebar;