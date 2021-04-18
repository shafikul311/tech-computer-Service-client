import React from 'react';

const ServiceList = ({service}) => {


    return (
       <div className="col-md-3 text-center shadow p-1 m-5 mb-5 bg-body rounded">
           <div className="p-3">
           <img style={{width:'90%'}} src={service.image} alt=""/>
           <h5> ${service.price}</h5>
           <h2>{service.title}</h2>
           <p>{service.description}</p>
           
           </div>
       </div>
    );
};

export default ServiceList;