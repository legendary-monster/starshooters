import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Container,Row,Col} from 'react-bootstrap';
// import ReactPlayer from 'react-player';

const Gallery = () => {
    return (
        <>
        <div className="gallery-page" style={{height:"160vh"}}>
            <Header/>
            <Container style={{marginBottom:"1rem"}}>
            <h1>Gallery Page</h1>
            <p>This is the gallery page our teams.</p>
  <Row style={{marginBottom:"1rem"}}>
  {[
    "hbb1.jpeg", "hbb2.jpeg", "hbg4.jpeg", "hbg7.jpeg","hbg3.jpeg",
    "hbb3.jpeg", "hbg1.jpeg", "hbb4.jpeg", "hbb5.jpeg","shankranthi2024.jpeg","dasarastateW.jpeg","hbg6.jpeg","1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg","8.jpeg","9.jpeg","10.jpeg","11.jpeg","12.jpeg","13.jpeg","14.jpeg","15.jpeg", "16.jpeg","17.jpeg","18.jpeg","19.jpeg","20.jpeg","21.jpeg","22.jpeg","23.jpeg","24.jpeg","25.jpeg","26.jpeg","27.jpeg","28.jpeg","29.jpeg","30.jpeg","31.jpeg","32.jpeg","33.jpeg","34.jpeg",
    "35.jpeg","36.jpeg","37.jpeg","38.jpeg","39.jpeg","40.jpeg","41.jpeg","42.jpeg","43.jpeg","44.jpeg","46.jpeg","48.jpeg","49.jpeg","50.jpeg","51.jpeg","52.jpeg","53.jpeg","54.jpeg","55.jpeg","56.jpeg","57.jpeg","58.jpeg","59.jpeg","60.jpeg", "61.jpeg","62.jpeg","63.jpeg","64.jpeg","65.jpeg","66.jpeg"
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
  {["video1.mp4", "video2.mp4","video3.mp4","video4.mp4"].map((file, index) => (
    <Col key={index} xs={12} sm={6} md={6} lg={6} style={{ marginTop: "2em" }}>
      <video
        className="img-fluid rounded shadow border"
        style={{
          width: '100%',
          height: '400px',
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