import {Row,Col, Container} from 'react-bootstrap'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const AboutUs = () => {
    return(
        <>
        <Header/>
        <Container>
        <div className="about-hero text-center bg-light py-5">
  <h1 className="display-4 fw-bold">About Star Shooters</h1>
  <p className="lead">Empowering athletes through passion, performance, and purpose.</p>
</div>
<Row className="align-items-center my-5">
  <Col md={4}>
    <img src="/images/hbb2.jpeg" alt="Our Team" className="img-fluid rounded shadow" style={{width: 'auto',
          height: '400px',
          margin:'auto'}} />
  </Col>
  <Col md={8}>
    <h2>Our Journey</h2>
    <p>
      Founded in 1993, Star Shooters has been a beacon of excellence in sports education and training.
      Our goal is to nurture talent, instill discipline, and push athletes to achieve their personal best.
    </p>
  </Col>
</Row>
</Container>
<div className="text-center my-5">
  <h2><u>Our Achievements</u></h2>
</div>

<Row>
  <Col md={4}>
    <div className="p-3 shadow-sm rounded bg-white mb-4 text-center">
      <h4>🏆 District Champions</h4>
      <p>Winners of the 2023 Bangalore District Tournament</p>
    </div>
  </Col>
  <Col md={4}>
    <div className="p-3 shadow-sm rounded bg-white mb-4 text-center">
      <h4>🥇 Best Coaching Staff</h4>
      <p>Awarded by Karnataka State Sports Board</p>
    </div>
  </Col>
  <Col md={4}>
    <div className="p-3 shadow-sm rounded bg-white mb-4 text-center">
      <h4>💪 100+ Students Trained</h4>
      <p>With many now playing at state and national level</p>
    </div>
  </Col>
</Row>
<Footer/>

        </>
    )
}

export default AboutUs;