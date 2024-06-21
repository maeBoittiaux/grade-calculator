import React from 'react';
import './Grade.css';

function Grade({ finalGrade }) {
    const getGradeClassification = (grade) => {
        if (grade >= 70) return "1st !";
        if (grade >= 60) return "2:1";
        if (grade >= 50) return "2:2";
        if (grade >= 40) return "3rd";
        return "Fail :(";
    };

    return (
        <div className="grade-container">
            <h3>Grade Classification : {getGradeClassification(finalGrade)}</h3>
        </div>
    );
}

export default Grade;
