import React from 'react';
import Fluoride from '../../../images/Fluoride.png';
import Cavity from '../../../images/Cavity.png';
import Whitening from '../../../images/Whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride
    },

    {
        name: 'Cavity Filling',
        img: Cavity
    },
    {
        name: 'Teeth Whitening',
        img: Whitening
    }
]
    

const Services = () => {
    return (
        <section className="services-container m-5 pt-5">
            <div className="text-center">
            <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
          <div className="w-75 row m-5 pt-5">
          {
              servicesData.map(service => <ServiceDetails service ={service}></ServiceDetails>)  
            }
          </div>
        </div>
        </section>
    );
};

export default Services;