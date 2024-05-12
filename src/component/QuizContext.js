// QuizContext.js
import React, { createContext, useState, useContext } from 'react';

const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
    const [questions] = useState([
        {
            id: 1,
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            id: 2,
            question: "What is the largest planet in our solar system?",
            options: ["Jupiter", "Saturn", "Mars", "Earth"],
            answer: "Jupiter",
        },
        {
            id: 3,
            question: "Who's the most handsome in class SE1710?",
            options: ["Minh", "Vinh", "Tung", "Mr. Hieu"],
            answer: "Mr. Hieu",
        },
    ]);
    const [submittedAnswers, setSubmittedAnswers] = useState({});
    const [quizEnd, setQuizEnd] = useState(false);

    const submitAnswer = (questionId, answer) => {
        setSubmittedAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: answer }));
    };

    return (
        <QuizContext.Provider value={{ questions, submittedAnswers, submitAnswer, quizEnd, setQuizEnd }}>
            {children}
        </QuizContext.Provider>
    );
};
