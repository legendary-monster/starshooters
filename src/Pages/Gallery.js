import react from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Gallery = () => {
    return (
        <>
        <div className="gallery-page">
            <Header/>
            <h1>Gallery Page</h1>
            <p>This is the gallery page where you can view images.</p>
            <div className="gallery-images">
                <img src="#" alt="1" className="img-fluid" />
                <img src="#" alt="2" className="img-fluid" />
                <img src="#" alt="3" className="img-fluid" />
            </div>
            
        </div>
        <Footer/>
        </>
    );
}

export default Gallery;