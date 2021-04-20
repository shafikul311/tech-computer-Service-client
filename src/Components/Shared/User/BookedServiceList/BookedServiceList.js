import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import TotalBookedAndUpdate from '../TotalBookedAndUpdate/TotalBookedAndUpdate';

const BookedServiceList = () => {

    const [bookings , setBookings] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
    useEffect(() => {
      fetch(`http://localhost:5080/addBooking?email=` + loggedInUser.email)
        .then((res) => res.json())
        .then((data) => setBookings(data));
    }, []);

    // console.log(bookings[0])
    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 pt-5 background-brand">
            <h1>All booked Service List</h1>
           

           <div className="row d-flex ">

                {
                    bookings.map((booking ,id) =><TotalBookedAndUpdate key={id} booking={booking}></TotalBookedAndUpdate> )

                }

                </div>
            </div>
          
        </div>
    );
};

export default BookedServiceList;