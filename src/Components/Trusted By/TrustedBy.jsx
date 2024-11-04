import React from 'react';
import './TrustedBy.css';
const TrustedBy = () => {
    return (
        <>
         <div className='full-w'>
            <section className="trusted-by">
           <div className='InBox'>
           <div className="trusted-logo">
                <img src={require("../../Images/icon1.png")} alt="IDC" width={77} height={77}/>
                <p className='titleBold'>IDC</p>
            </div>
            <p className='infoText'>Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.</p>
           </div>
           <div className='InBox'>
           <div className="trusted-logo">
                <img src={require("../../Images/icon2.png")} alt="Gartner" width={77} height={77} />
                <p className='titleBold'>Gartner</p>
            </div>
            <p className='infoText'>Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.</p>
           </div>
           <div>
           <div className="trusted-logo">
                <img src={require("../../Images/icon3.png")} alt="Forrester" width={77} height={77} />
                <p className='titleBold'>Forrester</p>
            </div>
            <p className='infoText'>Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.</p>
           </div>
           
        </section>
        </div>
        <div className='textSentence'>
            <h2>Specific kiosk modes for unique use cases</h2>
            <p>We provide a multichannel, frictionless, intelligent solution that prioritizes business benefits
            and enhances customer experience.</p>
        </div>
        </>
       
    );
};

export default TrustedBy;
