import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Accordin.scss';
function AccordinAlwaysOpen({list}:any) {
    const [visibleItems, setVisibleItems] = useState(3); // Number of items to show initially
    const loadMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + list.length); // Increment visible items by 2 (or any desired number)
      };
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
        
        {list.slice(0, visibleItems).map(({ title, content, id }:any) => (
            <>
            <Accordion.Item eventKey={id}>
            <Accordion.Header>{title}</Accordion.Header>
            <Accordion.Body>
             <p style={{color:"#747272"}}>{content}</p>
            </Accordion.Body>
          </Accordion.Item>
          </>
        ))}
       {visibleItems < list.length && (
        <div className='mobile-view'>
        <button className='cm-light-btn mt-4' onClick={loadMore}>Load More</button>
        </div>
      )}
    </Accordion>
  );
}

export default AccordinAlwaysOpen;