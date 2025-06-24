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
                <Col>
                <Image src="images/hbb1.jpeg" rounded height={"500rem"}width={"600rem"} />
                </Col>
              <Col>
                <Image src="images/hbb2.jpeg" rounded height={"500rem"}width={"600rem"} />
                </Col>
            </Row>
            <Row style={{marginTop:"2em"}}>
                 <Col>
                <Image src="images/hbg4.jpeg" rounded height={"500rem"}width={"600rem"} />
                </Col>
              <Col>
                <Image src="images/hbg7.jpeg" rounded height={"500rem"}width={"600rem"} />
                </Col>
             </Row>   
            </Container>
        </div>
        <Footer/>
        </>
    );
}

export default Gallery;