import React from 'react';
import Testimonial from '../../Testimonial/Testimonial';
import AppointMent from '../AppointMent/AppointMent';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';
import Header from '../Header/Header';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <AppointMent></AppointMent>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;