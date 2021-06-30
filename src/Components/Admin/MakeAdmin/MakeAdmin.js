import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const MakeAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const emailData = { 
            email:data.email
        }
        // console.log(data.email)
        const url = `https://fierce-cove-94857.herokuapp.com/addAdmin`;
        fetch(url, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(emailData),
        }).then((res) => res.json());

      

    }

    return (
        <div className="row">
            <Sidebar></Sidebar>
                <div className="col-md-10 pt-5 background-brand p-5">
                    
                    <h1 className="text-brand">Add Admin</h1>
                    <div style={{borderRadious:'15px'}} className="p-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                    
                            <input placeholder="Email" className="form-control w-50" {...register("email", { required: true })} />
                          
                            <br/>
                            {errors.email && <span className="text-danger">This field is required</span>}
                            <br/>
                            <input className="btn-brand" type="submit" />
                    
                           
                            </form>
                    </div>
                </div>
        </div>
    );
};

export default MakeAdmin;