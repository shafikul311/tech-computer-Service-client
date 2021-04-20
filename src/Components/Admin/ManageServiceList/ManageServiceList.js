import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ManageServiceList = (props) => {

const handleDelete =(id) =>{
    fetch(`http://localhost:5080/delete/${id}`,{
        method: 'DELETE'


    })
    .then(res =>res.json())
    .then(data => {
        alert('delete success')
    })

    // console.log( id , 'id')

}

    const {name ,_id} = props.bookings
    return (
        <tbody>
        <tr>
        {/* <th scope="row">{email}</th> */}
        <th scope="row">{name}</th>
        <td>{name}</td>

        <td> <button onClick={()=>handleDelete(_id)}><FontAwesomeIcon  style={{color:'red'}} icon={faTrash} /></button> </td>
        </tr>
    </tbody>          
    );
};

export default ManageServiceList;