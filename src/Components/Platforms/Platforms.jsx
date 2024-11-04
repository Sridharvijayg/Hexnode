import React from 'react';
import './Platforms.css';
const Platforms = () => {
    return (
        <div>
            <h1 className='headTitle'>Platforms We supported</h1>
            <div className='mainContainer'>
                <div className='insideContainer gap'>
                    <img src={require('../../Images/image1.png')} alt="" />
                    <h3>Android</h3>
                </div>
                <div className='insideContainer'>
                <img src={require('../../Images/image2.png')} alt="" />
                <h3>Windows</h3>
                </div>
                <div className='insideContainer gap'>
                <img src={require('../../Images/image3.png')} alt="" />
                <h3>Ios</h3>
                </div>
                <div className='insideContainer gap'>
                <img src={require('../../Images/image4.png')} alt="" />
                <h3>Android Tv</h3>
                </div>
                <div className='insideContainer gap'>
                <img src={require('../../Images/image5.png')} alt="" />
                <h3>Apple Tv</h3>
                </div>
                <div className='insideContainer gap'>
                <img src={require('../../Images/image6.png')} alt="" />
                <h3>Fire</h3>
                </div>
            </div>
        </div>
    );
};

export default Platforms;
