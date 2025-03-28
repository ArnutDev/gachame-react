import React from "react";

function Card({ cardDetails }) {

    return (
        <a href="rangers-rand.html" className="text-decoration-none">
            <div className="card">
                <img src={"assets/" + cardDetails.image} className="card-img-top" alt="Card Image" />
                <div className="card-body">
                    <h5 className="card-title text-dark">{cardDetails.topic}</h5>
                    <p className="card-text mb-3 text-dark">
                        {cardDetails.detail}
                    </p>
                    <div className="btn-container d-flex justify-content-end">
                        <a href="rangers-rand.html" className="btn btn-primary">Click</a>
                    </div>
                </div>
            </div>
        </a>
    );
}
export default Card;