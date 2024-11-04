import React from 'react';
import './AdditionalBanner.css';
const AdditionalBanner = () => {
    return (
      <div className='additional'>
        <div className='leftContent'>
            <h1>What additional possibilities does the Kiosk mode offer?</h1>
            <p>
            We provide a multichannel, frictionless, intelligent solution that prioritizes business benefits
            and enhances customer experience.
            </p>
        </div>
        <div className='rightContent'>
            <div className='box'>
                <img src={require('../../Images/add1.png')} alt="" />
                <h5>Effortless kiosk deployment & management</h5>
                <p>Deploy kiosk-enabled devices straight out of the box. </p>
                <img src={require('../../Images/arrowbtn.png')} alt="" />
            </div>
            <div className='box'>
            <img src={require('../../Images/add2.png')} alt="" />
                <h5>Customized interface for brand visibility</h5>
                <p>Deploy kiosk-enabled devices straight out of the box. </p>
                <img src={require('../../Images/arrowbtn.png')} alt="" />
            </div>
            <div className='box'>
            <img src={require('../../Images/add3.png')} alt="" />
                <h5>Effortless kiosk deployment & management</h5>
                <p>Deploy kiosk-enabled devices straight out of the box. </p>
                <img src={require('../../Images/arrowbtn.png')} alt="" />
            </div>
            <div className='box'>
            <img src={require('../../Images/add4.png')} alt="" />
                <h5>Effortless kiosk deployment & management</h5>
                <p>Deploy kiosk-enabled devices straight out of the box. </p>
                <img src={require('../../Images/arrowbtn.png')} alt="" />
            </div>
        </div>
      </div>
    );
};

export default AdditionalBanner;
