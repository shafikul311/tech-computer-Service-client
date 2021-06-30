import React from 'react';
import { Link } from 'react-router-dom';

import { useSpring, animated } from '@react-spring/web'

const ServiceList = (props) => {

    const {price ,name,description ,image, _id} = props.service


    const styles = useSpring({
        loop: true,
        to: [
          { opacity: 1, color: '#ffaaee' },
          { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'red' },
      })




    return (

        
       <div className="col-md-3 text-center box-shadow m-5">
           <Link className="text-brand" style={{ textDecoration: 'none'}} to={`bookNow/${_id}`}>
           <div className="p-3">

           <animated.div style={styles}>
           <img className="rounded" style={{height:'100px'}} src={image} alt=""/>
           </animated.div>
           <h5 className="pt-2"> ${price}</h5>
           <h2>{name}</h2>
           <p>{description}</p>
           
           </div>
           </Link>
       </div>
      
    );
};

export default ServiceList;