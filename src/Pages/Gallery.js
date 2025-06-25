import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Container,Row,Col,Image } from 'react-bootstrap';

const Gallery = () => {
    return (
        <>
        <div className="gallery-page" style={{height:"160vh"}}>
            <Header/>
            <Container>
            <h1>Gallery Page</h1>
            <p>This is the gallery page our teams.</p>
            <Row>
                <Col style={{marginTop:"2em"}}>
                <Image src="images/hbb1.jpeg" classname="img-fluid rounded shadow border" xs={6} md={4} style={{ maxWidth: '100%', height: 'auto' }}/>
                </Col>
              <Col style={{marginTop:"2em"}}>
                <Image src="images/hbb2.jpeg" classname="img-fluid rounded shadow border" xs={6} md={4} style={{ maxWidth: '100%', height: 'auto' }}/>
                </Col>
            </Row>
            <Row >
                 <Col style={{marginTop:"2em"}}>
                <Image src="images/hbg4.jpeg"  classname="img-fluid rounded shadow border" xs={6} md={4} style={{ maxWidth: '100%', height: 'auto' }}/>
                </Col>
              <Col style={{marginTop:"2em",marginBottom:"2rem"}}>
                <Image src="images/hbg7.jpeg" classname="img-fluid rounded shadow border" xs={6} md={4} style={{ maxWidth: '100%', height: 'auto' }}/>
                </Col>
             </Row>   
            </Container>
            <Footer/>
        </div>
        
        </>
    );
}

export default Gallery;