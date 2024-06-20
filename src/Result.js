import React from 'react';
import './Result.css';

function Result({ average }) {
    return (
        <div className="result-container">
            <h3>Final Grade : {average} %</h3>
        </div>
    );
}

export default Result;