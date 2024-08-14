import Carousel from 'react-bootstrap/Carousel';
export const CarouselComp=()=>(<Carousel>
<Carousel.Item>
 <img src="https://i0.wp.com/theconstructor.org/wp-content/uploads/2014/10/Residential-building.jpg?fit=1158%2C690&ssl=1" className="d-block w-100 h-50" style={{maxHeight: "500px",minHeight: "480px"}} alt="..."/>
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img src="https://i0.wp.com/theconstructor.org/wp-content/uploads/2014/10/Residential-building.jpg?fit=1158%2C690&ssl=1" className="d-block w-100 h-50" style={{maxHeight: "500px",minHeight: "480px"}} alt="..."/>

  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img src="https://i0.wp.com/theconstructor.org/wp-content/uploads/2014/10/Residential-building.jpg?fit=1158%2C690&ssl=1" className="d-block w-100 h-50" style={{maxHeight: "500px",minHeight: "480px"}} alt="..."/>

  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>);