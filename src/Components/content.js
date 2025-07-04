import { Container, Carousel, Row, Col,Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Content = () => {
    return (
        <div className="content">
            <Container>
               <h1 className="display-4 fw-bold text-center">Welcome to Star Shooters</h1><hr/><br/>
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
                </Carousel><br/><hr/>
            </Container>
            <Container className="my-5" style={{textAlign:"center", alignItems:"center"}}>
                {/* <h1 className='Coaches'><u>Our Coaches</u></h1> */}
            <Row className="profileCard1" style={{marginTop:"2rem",marginBottom:"2rem"}}>
                <Col xs={12} md={6} lg={4} className="profileCard">
                    <Image src="/images/selva.jpeg" className="img-fluid rounded coach-img" alt="Coach 1" style={{maxWidth: "300px", height: "300px", display: "inline",  borderRadius: "50%"}} />
                    <h3 style={{color:'black'}}>Selva</h3>
                    <p style={{color:"grey"}}>Secretary</p>
                    <p style={{color:'black'}}>Star Shooters</p>
                    <Link to="/selva"><button className='btn1'>Read more</button></Link>
                </Col >
                
                <Col xs={12} md={6} lg={4} className="profileCard">
                    <Image src="/images/prashanth.jpeg" className="img-fluid rounded coach-img" alt="Coach 2" style={{maxWidth: "300px", height: "300px", display: "inline",  borderRadius: "50%",}}/>
                    <h3>Prashanth</h3>
                    <p style={{color:"grey"}}>Joint Secretary</p>
                    <p style={{color:'black'}}>Star Shooters</p>
                    <Link to="/prashanth"><button className='btn1'>Read more</button></Link>
                </Col>
            </Row>
            <hr/>   
        </Container >
    </div >
  );
}

export default Content;