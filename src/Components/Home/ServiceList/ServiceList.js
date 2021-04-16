import React from 'react';

const ServiceList = ({service}) => {
    return (
       <div className="col-md-4 text-center shadow p-3 mb-5 bg-body rounded">
           <div className="p-3">
           <img style={{width:'90%'}} src={service.img} alt=""/>
           <h2>{service.title}</h2>
           <p>{service.about}</p>
           <h5>{service.price}</h5>
           </div>
       </div>
    );
};

export default ServiceList;