import {Row, Col, Container,Image} from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Prashanth = () => {
    return (
        <>
        <Header/>
        <Container className="prashanth-container">   
        <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
            <Image src="/images/prashanth2.jpeg" alt="Prashanth" className="coachesPhoto" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
            <h1 className="display-4 fw-bold mt-5">Prashanth</h1>
            <h3 className="text-muted">Joint Secretary, Star Shooters Handball Club</h3>
            <p className="pdata">At our club, handball is more than a sport-it's a way of life. We believe in teamwork, discipline, and the relentless pursuit of excellence both on and off the court. Whether you're a seasoned player, a curious beginner, or a dedicated fan, you'll find your place here.<br/><br/>
As Joint Secretary, my role bridges organization and inspiration. I help coordinate events, oversee smooth club operations, and support our mission to nurture talent and sportsmanship. I'm committed to ensuring every member feels seen, heard, and empowered to grow-because great teams are built on strong connections.</p>
            </Col>
        </Row>
        </Container>
        <Footer/>
        </>
    );
}

export default Prashanth;