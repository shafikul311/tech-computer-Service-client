import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Sidebar/Sidebar';

const Review = () => {

    // const [imageURL , setImageURL] = useState(null)
    const [imageURL , setImageURL] = useState(null)

    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

    // console.log(data)
    const addReview = {
     name: data.Name,
     description: data.descriptionArea,
     country: data.countryName,
     image: imageURL
    }

    // console.log(addReview)
    // console.log(imageURL)



    const url = `https://fierce-cove-94857.herokuapp.com/addReview`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(addReview),
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
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10 background-brand">
                <h1 className="p-5 text-brand">Add A review Here</h1>
            
                 <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" className="form-control" placeholder="Name" {...register("Name")} required />
                    <br/>
                    <input type="country" className="form-control" placeholder="Country" {...register("countryName")} required />
                    <br/>

                    <textarea className="form-control" placeholder="Description" type="Textarea"  {...register("descriptionArea", { required: true })} required > Description </textarea>
                    {errors.descriptionArea && <span className="text-danger">This field is required</span>}
                    <br/>

                    <input onChange={handelImageSubmit} className="form-control" type="file" name="file" placeholder="file" required/>
                    <br/>

                    <input className="btn-brand" type="submit" />
                </form>
              
            </div>
        </div>
    );
};

export default Review;