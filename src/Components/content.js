import { Container, Row, Col,Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Content = () => {
    return (
        <div className="content">
            {/* <Container> */}
               <h1 className="display-4 fw-bold text-center">Welcome to Star Shooters</h1><hr/><br/>
                        <video autoPlay loop muted playsInline width="100%" height="60%" style={{borderRadius: "10px",textAlign:"center", alignItems:"center", display:"block", margin:"0 auto"}}>
  <source src="images/home.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

            {/* </Container> */}
            <Container className="my-5" style={{textAlign:"center", alignItems:"center"}}>
                {/* <h1 className='Coaches'><u>Our Coaches</u></h1> */}
            <Row className="profileCard1" style={{marginTop:"2rem",marginBottom:"2rem"}}>
                <Col xs={12} md={6} lg={4} className="profileCard">
                    <Image src="/images/selva2.jpeg" className="img-fluid rounded coach-img" alt="Coach 1" style={{maxWidth: "300px", height: "300px", display: "inline",  borderRadius: "50%"}} />
                    <div style={{textAlign:"center"}}>
                    <h3 style={{color:'black'}}>Selva</h3>
                    <p style={{color:"grey"}}>Secretary</p>
                    <p style={{color:'black'}}>Star Shooters</p>
                    <Link to="/selva"><button className='btn1'>Read more</button></Link>
                    </div>
                </Col >
                
                <Col xs={12} md={6} lg={4} className="profileCard">
                    <Image src="/images/prashanth2.jpeg" className="img-fluid rounded coach-img" alt="Coach 2" style={{maxWidth: "300px", height: "300px", display: "inline",  borderRadius: "50%",}}/>
                    <h3>Prashanth</h3>
                    <p style={{color:"grey"}}>Joint Secretary</p>
                    <p style={{color:'black'}}>Star Shooters</p>
                    <Link to="/prashanth"><button className='btn1'>Read more</button></Link>
                </Col>
            </Row>
            <hr/>  
            
        </Container >
        {/* <Image src="/images/homeImage.jpeg" alt="Star Shooters Logo" className="img-fluid rounded logo" style={{maxWidth: "100%", height: "100%", display: "block", margin: "0 auto"}} /> */}
    </div >
  );
}

export default Content;