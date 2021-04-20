import React from "react";

const Contract = () => {
  return (
    <div style={{backgroundColor:'#57606f',color:'white'}} className=" text-center p-5 text-head-brand ">
      <h1 className="pb-5">We handle Your Problem Personally</h1>

            <div className="d-flex justify-content-center">
                <form action="" className="w-50 ">
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control input-lg"
                    name="username"
                    placeholder="Name"
                    required="required"
                    />
                </div>

                <div className="form-group">
                    <input
                    type="email"
                    className="form-control input-lg"
                    name="email"
                    placeholder="Email Address"
                    required="required"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Text"
                    ></textarea>
                </div>
                
                <button className="btn-brand justify-content-end " type="submit"> Submit</button>
                </form>
            </div>
     </div>
  );
};

export default Contract;
