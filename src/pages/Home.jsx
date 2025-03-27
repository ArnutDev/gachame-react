import React from 'react';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="flex-grow-1">
                <h1>Welcome to the Home Page!</h1>
                <p>This is the main page of our website.</p>
            </div>
            <Footer />
        </div>


    );
}

export default Home;
