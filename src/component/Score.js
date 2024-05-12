import React from 'react';
const Score = ({ submittedAnswers, questions }) => {
    const score = questions.reduce(
        (acc, question) => acc + (submittedAnswers[question.id] === question.answer ? 1 : 0), 0
    );

    return (
        <div className=''>
            <h3 className='score'>Score: {score} / {questions.length}</h3>
        </div>
    );
};

export default Score;
