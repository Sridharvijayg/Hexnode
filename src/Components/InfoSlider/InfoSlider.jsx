import React from 'react';
import './InfoSlider.css';
const InfoSlider = () => {
    return (
        <div className='SliderBox'>
            <div className='insideBox'>
                <img className='leftBanner' src={require("../../Images/project-img-3.jpg.png")} />
                <div>
                <div className='boxContent'>
                    <img src={require('../../Images/icon2.png')} alt="" />
                    <h2>Multi-App Kiosk</h2>
                    <p className='rightInfo'>Elevate efficiency with Multi-App Kiosk
                    Limit device access to approved apps, ensuring focus and productivity.</p>
                </div>
                <div className='flexEnd'>
                    <img src={require('../../Images/ArrowLink.png')} alt="" />
                </div>
                </div>
              
            </div>
            <div className='insideBox'>
            <img className='leftBanner' src={require("../../Images/project-img-3.jpg.png")} />
            <div>
                <div className='boxContent'>
                    <img src={require('../../Images/icon2.png')} alt="" />
                    <h2>Multi-App Kiosk</h2>
                    <p className='rightInfo'>Elevate efficiency with Multi-App Kiosk
                    Limit device access to approved apps, ensuring focus and productivity.</p>
                </div>
                <div className='flexEnd'>
                    <img src={require('../../Images/ArrowLink.png')} alt="" />
                </div>
                </div>
            </div>
            <div className='insideBox'>
            <img className='leftBanner' src={require("../../Images/project-img-3.jpg.png")} />
            <div>
                <div className='boxContent'>
                    <img src={require('../../Images/icon2.png')} alt="" />
                    <h2>Multi-App Kiosk</h2>
                    <p className='rightInfo'>Elevate efficiency with Multi-App Kiosk
                    Limit device access to approved apps, ensuring focus and productivity.</p>
                </div>
                <div className='flexEnd'>
                    <img src={require('../../Images/ArrowLink.png')} alt="" />
                </div>
                </div>
            </div>
        </div>
       
    );
};

export default InfoSlider;
