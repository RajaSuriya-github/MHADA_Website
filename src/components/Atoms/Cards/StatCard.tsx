import './StatsCard.scss';

const StatsCard = () => {
  return (
    <div className="stats-card">
      <div className="stat-item">
        <span className="stat-value">50 <span className="stat-plus">+</span></span>
        <span className="stat-label">Completed Projects</span>
      </div>
      {/* <div className="stat-item">
        <span className="stat-value">15,000 <span className="stat-plus">+</span></span>
        <span className="stat-label">Homes Financed</span>
      </div> */}
    </div>
  );
};

export default StatsCard;
