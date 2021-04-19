import React from 'react';
import { Link } from 'react-router-dom';

const ServiceList = (props) => {

    const {price ,title,description ,image, _id} = props.service




    return (

        
       <div className="col-md-4 text-center shadow p-3 mb-5 bg-body rounded">
           {/* <h1>{service.id}</h1> */}
           <Link style={{color:'gray'}} to={`bookNow/${_id}`}>
           <div className="p-3">
           <img style={{width:'90%'}} src={image} alt=""/>
           <h5> ${price}</h5>
           <h2>{title}</h2>
           <p>{description}</p>
           
           </div>
           </Link>
       </div>
      
    );
};

export default ServiceList;