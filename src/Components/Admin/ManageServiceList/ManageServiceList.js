import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ManageServiceList = (props) => {

    const {email ,name} = props.bookings
    return (
        <tbody>
        <tr>
        <th scope="row">{email}</th>
        <th scope="row">{name}</th>
        <td>{props.bookings.productData.name}</td>

        <td> <FontAwesomeIcon style={{color:'red'}} icon={faTrash} /></td>
        </tr>
    </tbody>          
    );
};

export default ManageServiceList;