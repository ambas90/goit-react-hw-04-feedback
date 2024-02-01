import React, { useState, useEffect } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { FeedbackWrapper, FeedbackContainer } from './FeedbackStyles';

export default function FeedBack() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [feedbackPercentage, setFeedbackPercentage] = useState(0);

  useEffect(() => {
    const { good, neutral, bad } = feedback;
    setTotalFeedback(good + neutral + bad);
  }, [feedback]);

  useEffect(() => {
    if (totalFeedback > 0) {
      setFeedbackPercentage(Math.round((feedback.good / totalFeedback) * 100));
    }
  }, [feedback.good, totalFeedback]);

  const handleFeedback = type => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  return (
    <FeedbackContainer>
      <FeedbackWrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback >= 1 ? (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={totalFeedback}
              positivePercentage={feedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </FeedbackWrapper>
    </FeedbackContainer>
  );
}
