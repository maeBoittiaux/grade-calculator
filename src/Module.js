import React from 'react';
import './Module.css';

function Module() {
    return (
        <div className="module-container">
            <div className="module-row">
                <div className="module-input">
                    <label htmlFor="coursework-grade">Coursework Grade :</label>
                    <input type="number" id="coursework-grade" name="coursework-grade" defaultValue="0" />
                </div>
                <div className="module-input">
                    <label htmlFor="coursework-weighting" className="weighting-label">Weighting :</label>
                    <input type="number" id="coursework-weighting" name="coursework-weighting" defaultValue="0" />
                </div>
            </div>
            <div className="module-row">
                <div className="module-input">
                    <label htmlFor="exam-grade">Examination Grade :</label>
                    <input type="number" id="exam-grade" name="exam-grade" defaultValue="0" />
                </div>
                <div className="module-input">
                    <label htmlFor="exam-weighting" className="weighting-label">Weighting :</label>
                    <input type="number" id="exam-weighting" name="exam-weighting" defaultValue="0" />
                </div>
            </div>
        </div>
    );
}

export default Module;
