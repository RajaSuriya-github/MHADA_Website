import Card from 'react-bootstrap/esm/Card';
const MhadaCard = ({ image, title, text, hashtag }: any) => {
    return (
        <Card style={{  borderRadius: "0px",width: "18rem",filter: "drop-shadow(0 0 0.1rem #e87e2c)" }} className='mt-4'>
            <div className='p-3'>
                <h3>{title}</h3>
                <p>{text}</p>
                <p>{hashtag}</p>
            </div>
            <div className='p-2'>
                <img className="img-fluid" src={image} alt={title} />
            </div>
        </Card>
    );
};

export default MhadaCard;
