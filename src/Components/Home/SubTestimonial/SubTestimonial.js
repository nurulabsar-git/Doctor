import React from 'react';

const SubTestimonial = (props) => {
    const {paragraph, name, location, img} = props.testimonial;
    return (
        <section className="card shadow-sm">
            <div className="card-body">
               <p>{paragraph}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <img src={img}  style={{width: '22%'}} alt=""/>
                <div>
                    <h3>{name}</h3>
                    <h4>{location}</h4>
                </div>
            </div>
        </section>
    );
};

export default SubTestimonial;