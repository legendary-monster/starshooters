import {Row,Col, Container} from 'react-bootstrap'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const AboutUs = () => {
    return(
        <>
        <Header/>
        <Container>
        <div className="about-hero text-center bg-light py-5">
  <h1 className="display-4 fw-bold"><u>About Star Shooters</u></h1><br/>
  <p className="lead">Star Shooters Handball Club
Founded in 1991, Star Shooters Handball Club has been a pioneering force in handball excellence for over three decades. Rooted in passion, discipline, and dedication, our club has proudly trained 1,000+ students to date—each molded with the skills, mindset, and grit that define true champions.
Over the years, our athletes have made their mark across district and state championships, bringing home numerous titles and cementing our reputation as one of the top-performing handball clubs in the region. More than 100 of our players have proudly represented at the State and National levels, raising the bar for excellence.
Our legacy goes beyond medals—Star Shooters has opened doors to rewarding careers. Many of our athletes have successfully secured positions in the Police Department, Armed Forces, and other government sectors through their sporting achievements.
We’ve also nurtured and produced a new generation of sports leaders, including Physical Education Teachers, Sports Coordinators, and Directors of Physical Education, who now inspire and shape future athletes across institutions.
At Star Shooters, we’re not just building players—we’re building futures</p>
</div>
<Row>
    <Col xs={12} md={6}>
       <img src='/images/1.jpeg' alt='Our Team' className='img-fluid rounded shadow' 
          style={{width: '100%',
                  height: '400px',
                  margin:'auto'}} />
    </Col>
    <Col xs={12} md={6}>
       <img src='/images/2.jpeg' alt='Our Team' className='img-fluid rounded shadow' style={{width: 'auto'
            , height: '400px',
            margin:'auto'}} />
    </Col>
</Row><hr/>
<Row className="align-items-center my-5">
  <Col md={4}>
    <img src="/images/hbb2.jpeg" alt="Our Team" className="img-fluid rounded shadow" style={{width: 'auto',
          height: '400px',
          margin:'auto'}} />
  </Col>
  <Col md={8}>
    <h2><u>Our Journey</u></h2>
    <p className='lead1'>
      From Humble Beginnings to Sporting Excellence
The story of Star Shooters Handball Club began in 1991, sparked by a shared dream—to nurture talent and elevate handball to new heights. With just a handful of players, modest facilities, and an unshakable belief in the power of sport, we laid the first stones of a legacy.
Through the years, our journey has been one of relentless dedication, countless hours of training, and an unwavering commitment to excellence. We've weathered challenges, celebrated victories, and evolved with every generation of athletes.
From local neighborhood grounds to national-level arenas, we’ve grown into a recognized powerhouse—training over 1,000 students, producing state and national champions, and transforming lives both on and off the field.
Today, Star Shooters stands tall not only as a club but as a community of mentors, changemakers, and sports leaders who continue to inspire the next wave of champions.
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