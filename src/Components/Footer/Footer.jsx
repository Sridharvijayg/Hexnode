import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
     <div className='footer'>
        <div className='insideFooter'>
            <div className='inboxDiv'>
                <p className='info'>
                Get Our Latest's News & Updates
                </p>
                <div className='search'>
                    <div className='iconBox'>
                    <img src={require('../../Images/iconMsg.png')} alt="" />
                    <input className='searchBox' type="text" placeholder='Enter email address' />
                    </div>
                    <img className='sendButton' src={require('../../Images/sendButton.png')} alt="" />
                </div>
            </div>
            <div className='lineDiv'></div>
            <div className='footerDetails'>
                <div className='col'>
                    <img src={require('../../Images/logo.png')} alt="" />
                    <p>Enhance supply chain visibility and optimize distribution efficiency while
                    gaining valuable insights.</p>
                    <div className='social'>
                        <div className='circle'>
                            <img src={require("../../Images/facebook.png")} alt="" />
                        </div>
                        <div className='circle'>
                            <img src={require("../../Images/X.png")} alt="" />
                        </div>
                        <div className='circle'>
                            <img src={require("../../Images/insta.png")} alt="" />
                        </div>
                        <div className='circle'>
                            <img src={require("../../Images/In.png")} alt="" />
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <h4>Home</h4>
                    <ul>
                        <li>Overview</li>
                        <li>Case Studies</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className='col'>
                    <h4>Feature</h4>
                    <ul>
                        <li>Busines</li>
                        <li>Customers</li>
                        <li>Partners</li>
                        <li>Discover</li>
                        <li>Recruitment</li>
                    </ul>
                </div>
                <div className='col'>
                    <h4>Contact Us</h4>
                    <ul>
                        <li className='iconAddress'>
                            <img src={require('../../Images/phone.png')} alt="" />
                            <span>+91 44-47741229</span>
                        </li>
                        <li className='iconAddress'>
                            <img src={require('../../Images/msg.png')} alt="" />
                            <span>Hexnode.in</span>
                        </li>
                        <li className='iconAddress'>
                            <img src={require('../../Images/location.png')} alt="" />
                            <span>1234 North Avenue Luke
                            Lane, South Bend,</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='copyRigth'>
                <p>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
            </div>
        </div>
     </div>
    );
};

export default Footer;
