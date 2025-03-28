import React from "react";

function Head({ value }) {
    return (
        <div class="head mt-3">
            <h1 className="text-center text-light">{value}</h1>
        </div>
    );
}
export default Head;