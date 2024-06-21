import React from 'react';
import ReactDOM from 'react-dom';
import Confetti from 'react-confetti';
import './Grade.css';

function Grade({ finalGrade }) {
    const getGradeClassification = (grade) => {
        if (grade >= 70) return "1st !";
        if (grade >= 60) return "2:1";
        if (grade >= 50) return "2:2";
        if (grade >= 40) return "3rd";
        return "Fail :(";
    };

    const gradeClassification = getGradeClassification(finalGrade);

    const confettiElement = (
        <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={500}
            gravity={0.1}
            wind={0.01}
            colors={['#9ab3e6', '#a682d4', '#e267bd', '#7be684', '#ffd034', '#ffffff']}
            recycle={false}
        />
    );

    return (
        <div className="grade-container">
            {gradeClassification === "1st !" && ReactDOM.createPortal(confettiElement, document.body)}
            <h3>Grade Classification : {gradeClassification}</h3>
        </div>
    );
}

export default Grade;
