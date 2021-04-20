import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import ManageServiceList from '../ManageServiceList/ManageServiceList';

const ManageService = () => {
    const [allBookingData , setAllbookingData] = useState([])

    useEffect(()=>{
        const url = `http://localhost:5080/getService`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setAllbookingData(data))

    },[])

    // console.log(allBookingData)


    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 pt-4">
            <h1 className="text-brand"> Manage Service</h1>

            <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                        <th scope="col">Delete Service</th>
                        </tr>
                    </thead>
                    {
                        allBookingData.map((bookings , id)=> <ManageServiceList key={id} bookings={bookings}></ManageServiceList>)
                    }
                   
                    </table>

            </div>
            
        </div>
    );
};

export default ManageService;