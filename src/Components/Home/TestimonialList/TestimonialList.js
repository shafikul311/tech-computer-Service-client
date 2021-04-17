import React from 'react';

const TestimonialList = ({testimonial}) => {
    return (
     
             <div className="col-md-3 m-5 shadow p-3 mb-5 bg-body rounded">
               <div className="d-flex">
                 <img style={{height:'50px'}} src={testimonial.img} alt=""/>
                 <div>
                 <h4 className="pt-1 ml-3" >{testimonial.name}</h4>
                 <h6>{testimonial.country}</h6>
                 </div>
               </div>
               <div>
                 
                 <p>{testimonial.review}</p>

               </div>
         
            </div>
       
    );
};

export default TestimonialList;