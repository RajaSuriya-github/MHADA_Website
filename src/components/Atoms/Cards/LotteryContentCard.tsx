import Card from 'react-bootstrap/Card';
// import wallet from '../../../assets/wallet.svg';
import { FaCalendar } from 'react-icons/fa';
import { IoWallet } from 'react-icons/io5';
import './LotteryCard.scss'
function LotteryContentCard({title,applicationDate,paymentDate}:any) {
  return (
    <Card style={{ width: '20rem' }}>
      <div className='fakeimg'  />
      <Card.Body>
        <Card.Title>
            <div className='card-title1'>CS 01 Feb'24</div>
            <div className='card-title2'>{title}</div>
            </Card.Title>
        <div className='row'>
            <div className='col-6'><FaCalendar className='icon-color' /><span className='text-color'>Application Date</span></div><div className='col-6 date-text'>{applicationDate}</div>
            <div className='col-6 mt-1'><IoWallet className='icon-color'/><span className='text-color'>Payment Date</span></div><div className='col-6 mt-1 date-text'>{paymentDate}</div>
        </div>
        <div className='mt-2'>
        <button className='cm-btn'>Know More</button>
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default LotteryContentCard;