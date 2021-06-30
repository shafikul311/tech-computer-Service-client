import React, { useEffect, useState } from 'react';
import ServiceList from '../ServiceList/ServiceList';
import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;



const OurService = () => {
  const [serviceData ,setServiceData] = useState([])



  useEffect(() => {
    const url = `https://fierce-cove-94857.herokuapp.com/getService`
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
            serviceData.length === 0 && (
              <div className="text-center">
                Loading
                <GridLoader style={{ color: "#36D7B7" }} css={override} size={50} />
              </div>
        )}
           {
                serviceData.map((service ,title) => <ServiceList key={title} service={service}></ServiceList>)
            }
           </div>
            
        </section>
    );
};

export default OurService;