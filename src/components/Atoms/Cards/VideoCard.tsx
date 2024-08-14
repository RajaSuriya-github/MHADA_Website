import './VideoCard.scss';

const VideoCard = () => {
  return (
    <div
    style={{ height:"300px" }} 
    className="video-card col-sm-8 col-md-4 col-xl-4">
       <video className="w-100 br-10" autoPlay loop muted controls>
      <source
        src="https://mdbootstrap.com/img/video/animation-intro.mp4"
        type="video/mp4"
        />
    </video>
      {/* <div className="video-container">
        <video className="video" controls>
          <source src="your-video-source.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="play-button">
          <i className="fas fa-play"></i>
        </div>
      </div> */}
      </div>
  );
};

export default VideoCard;
