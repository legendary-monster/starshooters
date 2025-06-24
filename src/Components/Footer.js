import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">© {new Date().getFullYear()} Star Shooters. All rights reserved.</p>
        <p className="mb-0">Follow us on social media: 
          <a href="https://facebook.com" className="text-white ms-2">Facebook</a> | 
          <a href="https://twitter.com" className="text-white ms-2">Youtube</a> | 
          <a href="https://instagram.com" className="text-white ms-2">Instagram</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;