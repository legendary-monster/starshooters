import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Container,Row,Col} from 'react-bootstrap';
// import ReactPlayer from 'react-player';

const Gallery = () => {
    return (
        <>
        <div className="gallery-page" style={{height:"160vh"}}>
            <Header/>
            <Container>
            <h1>Gallery Page</h1>
            <p>This is the gallery page our teams.</p>
  <Row style={{marginBottom:"1rem"}}>
  {[
    "hbb1.jpeg", "hbb2.jpeg", "hbg4.jpeg", "hbg7.jpeg","hbg3.jpeg",
    "hbb3.jpeg", "hbg1.jpeg", "hbb4.jpeg", "hbb5.jpeg","shankranthi2024.jpeg","dasarastateW.jpeg","hbg6.jpeg"
  ].map((file, index) => (
    <Col key={index} xs={12} sm={6} md={4} lg={3} style={{ marginTop: "2em" }}>
      <img
        src={`images/${file}`}
        className="img-fluid rounded shadow border"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          display: 'block'
        }}
        alt={`Gallery ${index + 1}`}
      />
    </Col>
  ))}
</Row>
<Row>
  {["video1.mp4", "video2.mp4"].map((file, index) => (
    <Col key={index} xs={12} sm={6} md={4} lg={3} style={{ marginTop: "2em" }}>
      <video
        className="img-fluid rounded shadow border"
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          display: 'block'
        }}
        controls
      >
        <source src={`images/${file}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Col>
      ))}
</Row>

   
            </Container>
            <Footer/>
        </div>
        
        </>
    );
}

export default Gallery;