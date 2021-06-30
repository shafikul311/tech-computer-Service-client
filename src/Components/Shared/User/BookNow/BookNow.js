import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../../App';
import ProcessCard from '../../../Payment/ProcessCard';
import Sidebar from '../../Sidebar/Sidebar';


const BookNow = () => {


    const [loggedInUser ,setLoggedInUser] = useContext(UserContext);

    const [bookingData , setBookingData] = useState([0])

    const { _id } = useParams();
    
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


useEffect(() => {

    const url = `https://fierce-cove-94857.herokuapp.com/addService/${_id}`
    fetch(url)
    .then(res => res.json())
    .then(data => setBookingData(data))

},[0])


const handlePaymentSuccess = (paymentId)=>{
    const paymentData ={

        name:loggedInUser.name,
        email:loggedInUser.email,
        
        productData:bookingData[0],
        paymentId, 
        date: new Date().toDateString(),


    }
   console.log(paymentData)

   const url = `https://fierce-cove-94857.herokuapp.com/addBooking`;
   fetch(url, {
     method: "POST",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify(paymentData),
   }).then((res) => res.json());
}

// console.log(bookingData[0])
    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 background-brand">
                <h1 className="text-brand">Book Now</h1>
                <hr/>

       <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control w-75" defaultValue={loggedInUser.name} placeholder="Name" {...register("name" , { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                    <br/> 

                    <input className="form-control w-75" defaultValue={loggedInUser.email} name="email" placeholder="Email" {...register("email", { required: true })} />
                    {errors.email && <span className="text-danger">This field is required</span>}
                    <br/>

                    <input className="form-control w-75" defaultValue={bookingData[0].name}   placeholder="Service Title" {...register("serviceName", { required: true })} />
                    {errors.serviceName && <span className="text-danger">This field is required</span>}
                    <br/>


                    <input className="form-control w-75" defaultValue={bookingData[0].price}   placeholder="Service Charge" {...register("serviceCharge", { required: true })} />
                    {errors.serviceCharge && <span className="text-danger">This field is required</span>}
                    <br/>
                    {/* <input type="submit" /> */}
                    </form>
           </div>
                <div className="col-md-6">
                    <h2>Pay Now</h2>
                    <div className="w-75">
                    <ProcessCard handlePayment={handlePaymentSuccess}/>

                    </div>
              
                </div>
         </div>

   

            </div>
        </div>
    );
};

export default BookNow;