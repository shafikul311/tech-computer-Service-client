import React from 'react';

const TotalBookedAndUpdate = (props) => {


    // console.log(props.booking.productData)

    const {name ,image ,description} = props.booking.productData
    return (
        <div className="col-md-4 m-5 shadow-lg p-3 mb-5 bg-body rounded text-center ">
            <img style={{width:'100px'}} src={image} alt=""/>
             <h5>{name}</h5>  
             <p><small>{description}</small></p>

             <h5 className="text-danger">Pending</h5>      
         
        </div>
    );
};

export default TotalBookedAndUpdate;