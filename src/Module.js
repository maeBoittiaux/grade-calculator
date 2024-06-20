import React, { useState, useEffect } from 'react';
import './Module.css';

function Module({ id, updateGrade, deleteModule }) {
    const [courseworkGrade, setCourseworkGrade] = useState(0);
    const [courseworkWeighting, setCourseworkWeighting] = useState(0);
    const [examGrade, setExamGrade] = useState(0);
    const [examWeighting, setExamWeighting] = useState(100);
    const [finalGrade, setFinalGrade] = useState(0);

    const handleInputChange = (setter, relatedSetter) => (e) => {
        const value = e.target.value === '' ? '' : Math.max(0, Math.min(100, Number(e.target.value)));
        setter(value);

        if (e.target.value !== '') {
            relatedSetter(100 - value);
        }
    };

    const handleBlur = (setter) => (e) => {
        if (e.target.value === '') {
            setter(0);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === '-' || e.key === 'e' || e.key === 'E') {
            e.preventDefault();
        }
    };

    useEffect(() => {
        calculateFinalGrade();
    }, [courseworkGrade, courseworkWeighting, examGrade, examWeighting]);

    const calculateFinalGrade = () => {
        const cwPart = (courseworkGrade * courseworkWeighting) / 100;
        const exPart = (examGrade * examWeighting) / 100;
        const final = cwPart + exPart;
        setFinalGrade(final.toFixed(2));
        updateGrade(id, final.toFixed(2));
    };

    return (
        <div className="module-container">
            <div className="module-row">
                <div className="module-input">
                    <label htmlFor={`coursework-grade-${id}`}>Coursework Grade :</label>
                    <input
                        type="number"
                        id={`coursework-grade-${id}`}
                        name="coursework-grade"
                        value={courseworkGrade}
                        min="0"
                        max="100"
                        onChange={handleInputChange(setCourseworkGrade, () => { })}
                        onBlur={handleBlur(setCourseworkGrade)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className="module-input">
                    <label htmlFor={`coursework-weighting-${id}`} className="weighting-label">Weighting :</label>
                    <input
                        type="number"
                        id={`coursework-weighting-${id}`}
                        name="coursework-weighting"
                        value={courseworkWeighting}
                        min="0"
                        max="100"
                        onChange={handleInputChange(setCourseworkWeighting, setExamWeighting)}
                        onBlur={handleBlur(setCourseworkWeighting)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </div>
            <div className="module-row">
                <div className="module-input">
                    <label htmlFor={`exam-grade-${id}`}>Examination Grade :</label>
                    <input
                        type="number"
                        id={`exam-grade-${id}`}
                        name="exam-grade"
                        value={examGrade}
                        min="0"
                        max="100"
                        onChange={handleInputChange(setExamGrade, () => { })}
                        onBlur={handleBlur(setExamGrade)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className="module-input">
                    <label htmlFor={`exam-weighting-${id}`} className="weighting-label">Weighting :</label>
                    <input
                        type="number"
                        id={`exam-weighting-${id}`}
                        name="exam-weighting"
                        value={examWeighting}
                        min="0"
                        max="100"
                        onChange={handleInputChange(setExamWeighting, setCourseworkWeighting)}
                        onBlur={handleBlur(setExamWeighting)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
            </div>
            <div className="module-results">
                <h3>Module Grade : {finalGrade} %</h3>
            </div>
            <button className="delete-button" onClick={() => deleteModule(id)}>🗑️</button>
        </div>
    );
}

export default Module;
