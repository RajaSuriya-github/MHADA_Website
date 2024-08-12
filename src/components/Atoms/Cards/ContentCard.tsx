import Card from 'react-bootstrap/Card';

function ContentCard({title,icon,content,col}:any) {
    console.log(title)
  return <Card
  bg={"Light"}
  key={'Light'}
  text={'dark'}
  
//   style={{ width: '18rem' }}
  className={`${col}`}
>
  {/* <Card.Header>Header</Card.Header> */}
  <Card.Body>
    <div className='py-2'>
    <img src={icon} alt=""/>
    </div>
    <Card.Title>
        <span className='font-size-ctn'>{title}</span>
        </Card.Title>
    <Card.Text>
        <p className='font-size-inner-ctn'>{content}</p>
    </Card.Text>
  </Card.Body>
</Card>
}

export default ContentCard;