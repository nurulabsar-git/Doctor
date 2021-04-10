import React from 'react';
import chair from '../../../images/Chair.png'

const HeaderMain = () => {
    return (
      <main className="row d-flex align-items-center" style={{height: '600px'}}>
          <div className="col-md-4 offset-md-1">
          <h2 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here</h2>
          <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, alias.</p>
          <button className="btn btn-primary">GET APPOINTMENT</button>
          </div>
          <div className="col-md-6">
              <img src={chair} alt="" className="img-fluid"/>
          </div>
      </main>
    );
};

export default HeaderMain;