import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const MakeAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="row">
            <Sidebar></Sidebar>
                <div className="col-md-10 pt-5">
                    
                    <h1>Add Admin</h1>
                    <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                    
                            <input placeholder="Email" className="form-control w-50" {...register("email", { required: true })} />
                          
                            <br/>
                            {errors.email && <span className="text-danger">This field is required</span>}
                            <br/>
                            <input type="submit" />
                    
                           
                            </form>
                    </div>
                </div>
        </div>
    );
};

export default MakeAdmin;