import React from 'react';
import Contract from '../Contract/Contract';
import Footer from '../Footer/Footer';
import Client from '../Header/Client/Client';
import Header from '../Header/Header';
import OurMission from '../OurMission/OurMission';
import OurService from '../OurService/OurService';
import Testimonial from '../Testipmnial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurService></OurService>
            <OurMission></OurMission>
            <Testimonial></Testimonial>
            <Client></Client>
            <Contract></Contract>
            <Footer></Footer>
        </div>
    );
};

export default Home;