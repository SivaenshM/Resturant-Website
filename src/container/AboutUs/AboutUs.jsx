import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter"/>
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="spoon img" className='spoon__image'/>
        <p className='p__opensans'>Maecenas mattis imperdiet lorem, aliquet lobortis mauris ullamcorper vitae. Fusce metus mi, cursus non ultrices sit amet, ultrices at diam. Vivamus massa lacus, finibus eu semper sed, lacinia a diam.</p>
        <button type='button' className='custom__button'> Know More</button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="spoon img" className='spoon__image'/>
        <p className='p__opensans'>Maecenas mattis imperdiet lorem, aliquet lobortis mauris ullamcorper vitae. Fusce metus mi, cursus non ultrices sit amet, ultrices at diam. Vivamus massa lacus, finibus eu semper sed, lacinia a diam.</p>
        <button type='button' className='custom__button'> Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
