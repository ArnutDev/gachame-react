import React from 'react';
import Footer from '../components/Footer';
import Head from '../components/Head';
import Card from '../components/Card';
function Home() {
    const cardRanger = { image: "intro-ranger-banner.jpg", topic: "Gacha Rangers 6+1 Click!", detail: "The new rangers are waiting for you!!!" };
    const cardGear = { image: "intro-gear-banner.jpg", topic: "Gacha Gears 5+1 Click!", detail: "The new gears are waiting for you!!!" };
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="flex-fill">
                <Head value="[ Pick your gacha type ]" />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <Card cardDetails={cardRanger} />
                        </div>
                        <div className="col-md-6 mb-5">
                            <Card cardDetails={cardGear} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    );
}

export default Home;
