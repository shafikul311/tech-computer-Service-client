import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const TestimonialList = (props) => {

  const {name ,country ,description ,image}= props.testimonial
    return (
     
             <div className="col-md-3 m-5 shadow p-3 mb-5 bg-body rounded background-brand">
               <div className="d-flex">
                 <img className="rounded-circle" style={{height:'50px'}} src={image} alt=""/>
                 <div>
                 <h4 className="pt-1 ml-3" >{name}</h4>
                 <h6>{country}</h6>
                 </div>
               </div>
               <div>
                 
                 <p>{description}</p>

                 <div>
                 <FontAwesomeIcon style={{color:'orange'}} icon={faStar} />
                 <FontAwesomeIcon style={{color:'orange'}} icon={faStar} />
                 <FontAwesomeIcon style={{color:'orange'}} icon={faStar} />
                 <FontAwesomeIcon style={{color:'orange'}} icon={faStar} />
                 <FontAwesomeIcon style={{color:'orange'}} icon={faStar} />
                 </div>

               </div>
         
            </div>
       
    );
};

export default TestimonialList;