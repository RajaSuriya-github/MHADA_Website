import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.scss';
import image1 from '../../../assets/image1.jpg'; // Placeholder for the first carousel image
import image2 from '../../../assets/image2.jpg'; // Placeholder for the second carousel image
import image3 from '../../../assets/image3.jpg'; // Placeholder for the third carousel image

const Banner = () => {
  return (
    <div className="banner" style={{height:"300px"}}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={1000}
      >
        <div>
          <img src={image1} alt="Building 1" />
        </div>
        <div>
          <img src={image2} alt="Building 2" />
        </div>
        <div>
          <img src={image3} alt="Building 3" />
        </div>
      </Carousel>
      {/* <div className="banner-content">
        <h1>Elevate your living standards with</h1>
        <h1 className="highlight">MHADA</h1>
        <button className="banner-button">View Lottery Schemes</button>
      </div>
      <div className="banner-stats">
        <div className="stats">
          <h2>50 +</h2>
          <p>Completed Projects</p>
        </div>
        <div className="stats">
          <h2>15,000 +</h2>
          <p>Homes Financed</p>
        </div>
        <div className="vision">
          <p>A Vision for Livable, Sustainable, and Affordable Living</p>
          <div className="satisfied-customers">
            <div className="customer-avatars">
              {/* Avatars can be added here 
            </div>
            <p>95% Satisfied Customers</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
