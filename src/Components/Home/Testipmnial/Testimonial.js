import React from 'react';
import imag from '../../testimonialimg/customer-1.png'
import TestimonialList from '../TestimonialList/TestimonialList';
const testimonialsData = [
    {
      name:'ketfina kife',
      country:'USA',
      img: imag,
      review:"ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit. Ex, quod. Laborum quisquam quae culpa nihil suscipit distinctio voluptatibus, vel esse?ipsum dolor sit amet",
      rating:''
    },
    {
      name:'DiPika',
      img: imag,
      country:'USA',
      review:"ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit. Ex, quod. Laborum quisquam quae culpa nihil suscipit distinctio voluptatibus, vel esse?ipsum dolor sit amet.",
      rating:''
    },
    {
      name:'Nora',
      img: imag,
      country:'USA',
      review:"ipsum dolor sit amet consectetur adipisicing elit ipsum dolor sit amet consectetur adipisicing elit. Ex, quod. Laborum quisquam quae culpa nihil suscipit distinctio voluptatibus, vel esse?ipsum dolor sit amet.",
      rating:''
    }
  ];

const Testimonial = () => {
    return (

<section className="text-center p-5">
<h1>Testimonial</h1>
<div className="row p-5">
{
    testimonialsData.map( (testimonial ,name)=> <TestimonialList key={name} testimonial={testimonial}></TestimonialList>)
}
</div>


</section>
    );
};

export default Testimonial;