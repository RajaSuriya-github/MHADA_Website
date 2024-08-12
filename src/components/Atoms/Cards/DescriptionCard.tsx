const DescriptionCard = ({ description, satisfied }:any) => {
    return (
      <div style={{ padding: '20px' }}>
        <p>{description}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="user-icons.png" alt="Users" style={{ marginRight: '10px' }} />
          <span>{satisfied}</span>
        </div>
      </div>
    );
  };
  
  export default DescriptionCard;