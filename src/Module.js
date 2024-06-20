import React from 'react';
import './Module.css';

function Module() {
    const handleInputChange = (e) => {
        const value = Math.max(0, Math.min(100, Number(e.target.value)));
        e.target.value = value;
    };

    return (
        <div className="module-container">
            <div className="module-row">
                <div className="module-input">
                    <label htmlFor="coursework-grade">Coursework Grade:</label>
                    <input
                        type="number"
                        id="coursework-grade"
                        name="coursework-grade"
                        defaultValue="0"
                        min="0"
                        max="100"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="module-input">
                    <label htmlFor="coursework-weighting" className="weighting-label">Weighting (%):</label>
                    <input
                        type="number"
                        id="coursework-weighting"
                        name="coursework-weighting"
                        defaultValue="0"
                        min="0"
                        max="100"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="module-row">
                <div className="module-input">
                    <label htmlFor="exam-grade">Examination Grade:</label>
                    <input
                        type="number"
                        id="exam-grade"
                        name="exam-grade"
                        defaultValue="0"
                        min="0"
                        max="100"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="module-input">
                    <label htmlFor="exam-weighting" className="weighting-label">Weighting (%):</label>
                    <input
                        type="number"
                        id="exam-weighting"
                        name="exam-weighting"
                        defaultValue="0"
                        min="0"
                        max="100"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default Module;
