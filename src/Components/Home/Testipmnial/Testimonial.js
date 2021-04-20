import React, { useEffect, useState } from 'react';
import TestimonialList from '../TestimonialList/TestimonialList';


const Testimonial = () => {

const [review ,setReview] = useState([])



  useEffect(() => {
    const url = `http://localhost:5080/addReview`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setReview(data))
  
  },[])
  // console.log(review)




    return (

<section className="text-center p-5 text-brand">
<h1>Testimonial</h1>
<div className="row p-5">
{
    review.map( (testimonial ,name)=> <TestimonialList key={name} testimonial={testimonial}></TestimonialList>)
}
</div>


</section>
    );
};

export default Testimonial;