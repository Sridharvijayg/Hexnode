import React from 'react';
import './GetStartedBanner.css';
const GetStartedBanner = () => {
    return (
            <div className='full-box'>
                <div>
                <h1>Sign up and try Hexnode free for 14 days!</h1>
                <p>Talk to our experts to see how Botree Software empowers your brand.</p>
                <button className='btn'>Get Started</button>
                </div>
                <div>
                <img className='img' src={require('../../Images/bannerimage.png')}  />
                </div>
            </div>
      
    );
};

export default GetStartedBanner;
