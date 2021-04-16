import React from 'react';
import laptop from '../../images/store.jpg'
import ServiceList from '../ServiceList/ServiceList';

const serviceData = [
    {
      title: "Laptop Repair",
      img: laptop,
      price: "$200",
      about:
        "ipsum dolor sit amet consectetur adipisicing elit. Ex, quod. Laborum quisquam quae culpa nihil suscipit distinctio voluptatibus, vel esse?ipsum dolor sit amet consectetur adipisicing elit. Ex, quod. Laborum quisquam quae culpa nihil suscipit distinctio voluptatibus, vel esse?",
    },
  
    {
      title: "Laptop Repair",
      img: laptop,
      price: "$200",
      about:
        "ipsum dolor sit amet consectetur adipisicing elit. Ex, quod. Laborum quisquam quae culpa nihil suscipit distinctio voluptatibus, vel esse?ipsum dolor sit amet consectetur adipisicing elit. Ex, quod. Laborum quisquam quae culpa nihil suscipit distinctio voluptatibus, vel esse?",
    },
    
    {
      title: "Laptop Repair",
      img: laptop,
      price: "$200",
      about:
        "ipsum dolor sit amet consectetur adipisicing elit. Ex, quod. Laborum quisquam quae culpa nihil suscipit distinctio voluptatibus, vel esse?ipsum dolor sit amet consectetur adipisicing elit. Ex, quod. Laborum quisquam quae culpa nihil suscipit distinctio voluptatibus, vel esse?",
    }
  ];

const OurService = () => {
    return (
        <section className="text-center">
            <h1>Our Services</h1>
           <div className="row p-5">
           {
                serviceData.map((service ,title) => <ServiceList key={title} service={service}></ServiceList>)
            }
           </div>
            
            
        </section>
    );
};

export default OurService;