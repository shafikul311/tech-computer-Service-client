import React, { useEffect, useState } from 'react';
import ServiceList from '../ServiceList/ServiceList';



const OurService = () => {
  const [serviceData ,setServiceData] = useState([])



  useEffect(() => {
    const url = `http://localhost:5080/getService`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setServiceData(data))
  
  },[])

  // console.log(serviceData)

    return (
        <section className="text-center">
            <h1 className="pt-3 text-brand">Our Services</h1>
           <div className="row p-3 d-flex justify-content-center m-3">
           {
                serviceData.map((service ,title) => <ServiceList key={title} service={service}></ServiceList>)
            }
           </div>
            
            
        </section>
    );
};

export default OurService;