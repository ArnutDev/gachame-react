import React from "react";

function Card({ value }) {

    return (
        <a href="rangers-rand.html" className="text-decoration-none">
            <div className="card">
                <img src={"assets/" + value} className="card-img-top" alt="Card Image" />
                <div className="card-body">
                    <h5 className="card-title text-dark">Gacha Rangers 6+1 Click!</h5>
                    <p className="card-text mb-3 text-dark">
                        The new rangers are waiting for you!!!
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