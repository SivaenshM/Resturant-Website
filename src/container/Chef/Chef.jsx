import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef"/>
    </div>
    <div className="app__wrapper_info">
      <SubHeading title='Chef,s Word'/>
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>Aenean sed dui ac ex aliquet vulputate vehicula non lacus. Phasellus consequat suscipit velit, vel viverra quam. Curabitur sed placerat sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <p className="p__opensans">In sed dictum neque.Nulla bibendum nec ligula in molestie. Curabitur mollis mauris at elit ornare ornare. Etiam et risus enim. Aenean sollicitudin leo a massa cursus commodo.</p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
