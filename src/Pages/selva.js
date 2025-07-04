import {Row, Col, Container} from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Selva = () => {
    return (
         <>
        <Header/>
        <Container className="selva-container">   
        <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
            <img src="/images/selva.jpeg" alt="selva" className="coachesPhoto" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
            <h1 className="display-4 fw-bold mt-5">Selva</h1>
            <h3 className="text-muted">Secretary, Star Shooters Handball Club</h3>
            <p className="pdata">As the Secretary of this dynamic and passionate club, it gives me immense pride to share our journey and invite you into the energetic world of handball. Our club is more than just a team-it's a vibrant community built on teamwork, resilience, and an unshakable love for the sport.<br/><br/>
Since our founding, we've been driven by one mission: to nurture talent, promote sportsmanship, and elevate the spirit of handball in our region and beyond. With a committed coaching staff, dedicated players, and an enthusiastic support base, we strive to create an environment that encourages growth-both on and off the court</p>
            </Col>
        </Row>
        </Container>
        <Footer/>
        </>
    );
}

export default Selva;