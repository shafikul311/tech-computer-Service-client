import React, { useEffect, useState } from 'react';
import TestimonialList from '../TestimonialList/TestimonialList';

import { css } from "@emotion/react";
import GridLoader from "react-spinners/GridLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


const Testimonial = () => {

const [review ,setReview] = useState([])



  useEffect(() => {
    const url = `https://fierce-cove-94857.herokuapp.com/getReview`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setReview(data))
  
  },[])
  // console.log(review)




    return (

<section className="text-center p-5 text-brand">
<h1>Testimonial</h1>
<div className="justify-content-center  row p-5">

    {  
        review.length === 0 && (
              <div className="text-center">
                Loading
                <GridLoader style={{ color: "#36D7B7" }} css={override} size={50} />
              </div>
            )}
    {
        review.map( (testimonial ,name)=> <TestimonialList key={name} testimonial={testimonial}></TestimonialList>)
    }
    </div>


    </section>
    );
};

export default Testimonial;