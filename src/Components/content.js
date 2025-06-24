import react from 'react';
import { Container, Carousel, Row, Col, Card, Button } from 'react-bootstrap';

const Content = () => {
    return (
        <div className="content">
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img src="/slide1.webp" alt="practice" text="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/slide2.webp" alt="practice" text="Second slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/slide3.webp" alt="practice" text="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container className="my-5">
                <h1 className='Coaches'><u>Our Coaches</u></h1>
                <Row>
                    <Col md={4}>
                       <div className='Selva'>
                        <img src="/selva.jpeg" alt="Selva" className="img-fluid coach-img" />
                            <h3>Selva</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Button variant="outline-dark">Learn More</Button>
                       </div>
                    </Col>
                     <Col md={4}>
                        <div className='Prashanth'>
                            <img src="/prashanth.jpeg" alt="prashanth" className="img-fluid coach-img"/>
                            <h3>Prashanth</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Button variant="outline-dark">Learn More</Button>    
                            </div>
                    </Col>
                     <Col md={4}>
                        <div className="Tilak">
                            <img src="tilak.jpeg" alt="Tilak" className="img-fluid coach-img"/>
                            <h3>TILAK</h3>      
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Button variant="outline-dark">Learn More</Button>    
                            
                            </div>
                    </Col>
            </Row>
        </Container >
    </div >
  );
}

export default Content;