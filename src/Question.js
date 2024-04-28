import React from 'react';
import './Question.css';

const Question = ({ question, answers, onAnswerSelect }) => {
  return (
    <div>
      <h3 className="question-title">{question}</h3>
      {answers.map((answer, index) => (
        <div key={index} className="answer-option">
          <input
            type="radio"
            id={`answer${index}`}
            name={`question`}
            onChange={() => onAnswerSelect(index)}
            className="radio-input"
          />
          <label htmlFor={`answer${index}`}>{answer.answer}</label>
        </div>
      ))}
    </div>
  );
};

export default Question;
