import React from 'react';
import missionimg from '../../images/rep.jpeg'

const OurMission = () => {
    return (
        <div className="ml-4 background-brand pt-3">
            <h1 style={{color:'#5352ed'}}>Our Mission</h1>
            <div className="row">
                <div className="col-md-6 p-5 ">
                    <img className="offset-md-1" style={{width:'100%'}} src={missionimg} alt=""/>
                </div>
                <div className="col-md-6 p-5 ">
                    <h1>A team of seasoned tech experts</h1>
                    <p>Our mission is to provide innovative repair services for your computers, laptops, and other high-tech devices and gadgets. We also aim to give you excellent customer service and quality repair with a quick turnaround. We strive to get you back to normal use of your device as soon as possible without the need to overpay for our services.</p>
                    <button className="btn-brand">Read more..</button>
                </div>
            </div>
        </div>
    );
};

export default OurMission;