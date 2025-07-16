import React, { useState } from 'react';
import '../Pages.css';

const questions = [
  {
    question: 'Which source of electricity is most widely used globally?',
    options: ['Solar', 'Wind', 'Hydro', 'Coal'],
    answer: 'Coal',
    info: 'Coal is still the most widely used source of electricity worldwide, though renewables are growing rapidly.'
  },
  {
    question: 'Which source is considered the cleanest for the environment?',
    options: ['Coal', 'Natural Gas', 'Solar', 'Oil'],
    answer: 'Solar',
    info: 'Solar energy produces no direct emissions and is considered one of the cleanest sources.'
  },
  {
    question: 'Which source is most dependent on weather conditions?',
    options: ['Hydro', 'Wind', 'Nuclear', 'Coal'],
    answer: 'Wind',
    info: 'Wind energy production depends heavily on wind speed and weather conditions.'
  }
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState('');

  const handleOption = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setSelected('');
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="pages-container">
      <h1 className="pages-title">Quiz: Test Your Knowledge</h1>
      {!showResult ? (
        <div className="pages-desc">
          <p><b>Question {current + 1} of {questions.length}:</b></p>
          <p>{questions[current].question}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '18px 0' }}>
            {questions[current].options.map(option => (
              <button
                key={option}
                className={`pages-button${selected === option ? ' selected' : ''}`}
                style={{ background: selected === option ? '#2b5876' : undefined }}
                onClick={() => handleOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
          {selected && (
            <div style={{ margin: '12px 0', color: '#4e4376', fontWeight: 500 }}>
              <span>Info: {questions[current].info}</span>
            </div>
          )}
          <button className="pages-button" style={{ marginTop: '18px' }} onClick={handleNext} disabled={!selected}>
            {current < questions.length - 1 ? 'Next' : 'See Result'}
          </button>
        </div>
      ) : (
        <div className="pages-desc">
          <h2>Your Score: {score} / {questions.length}</h2>
          <p>
            {score === questions.length
              ? 'Excellent! You have a strong understanding of electricity sources.'
              : score > 0
                ? 'Good job! Review the Learn section to improve your score.'
                : 'Try again! Visit the Learn section for more information.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
