import React from "react";
import repair from "../../images/repair.jpeg";

const HeaderMain = () => {
  return (
    <div className="row p-5 background-brand ">
      <div className="col-md-6">
        <h1 className="text-brand">
          Welcome to Computer <br /> service center!
        </h1>
        <p className="text-brand">
          We deliver high-quality computer repair services. professional
          customer service Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Ex, quod. Laborum quisquam quae culpa nihil suscipit distinctio
          voluptatibus, vel esse?
        </p>
        <button className="btn-brand">Learn More</button>
      </div>
      <div className="col-md-6 ">
        <img className="rounded" style={{ width: "100%" }} src={repair} alt="" />
      </div>
    </div>
  );
};

export default HeaderMain;
