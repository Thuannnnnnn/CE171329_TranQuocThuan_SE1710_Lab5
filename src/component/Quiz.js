import React from 'react';
import { useQuiz } from './QuizContext.js';
import Question from './Question.js';
import Score from './Score.js';
import { Button } from 'react-bootstrap';

const Quiz = () => {
    const { questions, submittedAnswers, submitAnswer, quizEnd, setQuizEnd } = useQuiz();

    const handleAnswer = (questionId, answer) => {
        submitAnswer(questionId, answer);
    };

    const handleSubmitQuiz = () => {
        setQuizEnd(true);
    };

    const handleRestartQuiz = () => {

        setQuizEnd(false);
        submitAnswer({}, false);
    };

    if (quizEnd) {
        return (
            <div className="d-flex justify-content-center">
            <div>
                <Score submittedAnswers={submittedAnswers} questions={questions} />
                <Button onClick={handleRestartQuiz} variant="primary">Restart Quiz</Button>
            </div>
            </div>
        );
    }

    return (
       <div className="d-flex flex-column justify-content-center align-items-center mt-5">
         <div>
            {questions.map((question, index) => (
                <Question 
                    key={question.id} 
                    data={question} 
                    handleAnswer={(answer) => handleAnswer(question.id, answer)}
                />
            ))}
            <Button className='submit' onClick={handleSubmitQuiz} variant="success">Submit Quiz</Button>
        </div>
       </div>
    );
};

export default Quiz;
