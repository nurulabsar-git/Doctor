import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Call us now',
        description: '+15635454124',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faPhone,
        background: 'primary'
    }
]


const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
          <div className="w-75 row">
          {
              infosData.map(info => <InfoCard info ={info}></InfoCard>)  
            }
          </div>
        </section>
    );
};

export default BusinessInfo;