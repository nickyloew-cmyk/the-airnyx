import { useState } from "react";

const questions = [
  {
    question: "What does a METAR report represent?",
    options: [
      "A forecast for the next 24 hours",
      "A current surface weather observation at an airport",
      "A pilot report from in flight",
      "An enroute weather advisory"
    ],
    answer: 1,
    explanation:
      "A METAR is an aviation routine weather report showing current observed surface weather conditions at a specific airport."
  },
  {
    question: "In a METAR, BKN015 means:",
    options: [
      "Broken clouds at 150 feet AGL",
      "Broken clouds at 1,500 feet AGL",
      "Broken clouds at 15,000 feet AGL",
      "Clouds below knee level"
    ],
    answer: 1,
    explanation:
      "Cloud heights in METARs are reported in hundreds of feet AGL. BKN015 means broken clouds at 1,500 feet AGL."
  },
  {
    question: "What does TEMPO mean in a TAF?",
    options: [
      "Permanent change",
      "Temporary fluctuations during the period",
      "Time correction",
      "Military restriction"
    ],
    answer: 1,
    explanation:
      "TEMPO indicates temporary weather conditions expected to occur during the stated time period."
  }
];

function App() {
  const [selected, setSelected] = useState(null);
  const [current, setCurrent] = useState(0);

  const q = questions[current];
  const isCorrect = selected === q.answer;

  function nextQuestion() {
    setSelected(null);
    setCurrent((current + 1) % questions.length);
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <p style={styles.badge}>THE AIRNYX · DISPATCH TRAINING</p>
        <h1 style={styles.title}>Weather Quiz</h1>

        <p style={styles.progress}>
          Question {current + 1} of {questions.length}
        </p>

        <h2 style={styles.question}>{q.question}</h2>

        <div style={styles.options}>
          {q.options.map((option, index) => {
            let style = styles.option;

            if (selected !== null && index === q.answer) {
              style = { ...styles.option, ...styles.correct };
            }

            if (selected === index && selected !== q.answer) {
              style = { ...styles.option, ...styles.wrong };
            }

            return (
              <button
                key={index}
                style={style}
                onClick={() => setSelected(index)}
                disabled={selected !== null}
              >
                {String.fromCharCode(65 + index)}. {option}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div style={styles.explanation}>
            <strong>{isCorrect ? "Correct ✅" : "Not quite ❌"}</strong>
            <p>{q.explanation}</p>
            <button style={styles.nextButton} onClick={nextQuestion}>
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #07111f, #101d33)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px"
  },
  card: {
    width: "100%",
    maxWidth: "760px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "24px",
    padding: "34px",
    boxShadow: "0 20px 80px rgba(0,0,0,0.35)"
  },
  badge: {
    color: "#f6c85f",
    letterSpacing: "2px",
    fontSize: "12px",
    fontWeight: "bold"
  },
  title: {
    fontSize: "42px",
    margin: "8px 0"
  },
  progress: {
    color: "#9fb7d9"
  },
  question: {
    fontSize: "24px",
    lineHeight: "1.4"
  },
  options: {
    display: "grid",
    gap: "12px",
    marginTop: "24px"
  },
  option: {
    padding: "16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    fontSize: "16px",
    textAlign: "left",
    cursor: "pointer"
  },
  correct: {
    background: "rgba(46, 204, 113, 0.25)",
    border: "1px solid #2ecc71"
  },
  wrong: {
    background: "rgba(231, 76, 60, 0.25)",
    border: "1px solid #e74c3c"
  },
  explanation: {
    marginTop: "24px",
    padding: "18px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.1)"
  },
  nextButton: {
    marginTop: "12px",
    padding: "12px 18px",
    borderRadius: "12px",
    border: "none",
    background: "#f6c85f",
    color: "#07111f",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default App;