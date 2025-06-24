import { Container, Carousel, Row, Col, Button } from 'react-bootstrap';

const Content = () => {
    return (
        <div className="content">
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img src="images\dasarastateW.jpeg" alt="practice" text="First slide" />
                        {/* <Carousel.Caption  style={{backgroundColor:"black",padding:'-5px -55rem', borderRadius:"50px"}}>
                            <h3>Dasara State</h3>
                            <p>Champions in the dasara district meet at 2024.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="images\shankranthi2024.jpeg" alt="practice" text="Second slide" />
                        {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="/images/hbg6.jpeg" alt="Girls Team" text="Third slide" />
                        {/* <Carousel.Caption style={{backgroundColor:"black",padding:'-5px,5rem', borderRadius:"50px"}}>
                            <h3>Dasara girls team</h3>
                            <h5 >
                                Girls team had secured 3rd place in the Dasara state tournament held at mysore
                            </h5>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container className="my-5">
                <h1 className='Coaches'><u>Our Coaches</u></h1>
                <Row>
                    <Col md={4}>
                       <div className='Selva'>
                        <img src="/images/selva.jpeg" alt="Selva" className="img-fluid coach-img" />
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
                            <img src="/images/prashanth.jpeg" alt="prashanth" className="img-fluid coach-img"/>
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
                            <img src="/images/tilak.jpeg" alt="Tilak" className="img-fluid coach-img"/>
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