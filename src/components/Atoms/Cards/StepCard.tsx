import './StepCard.scss'; 
const StepCard = ({stepNo,stepHeading,list,image,altName,col}:any) => {
  return (
    <div className={`step-card ${col} ${(stepNo===2)&&`mtop-5`}`}>
      <h4 className="step-title">{`Step ${stepNo}`}</h4>
      <h2 className="step-heading">{stepHeading}</h2>
      <ul className="step-list">
       {list.map((e:string)=>(<li key={e}>{e}</li>))}
      </ul>
      <div className="step-image">
        <img src={image} alt={altName} />
      </div>
    </div>
  );
};

export default StepCard;
