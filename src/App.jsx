import { useState, useEffect } from "react";
import Description from "./components/description/description";
import Options from "./components/options/options";
import Feedback from "./components/feedback/feedback";
import Notification from "./components/notification/notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem("feedback");
    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = total === 0 ? 0 : Math.round((feedback.good / total) * 100);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <Description />
      <Options
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        total={total}
      />

      {total === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positive={positive}
        />
      )}
    </div>
  );
}

export default App;