import React from 'react';
import Exceptional from '../../../images/ExceptionalDental.png'

const ExceptionalDental = () => {
    return (
        <section className="pb-0 pb-md-5 my-5">
        <div className="container mb-5">
            <div className="row">
                <div className="col-md-6  mb-4 m-md-0">
                    <img src={Exceptional} alt="" className="img-fluid" style={{width: '95%'}}/>
                </div>
                <div className="col-md-6">
                    <h1>Exceptional Dental Care, on your Term</h1>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, molestiae voluptatum pariatur dolores debitis minus nihil minima et, nemo eum ipsum tempora cum iste repudiandae recusandae quibusdam porro? Exercitationem unde, deleniti neque fuga quae facilis voluptatem iste, soluta dolores corporis nam optio, asperiores similique tempore. Quas vel voluptatibus voluptates eligendi ipsum, ipsa error. Id ipsam fugit cum doloribus numquam iure illum ullam enim incidunt voluptate saepe culpa consequuntur laboriosam, vero magnam deleniti, maiores perferendis nulla molestiae eligendi. In veniam consequuntur repudiandae enim unde nostrum corporis at nihil eveniet totam blanditiis hic debitis fugit culpa distinctio amet magnam odit quia ea, veritatis praesentium officia ullam optio? Illum eveniet pariatur voluptatem sunt!</p>
                    <button className="btn btn-secondary bg-danger">Learn more</button>
                </div>
            </div>
        </div>
        </section>
    );
};

export default ExceptionalDental;