import React from 'react';
import herry from '../../images/Herry.png';
import Sabnur from '../../images/Savnur.png';
import Mahi from '../../images/Mahi.png';
import SubTestimonial from '../Home/SubTestimonial/SubTestimonial';
import Whitening from '../../images/Whitening.png'

const TestimonialData = [
    {
        paragraph : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        location : 'California',
        img : herry
    },
    {
        paragraph : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Sabnur Herry',
        location : 'America',
        img : Sabnur
    },
    {
        paragraph : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Mahia Mahi',
        location : 'Bangladesh',
        img : Mahi
    }
]

const Testimonial = () => {
    return (
       <main>
            <section className="m-5 p-5">
              <div className="row">
              <div className="col-md-10">
                    <h3>Testimonial</h3>
                    <h1>What Our Patients <br/> Says</h1>
                </div>
                <div className="col-md-2">
                   <img src={Whitening} alt="" style={{width: '20%'}}/>
                </div>
              </div>
            </section>
             <section>
             <div className="d-md-flex shadow-sm p-3 m-5 bg-body rounded" style={{justifyContent: 'space-around'}}>
             {
                  TestimonialData.map(testimonial => <SubTestimonial testimonial={testimonial}></SubTestimonial>)
              }
             </div>
            </section>
    </main>

    );
};

export default Testimonial;