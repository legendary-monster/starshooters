import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
        <div className="contact-page">
            <Header/>
            <Container style={{margin:'auto',textAlign:'center'}}>
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
                </div><br/>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            </Container>
        </div>
        
        <Footer/>
        </>
    );
}

export default Contact;