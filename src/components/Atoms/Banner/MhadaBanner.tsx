import './MhadaBanner.scss'; // Assuming you are using SCSS for styling

const MhadaBanner = () => {
  return (
    <div className="mhada-banner">
      <div className="mhada-header">
        <h3>@mhadaofficial</h3>
        <p>Dreams come true with the MHADA Lottery! #MhadaLottery</p>
      </div>
      <div className="mhada-content">
        <div className="mhada-images">
          <div className="image image-1"></div>
          <div className="image image-2"></div>
          <div className="image image-3"></div>
        </div>
        <div className="mhada-text">
          <h2>आनंदाची बातमी</h2>
          <p>महाव मुंबई मंडळासाठी 173 प्रगणांच्या गाळ्यांच्या विक्रीसाठी</p>
          <p>27 जुन 2024 रोजी होणार ई-लिलाव</p>
        </div>
      </div>
    </div>
  );
};

export default MhadaBanner;
