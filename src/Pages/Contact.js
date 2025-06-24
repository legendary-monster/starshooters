import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Contact = () => {
    return (
        <>
        <div className="contact-page">
            <Header/>
            <h1>Contact Us</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            
        </div>
        <Footer/>
        </>
    );
}

export default Contact;