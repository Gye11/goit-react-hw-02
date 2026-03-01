import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;

  const positivePercentage =
    totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100));

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Sip Happens Café</h1>

      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      {totalFeedback === 0 ? (
        <p>No feedback yet</p>
      ) : (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positivePercentage}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
