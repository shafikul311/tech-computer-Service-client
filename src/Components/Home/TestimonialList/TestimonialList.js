import React from 'react';

const TestimonialList = (props) => {

  const {name ,country ,description ,image}= props.testimonial
    return (
     
             <div className="col-md-3 m-5 shadow p-3 mb-5 bg-body rounded">
               <div className="d-flex">
                 <img style={{height:'50px'}} src={image} alt=""/>
                 <div>
                 <h4 className="pt-1 ml-3" >{name}</h4>
                 <h6>{country}</h6>
                 </div>
               </div>
               <div>
                 
                 <p>{description}</p>

               </div>
         
            </div>
       
    );
};

export default TestimonialList;