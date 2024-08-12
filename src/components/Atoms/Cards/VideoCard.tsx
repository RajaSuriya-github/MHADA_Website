import './VideoCard.scss';

const VideoCard = () => {
  return (
    <div className="video-card">
      <video className="video col-4" controls>
        <source src="your-video-source.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="play-button">
        <i className="fas fa-play"></i>
      </div>
    </div>
  );
};

export default VideoCard;
