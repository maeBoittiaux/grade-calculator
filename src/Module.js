import React from 'react';
import './Module.css';

function Module() {
    return (
        <div className="module-container">
            <div className="module-row">
                <div className="module-input">
                    <label htmlFor="coursework-grade">Coursework Grade :</label>
                    <input type="number" id="coursework-grade" name="coursework-grade" />
                </div>
                <div className="module-input">
                    <label htmlFor="coursework-weighting" className="weighting-label">Weighting :</label>
                    <input type="number" id="coursework-weighting" name="coursework-weighting" />
                </div>
            </div>
            <div className="module-row">
                <div className="module-input">
                    <label htmlFor="exam-grade">Examination Grade :</label>
                    <input type="number" id="exam-grade" name="exam-grade" />
                </div>
                <div className="module-input">
                    <label htmlFor="exam-weighting" className="weighting-label">Weighting :</label>
                    <input type="number" id="exam-weighting" name="exam-weighting" />
                </div>
            </div>
        </div>
    );
}

export default Module;
