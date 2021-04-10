import React from 'react';
import appoint from '../../../images/Appointment.png';
import './AppointMent.css';

const AppointMent = () => {
    return (
        <section className="appointment-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={appoint} alt="" className="img-fluid"/>
                    </div>

                    <div className="col-md-7 py-5" style={{color: 'white'}}>
                        <h3 className="text-primary">APPOINTMENT</h3>
                        <h1 className="my-4">Make Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit autem expedita inventore adipisci quam <br/> repellendus, iusto doloribus labore, nulla quod consequuntur temporibus commodi eius culpa.</p>
                        <button className="btn-primary">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointMent;