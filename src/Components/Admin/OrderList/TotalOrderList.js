import React from 'react';

const TotalOrderList = (props) => {
    console.log(props)

    const {name ,email } = props.orders
    return (
        <tbody>
        <tr>
        <th scope="row">{name}</th>
        <td>{email}</td>
        <td>{props.orders.productData.name}</td>
        <td className="text-danger">Pending</td>
        </tr>
    </tbody>
    );
};

export default TotalOrderList;