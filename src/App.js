import React, { useState } from 'react';
import QuestionSelector from './QuestionSelector';
import Test from './Test';

const testData = {
  testName: "Тест з програмування",
  questions: [
    {
      question: "Що таке JavaScript?",
      answers: [
        {
          answer: "Мова програмування для створення інтерактивних веб-сайтів",
          isCorrect: true,
        },
        {
          answer: "Мова програмування для створення мобільних додатків",
          isCorrect: false,
        },
        {
          answer: "Мова програмування для роботи з базами даних",
          isCorrect: false,
        },
        {
          answer: "Мова програмування для створення операційних систем",
          isCorrect: false,
        }
      ],
    },
    {
      question: "Яка основна особливість React?",
      answers: [
        {
          answer: "Мова програмування для створення інтерактивних веб-сайтів",
          isCorrect: false,
        },
        {
          answer: "Бібліотека для створення інтерфейсів користувача",
          isCorrect: true,
        },
        {
          answer: "Фреймворк для створення мобільних додатків",
          isCorrect: false,
        },
        {
          answer: "Мова програмування для створення операційних систем",
          isCorrect: false,
        }
      ],
    },
    {
      question: "Яка функція в JavaScript використовується для виведення даних в консоль?",
      answers: [
        {
          answer: "console.log()",
          isCorrect: true,
        },
        {
          answer: "print()",
          isCorrect: false,
        },
        {
          answer: "display()",
          isCorrect: false,
        },
        {
          answer: "write()",
          isCorrect: false,
        }
      ],
    }
  ],
};

const App = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleQuestionsSelect = (selectedQuestions) => {
    setSelectedQuestions(selectedQuestions);
    setShowResult(false);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  return (
    <div>
      { selectedQuestions.length === 0 ? (
        <QuestionSelector testData={testData} onQuestionsSelect={handleQuestionsSelect} />
      ) : (
        <Test selectedQuestions={selectedQuestions} testData={testData} onShowResult={handleShowResult} />
      )}
    </div>
  );
};

export default App;
