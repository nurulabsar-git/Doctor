import React from 'react';
import appoint from '../../../images/Appointment.png';

const AppointMent = () => {
    return (
        <section className="d-md-flex justify-content-center m-5 p-5">
            <div className="col-md-5 offset-md-1">
              <img src={appoint} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6">
               <h3 style={{color: '#11D0E0'}}>APPOINTMENT</h3>
               <h1>Make Appointment <br/> Today</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit autem expedita inventore adipisci quam <br/> repellendus, iusto doloribus labore, nulla quod consequuntur temporibus commodi eius culpa.</p>
               <button className="btn-secondary">Learn more</button>
            </div>
        </section>
    );
};

export default AppointMent;