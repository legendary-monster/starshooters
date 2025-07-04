import { Row,Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Row className="footer">
        <Col xs={12} md={4} className="mb-3">
      <h5>Quick Link</h5><br/>
      <a href="/" className="text-white me-3">Home</a><br/>
      <a href="/about" className="text-white me-3">About Us</a><br/>
      <a href="/gallery" className="text-white me-3">Gallery</a><br/>
      <a href="/Login" className="text-white me-3">Players Details</a><br/>
      </Col>
        <Col xs={12} md={4} className="mb-3">
      <h5>Contact Us</h5><br/>
      <p className="mb-0"> 📧 Email: <a href="sshandballclub@gmail.com"className="text-white">sshandballclub@gmail.com</a>
      </p>
      <p className="mb-0">📞Phone: <a href="tel:+91 9902087910" className="text-white">+91 9902087910</a></p>
      <p className="mb-0">📍Address: <a href="https://maps.app.goo.gl/2YxJsmm7fW3T7GUP6" className="text-white" target='_blank' rel='noreferrer'> Star Shooters, Bangalore</a></p>
      </Col>
        <Col xs={12} md={4} className="mb-3">
      <h5>Follow Us</h5><br/>
      <a href="https://www.facebook.com/groups/1531842927082331/?ref=share&mibextid=NSMWBT" className="text-white me-3" target='_blank' rel='noreferrer' style={{marginLeft:"1rem"}}><img src="images/facebook.jpeg" alt="facebook" className="Social"/></a>
      <a href="https://www.youtube.com/@handballuniverse" className="text-white me-3" target='_blank' rel='noreferrer'><img src="images/youtube1.jpeg" alt="Youtube" className="Social"/></a>
      <a href="https://www.instagram.com/star_shooters_ss?igsh=MTBwY2lndXJzcmNtcA==" className="text-white me-3" target='_blank' rel='noreferrer'><img src="images/instagram.jpeg" alt="instagram" className="Social"/></a><br/>  
      </Col>  
      </Row>
        <p className="mb-0">© {new Date().getFullYear()} Star Shooters. All rights reserved.</p>
        {/* <p className="mb-0">Follow us on social media: 
          <a href="https://www.facebook.com/groups/1531842927082331/?ref=share&mibextid=NSMWBT" className="text-white ms-2" target='_blank' rel='noreferrer'>Facebook</a> | 
          <a href="https://www.youtube.com/@handballuniverse" className="text-white ms-2" target='_blank' rel='noreferrer'>Youtube</a> | 
          <a href="https://www.instagram.com/star_shooters_ss?igsh=MTBwY2lndXJzcmNtcA==" className="text-white ms-2" target='_blank' rel='noreferrer'>Instagram</a>
        </p><br/>
        <p><a href='https://maps.app.goo.gl/2YxJsmm7fW3T7GUP6' className="text-white ms-2" target='_blank' rel='noreferrer'>Find us on Google Maps</a></p> */}
    </footer>
  );
}

export default Footer;