// QuizApp.js
import React from 'react';
import { QuizProvider } from '../component/QuizContext.js';
import Quiz from '../component/Quiz.js';
import { Header } from "../component/header.js";

const QuizApp = () => {
    return (
        <QuizProvider>
            <Header />
           <div className="align-items-center" >
           <Quiz />
           </div>
        </QuizProvider>
    );
};

export default QuizApp;
