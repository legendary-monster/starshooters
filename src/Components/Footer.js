import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      {/* <div>
      <h5>Quick Link</h5><br/>
      <a href="/" className="text-white me-3">Home</a><br/>
      <a href="/about" className="text-white me-3">About Us</a><br/>
      <a href="/gallery" className="text-white me-3">Gallery</a><br/>
      <a href="/contact" className="text-white me-3">Contact Us</a><br/>
      </div> */}
      <hr/>
      <div className="container">
        <p className="mb-0">© {new Date().getFullYear()} Star Shooters. All rights reserved.</p>
        <p className="mb-0">Follow us on social media: 
          <a href="https://www.facebook.com/groups/1531842927082331/?ref=share&mibextid=NSMWBT" className="text-white ms-2" target='_blank' rel='noreferrer'>Facebook</a> | 
          <a href="https://www.youtube.com/@handballuniverse" className="text-white ms-2" target='_blank' rel='noreferrer'>Youtube</a> | 
          <a href="https://www.instagram.com/star_shooters_ss?igsh=MTBwY2lndXJzcmNtcA==" className="text-white ms-2" target='_blank' rel='noreferrer'>Instagram</a>
        </p><br/>
        <p>📍<a href='https://maps.app.goo.gl/2YxJsmm7fW3T7GUP6' className="text-white ms-2" target='_blank' rel='noreferrer'>Find us on Google Maps</a></p>
      </div>
    </footer>
  );
}

export default Footer;