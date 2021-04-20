import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
       <footer className="row background-footer p-5">
           <div className="col-md-4">
               <h3 className="footer" >Tech computer service</h3>
                 <ul className="footer-ul">
                                
                <li>
                <Link className="footer"  to="/"> 
                    <p>Home</p>
                </Link>
                </li>
                <li>
                <Link className="footer"  to="/orderList">
                    <p>Order List</p>
                </Link>
                </li>
                <li>
                <Link className="footer"  to="/addService">
                    <p>Add Service</p>
                </Link>
                </li>
                <li>
                <Link className="footer"  to="/review">
                    <p>Add A Review</p>
                </Link>
                </li>

               </ul>
           </div>
           <div className="col-md-4">
               <ul className="footer-ul">           
                <li>
                <Link  className="footer" to="/makeAdmin">
                        <p>Make Admin</p>
                </Link>
                </li>
                <li>
                <Link className="footer"  to="/manageService">
                    <p>Manage Service</p>
                </Link>
                </li>
                
                <li>
                <Link className="footer"  to="/bookedServiceList">
                    <p>Booked Service List</p>
                </Link>
                </li>
               
                <li>
                <Link className="footer"  to="/bookNow/:_id">
                    <p>Book Now</p>
                </Link>
                </li>

                </ul>  
           </div>
           <div className="col-md-4">

           <h4 className="footer" >Social Link</h4>

               <ul className="footer-ul">
                   <a href=""><li> <FontAwesomeIcon className="iconStyle" icon={faFacebookF} /> </li> </a>
                   <a href=""> <li> <FontAwesomeIcon className="iconStyle" icon={faGooglePlusG} /></li> </a>
                   <a href="">  <li> <FontAwesomeIcon className="iconStyle" icon={faInstagram} /></li></a>
                   
                  
                  
               </ul>
            
              
           </div>

               
                    <p className="footer">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
             
       </footer>
    );
};

export default Footer;







