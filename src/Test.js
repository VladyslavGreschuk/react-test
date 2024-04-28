import React, { useState } from 'react';
import Question from './Question';

const Test = ({ selectedQuestions }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false); // Стан для відстеження завершення тесту

  const handleAnswerSelect = (answerIndex) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [currentPage]: answerIndex,
    }));
  };

  const handleNextPage = () => {
    if (currentPage < selectedQuestions.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      const correctCount = Object.keys(answers).reduce((acc, index) => {
        const questionIndex = parseInt(index);
        const isCorrect = selectedQuestions[questionIndex].answers[answers[index]].isCorrect;
        return isCorrect ? acc + 1 : acc;
      }, 0);
      setCorrectAnswersCount(correctCount);
      setTestCompleted(true); // Встановлюємо, що тест завершено
    }
  };

  return (
    <div>
      <h2>Питання {currentPage + 1}</h2>
      <Question
        question={selectedQuestions[currentPage].question}
        answers={selectedQuestions[currentPage].answers}
        onAnswerSelect={handleAnswerSelect}
      />
      {currentPage < selectedQuestions.length - 1 && (
        <button onClick={handleNextPage}>Наступне питання</button>
      )}
      {/* Відображення кнопки "Завершити тест" тільки після завершення всіх питань */}
      {currentPage === selectedQuestions.length - 1 && !testCompleted && (
        <button onClick={handleNextPage}>Завершити тест</button>
      )}
      {/* Відображення кількості правильних відповідей тільки після завершення тесту */}
      {testCompleted && (
        <p>Кількість правильних відповідей: {correctAnswersCount} з {selectedQuestions.length}</p>
      )}
    </div>
  );
};

export default Test;
