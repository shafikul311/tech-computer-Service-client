import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const [imageURL , setImageURL] = useState(null)

    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    const serviceData = {
      name: data.name,
      description: data.description,
      price: data.price,
      image: imageURL,
    };
    console.log(serviceData)

    const url = `https://fierce-cove-94857.herokuapp.com/addService`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    }).then((res) => res.json());
  }




      const handelImageSubmit = event => {
        console.log(event.target.files[0]);

        const imageData = new FormData();
        imageData.set("key", "eaeada892240c3e78235aac2d3a8e400");
        imageData.append("image", event.target.files[0]);

        axios
          .post("https://api.imgbb.com/1/upload", imageData)
          .then(function (response) {
            console.log(response.data.data.display_url)

            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
      }


  
    return (
        <div className="row background-brand">
            <Sidebar></Sidebar>
            <div className="col-md-10 pt-5">
                <h1>Add Service</h1>
                <div className="w-75 pt-5 pl-5">


        <form onSubmit={handleSubmit(onSubmit)}>

            
            <input type="text" className="form-control" placeholder="Title" {...register("name")} required />
            <br/>
            <input type="number" className="form-control" placeholder="Price"  {...register("price")} required />
            <br/>
            
            <textarea className="form-control" placeholder="Description" type="Textarea"  {...register("description", { required: true })} required > Description </textarea>
            {errors.description && <span className="text-danger">This field is required</span>}
            <br/>

            <input onChange={handelImageSubmit} className="form-control" type="file" name="file" placeholder="file" required/>
            <br/>
            
            <input className="btn-brand" type="submit" />
            </form>


                    
                        </div>

                    </div>
                </div>
    );
};

export default AddService;