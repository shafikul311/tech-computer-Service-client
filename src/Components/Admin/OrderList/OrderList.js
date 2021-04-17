import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const OrderList = () => {
    return (
        <div className="row">
            <Sidebar></Sidebar>
           
            <div className="col-md-10">
                <h1>Order List</h1>
            </div>
        </div>
    );
};

export default OrderList;