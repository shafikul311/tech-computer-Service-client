import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import TotalOrderList from './TotalOrderList';

const OrderList = () => {
    const [orderList , setOrderList] = useState([])

    useEffect(() => {
        const url = `http://localhost:5080/getBooking`
        fetch(url)
        .then(res =>res.json())
        .then(data => setOrderList(data))
    },[])

    
    return (
        <div className="row">
            <Sidebar></Sidebar>
           
            <div className="col-md-10 background-brand pt-5">
                <h1 className="text-brand">Order List</h1>
                <div>
                        <table className="table">
                        <thead style={{backgroundColor:'white'}}>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                            {
                                orderList.map((orders ,id) =><TotalOrderList key={id} orders={orders}></TotalOrderList>)

                            }
                       
                        </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;