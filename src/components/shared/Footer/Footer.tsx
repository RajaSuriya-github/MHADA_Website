import appleStore from '../../../assets/AppleStore.svg';
import FBLogo from '../../../assets/FBLogo.svg';
import googlePlayStore from '../../../assets/googlePlay.svg';
import instaLogo from '../../../assets/instaLogo.svg';
import linkedInLogo from '../../../assets/linkedInLogo.svg';
import logo from '../../../assets/MhadaSmallLogo.svg'; // Update the path to your logo image
import xLogo from '../../../assets/xLogo.svg';
import youTubeLogo from '../../../assets/youTubeLogo.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer custom-px">
      <div className='container'>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
      <p>Stay connected with us for the latest MHADA updates</p>
      <h1>Your dream home awaits!</h1>
      </div>
      <div className='col-sm-12 col-md-6'>
        <form className='d-flex justify-content-end gap-3'>
          <input type='email' name="email" placeholder='Enter your email'/>
          <button type="submit" className='subscribe-btn'>Subscribe</button>
        </form>
      </div>
      </div>
      <hr/>
      <div className='footer-content mt-4'>
        <div className='row'>
      <div className="logo-section col-sm-12 col-md-3">
          <img src={logo} alt="MHADA Logo" />
        </div>
        <div className='footer-middle col-sm-12 col-md-9'>
        <div className="footer-column ">
          <h3>Boards</h3>
          <ul>
            <li><a href="#">Mumbai Board</a></li>
            <li><a href="#">M.B.R.R Board</a></li>
            <li><a href="#">M.S.I Board</a></li>
            <li><a href="#">Konkan Board</a></li>
            <li><a href="#">Nashik Board</a></li>
            <li><a href="#">Pune Board</a></li>
            <li><a href="#">Chhatrapati Sambhajinagar Board</a></li>
            <li><a href="#">Nagpur Board</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Lottery Schemes</h3>
          <ul>
            <li><a href="#">Lottery Schemes 2024</a></li>
            <li><a href="#">Lottery Schemes 2023</a></li>
            <li><a href="#">Lottery Schemes 2022</a></li>
            <li><a href="#">Lottery Schemes 2021</a></li>
            <li><a href="#">Lottery Schemes 2020</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Applications</h3>
          <ul>
            <li><a href="#">New Application</a></li>
            <li><a href="#">Accepted Application</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Results</h3>
          <ul>
            <li><a href="#">Results 2024</a></li>
            <li><a href="#">Results 2023</a></li>
            <li><a href="#">Results 2022</a></li>
            <li><a href="#">Results 2021</a></li>
            <li><a href="#">Results 2020</a></li>
            <li><a href="#">Archives</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Get the app</h3>
          <ul>
            <li><a href="#">
                <img src={googlePlayStore} className='img-fluid' alt="Google Play" />
                </a></li>
            <li><a href="#">
                <img src={appleStore} className='img-fluid' alt="App Store" />
                </a></li>
          </ul>
        </div>

        </div>
        <hr/>
        <div className="footer-bottom">
        <p>© 2023 MHADA Inc. All rights reserved.</p>
        <div className='bottom-right-align'>
        <div className="links">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
        </div>
        <div className="social-icons">
          <a href="#"> <img src={instaLogo} className='img-fluid' alt="instaLogo" /></a>
          <a href="#"> <img src={FBLogo} className='img-fluid' alt="FbLogo" /></a>
          <a href="#"> <img src={linkedInLogo} className='img-fluid' alt="LinkedInLogo" /></a>
          <a href="#"> <img src={xLogo} className='img-fluid' alt="twitter" /></a>
          <a href="#"> <img src={youTubeLogo} className='img-fluid' alt="You Tube Logo" /></a>
        </div>
        </div>
        
      </div>
      </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
