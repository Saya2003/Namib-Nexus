import React, { useState } from "react";
import "../QuizPage/quiz.css"; // Assuming you have a CSS file for styling


const quizQuestions = [
  // Geological Types of Uranium Deposits (10 questions)
  {
    question: "Which uranium deposit type is known for extremely high uranium grades and is found at the boundary between basement rocks and sandstone?",
    options: ["Sandstone-hosted deposits", "Unconformity-related deposits", "Vein-type deposits", "Surficial deposits"],
    answer: "Unconformity-related deposits",
  },
  {
    question: "Which uranium deposit type is commonly found in arid or semi-arid regions, often associated with calcrete?",
    options: ["Sandstone-hosted deposits", "Vein-type deposits", "Surficial deposits", "Breccia complex deposits"],
    answer: "Surficial deposits",
  },
  {
    question: "What geological environment is most associated with sandstone-hosted uranium deposits?",
    options: ["Shallow marine basins", "Granite intrusions", "Permeable sandstones with organic matter", "Volcanic tuff zones"],
    answer: "Permeable sandstones with organic matter",
  },
  {
    question: "Which deposit type is linked to hydrothermal fluids filling fractures in hard rock, often in older metamorphic terranes?",
    options: ["Vein-type deposits", "Roll-front deposits", "Surficial deposits", "Sandstone-hosted deposits"],
    answer: "Vein-type deposits",
  },
  {
    question: "What is a key characteristic of breccia complex uranium deposits?",
    options: ["Formed from calcrete evaporation", "Occur in flat-lying sedimentary basins", "Formed from shattered and cemented rock zones", "Found in peat bogs"],
    answer: "Formed from shattered and cemented rock zones",
  },
  {
    question: "Roll-front uranium deposits form due to:",
    options: ["Surface weathering", "Hydrothermal alteration", "Chemical reactions at oxidation-reduction boundaries in aquifers", "Biological concentration"],
    answer: "Chemical reactions at oxidation-reduction boundaries in aquifers",
  },
  {
    question: "Phosphate uranium deposits are typically associated with:",
    options: ["Oil shales", "Marine sedimentary rocks", "Volcanic ash layers", "Glacial till"],
    answer: "Marine sedimentary rocks",
  },
  {
    question: "Which type of uranium deposit is usually the shallowest and easiest to mine?",
    options: ["Unconformity-related", "Surficial", "Vein-type", "Breccia complex"],
    answer: "Surficial",
  },
  {
    question: "Which uranium deposit type has the highest average uranium grade globally?",
    options: ["Phosphate", "Unconformity-related", "Roll-front", "Vein-type"],
    answer: "Unconformity-related",
  },
  {
    question: "In which country are large unconformity-type uranium deposits predominantly found?",
    options: ["Kazakhstan", "Australia", "Canada", "Namibia"],
    answer: "Canada",
  },

  // Technical Features of Extraction Methods (10 questions)
  {
    question: "Which uranium extraction method involves pumping a solution underground to dissolve uranium and then pumping it back to the surface?",
    options: ["Open-pit mining", "Heap leaching", "In-Situ Recovery (ISR)", "Underground mining"],
    answer: "In-Situ Recovery (ISR)",
  },
  {
    question: "Heap leaching is most suitable for:",
    options: ["High-grade, deep uranium ores", "Low-grade, near-surface uranium ores", "Uranium in phosphate rocks only", "Uranium in unconformity deposits"],
    answer: "Low-grade, near-surface uranium ores",
  },
  {
    question: "What is the main advantage of ISR over traditional mining methods?",
    options: ["Higher ore grades", "Safer and lower-cost operations", "More radioactive waste", "More jobs created"],
    answer: "Safer and lower-cost operations",
  },
  {
    question: "Which uranium extraction technique results in a large surface disturbance and tailings ponds?",
    options: ["ISR", "Heap leaching", "Open-pit mining", "Infill drilling"],
    answer: "Open-pit mining",
  },
  {
    question: "Which mining technique uses tunnels and shafts to access deep uranium ore?",
    options: ["Heap leaching", "Open-pit mining", "Underground mining", "Solution mining"],
    answer: "Underground mining",
  },
  {
    question: "What is one key environmental issue with ISR?",
    options: ["Dust pollution", "Surface water flooding", "Potential groundwater contamination", "Tailings management"],
    answer: "Potential groundwater contamination",
  },
  {
    question: "What is yellowcake?",
    options: ["Raw uranium rock", "Waste product", "Intermediate uranium concentrate", "Radioactive gas"],
    answer: "Intermediate uranium concentrate",
  },
  {
    question: "What chemical is commonly used in ISR to dissolve uranium?",
    options: ["Sodium chloride", "Sulfuric acid or bicarbonate solutions", "Hydrochloric acid", "Nitric oxide"],
    answer: "Sulfuric acid or bicarbonate solutions",
  },
  {
    question: "Which method is least disruptive to the landscape?",
    options: ["Underground mining", "Heap leaching", "Open-pit mining", "In-Situ Recovery (ISR)"],
    answer: "In-Situ Recovery (ISR)",
  },
  {
    question: "What happens to uranium after extraction before it's sent for enrichment?",
    options: ["It is converted to nuclear fuel rods immediately", "It is turned into yellowcake", "It is cooled in ponds", "It is diluted with water"],
    answer: "It is turned into yellowcake",
  },

  // Sustainable Development Considerations (10 questions)
  {
    question: "What is a key environmental concern associated with uranium mining?",
    options: ["Noise pollution", "Radioactive waste and groundwater contamination", "Overfishing", "Airplane emissions"],
    answer: "Radioactive waste and groundwater contamination",
  },
  {
    question: "Which of the following is NOT a typical social consideration in uranium mining?",
    options: ["Community health and safety", "Indigenous land rights", "Job creation", "Ocean acidification"],
    answer: "Ocean acidification",
  },
  {
    question: "A principle of sustainable uranium development includes:",
    options: ["Maximizing profit only", "Ignoring local communities", "Minimizing environmental impacts", "Rapid extraction without assessment"],
    answer: "Minimizing environmental impacts",
  },
  {
    question: "How can uranium operations contribute economically to a region?",
    options: ["Lowering tourism", "Raising taxes", "Creating employment and infrastructure", "Relocating populations"],
    answer: "Creating employment and infrastructure",
  },
  {
    question: "Which international principle promotes transparency and community involvement in mining?",
    options: ["The Greenhouse Accord", "Equator Principles", "Extractive Industries Transparency Initiative (EITI)", "Uranium Safety Code"],
    answer: "Extractive Industries Transparency Initiative (EITI)",
  },
  {
    question: "Sustainable tailings management involves:",
    options: ["Dumping waste in rivers", "Sealing radioactive waste securely", "Burning radioactive residue", "Leaving pits open"],
    answer: "Sealing radioactive waste securely",
  },
  {
    question: "What is one way mining companies engage with local communities?",
    options: ["Censoring complaints", "Forced relocation", "Community consultations", "Paying no taxes"],
    answer: "Community consultations",
  },
  {
    question: "What is often implemented to protect workers in uranium mines?",
    options: ["Increased work hours", "Exposure to dust", "Radiation monitoring and PPE", "No regulation"],
    answer: "Radiation monitoring and PPE",
  },
  {
    question: "How do uranium projects impact biodiversity?",
    options: ["No impact", "Habitat loss and disturbance", "Increased animal diversity", "Reforestation"],
    answer: "Habitat loss and disturbance",
  },
  {
    question: "Which document ensures uranium is mined responsibly and benefits are shared?",
    options: ["Environmental Disaster Act", "Sustainable Uranium Code", "International Uranium Trade Charter", "Nuclear Safety Declaration"],
    answer: "Sustainable Uranium Code",
  },
];

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionClick = (option) => {
    if (showFeedback) return;
    setSelectedOption(option);
    setShowFeedback(true);
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedOption("");
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Uranium Learning Quiz</h2>
      {!quizCompleted ? (
        <>
          <p><strong>Question {currentQuestionIndex + 1} of {quizQuestions.length}:</strong></p>
          <p style={{ fontSize: "1.2rem" }}>{currentQuestion.question}</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {currentQuestion.options.map((option) => (
              <li key={option} style={{ marginBottom: "0.8rem" }}>
                <button
                  onClick={() => handleOptionClick(option)}
                  disabled={showFeedback}
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor:
                      showFeedback && option === currentQuestion.answer
                        ? "#4caf50"
                        : showFeedback && option === selectedOption && option !== currentQuestion.answer
                        ? "#f44336"
                        : "#1976d2",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: showFeedback ? "default" : "pointer",
                    fontWeight: "bold",
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          {showFeedback && (
            <div style={{ marginTop: "1rem" }}>
              {selectedOption === currentQuestion.answer ? (
                <p style={{ color: "#4caf50", fontWeight: "bold" }}>Correct! 🎉</p>
              ) : (
                <p style={{ color: "#f44336", fontWeight: "bold" }}>
                  Incorrect. The right answer is: <em>{currentQuestion.answer}</em>.
                </p>
              )}
              <button
                onClick={handleNext}
                style={{
                  marginTop: "1rem",
                  padding: "8px 16px",
                  backgroundColor: "#555",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {currentQuestionIndex + 1 === quizQuestions.length ? "Finish Quiz" : "Next Question"}
              </button>
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h3>Your Score: {score} / {quizQuestions.length}</h3>
          <p>
            {score === quizQuestions.length
              ? "Excellent! You're a uranium mining pro!"
              : score >= quizQuestions.length / 2
              ? "Good job! You have solid knowledge."
              : "Keep learning! Uranium mining is a fascinating subject."}
          </p>
          <button
            onClick={() => {
              setCurrentQuestionIndex(0);
              setScore(0);
              setQuizCompleted(false);
            }}
            style={{
              padding: "8px 16px",
              backgroundColor: "#1976d2",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
}