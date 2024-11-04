import React from 'react';
import './Navbar.css';
import RightImage from '../../Images/Rigth-image.png'

const Navbar = () => {
    return (
        <div>
          <nav className="navbar">
            <div className="navbar-logo">hexnode</div>
            <div className="navbar-links">
                <a className='headerText'><span className='bold'>New Launch:</span>Hexnode FlexiDMS for multi-brand distributors</a>
            <button className="navbar-trial-btn">14 DAY FREE TRIAL</button>
            </div>
        </nav>
        <div className='relative'>
        <section className="hero">
            <div className='leftContent'>
            <h1>Turn your devices into kiosks in a few minutes with Hexnode UEM</h1>
          <p>Enhance supply chain visibility and optimize distribution efficiency while gaining valuable insights.</p>
          <div className="hero-buttons">
              <button className="get-started">Get Started Now</button>
              <button className="watch-video">Watch Video</button>
          </div>
            </div>
          <img src={RightImage} alt="Devices" className="hero-image" />
      </section>
        </div>
         
        </div>
    );
};

export default Navbar;
