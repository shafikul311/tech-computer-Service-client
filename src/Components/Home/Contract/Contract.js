import React from "react";

const Contract = () => {
  return (
    <div className=" text-center p-5">
      <h1 className="pb-5">We solve Your Problem Personally</h1>

            <div className="d-flex justify-content-center">
                <form action="" className="w-50 ">
                <div class="form-group">
                    <input
                    type="text"
                    class="form-control input-lg"
                    name="username"
                    placeholder="Name"
                    required="required"
                    />
                </div>

                <div class="form-group">
                    <input
                    type="email"
                    class="form-control input-lg"
                    name="email"
                    placeholder="Email Address"
                    required="required"
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"></label>
                    <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Text"
                    ></textarea>
                </div>

                <button className="justify-content-end" type="submit">Submit</button>
                </form>
            </div>
     </div>
  );
};

export default Contract;
