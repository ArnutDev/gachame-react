import React from 'react';
import Footer from '../components/Footer';
import Head from '../components/Head';
import Card from '../components/Card';
function Home() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="flex-fill">
                <Head value=" Pick your gacha type " />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <Card />
                        </div>
                        <div className="col-md-6 mb-5">
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    );
}

export default Home;
