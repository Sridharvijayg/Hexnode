import './App.css';
import Navbar from './Components/Headers/Navbar';
import TrustedBy from './Components/Trusted By/TrustedBy';
import InfoSlider from './Components/InfoSlider/InfoSlider';
import GetStartedBanner from './Components/GetStartedBanner/GetStartedBanner';
import Platforms from './Components/Platforms/Platforms';
import Footer from './Components/Footer/Footer';
import AdditionalBanner from './Components/AdditionalBanner/AdditionalBanner';
import BrandLogo from './Components/BrandLogo/BrandLogo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TrustedBy/>
      <InfoSlider/>
      <AdditionalBanner/>
      <BrandLogo/>
      <GetStartedBanner/>
      <Platforms/>
      <Footer/>
    </div>
  );
}

export default App;
