import { useState } from "react";
import PropTypes from 'prop-types';
import { FeedbackOptions } from "./FeedbackOptions/FeedbacOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleFeedbackClick = (evt) => {
    const { name } = evt.currentTarget;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1)
        break;
      case 'neutral':
        setNeutral(prev => prev + 1)
        break;
      case 'bad':
        setBad(prev => prev + 1)
        break
      default:
        return;
    }
  };

  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback && (good / totalFeedback * 100).toFixed();
  const options = ['bad', 'neutral', 'good']

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={handleFeedbackClick} options={options} />
      </Section>

      <Section title={'Statistics'}>
        {totalFeedback ?
          <Statistics good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage} />
          : <Notification message="There is no feedback" />
        }
      </Section>
    </div>
  );
};

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  evt: PropTypes.object,
};
