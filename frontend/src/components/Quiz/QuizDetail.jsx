import React from 'react';

const QuizDetail = ({ quiz }) => {
  return (
    <div>
      <h2>{quiz.title}</h2>
      <p>Description: {quiz.description}</p>
      <p>Start Time: {quiz.startTime}</p>
      <p>End Time: {quiz.endTime}</p>
      <h3>Questions:</h3>
      <ul>
        {quiz.questions.map((question, index) => (
          <li key={index}>
            <p>{question.questionText}</p>
            <ul>
              {question.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizDetail;
