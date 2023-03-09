import { Component } from "react";
import PropTypes from 'prop-types';
import { FeedbackOptions } from "./FeedbackOptions/FeedbacOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    evt: PropTypes.object,
  }
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  handleFeedbackClick = (evt) => {
    const { name } = evt.currentTarget;

    this.setState(prevState => ({[name]: prevState[name] + 1}));
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

  countPositiveFeedbackPercentage = (good, total) => total && (good / total * 100).toFixed();
  
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state); 
    const positivePercentage = this.countPositiveFeedbackPercentage(good, totalFeedback);

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.handleFeedbackClick} options={Object.keys(this.state)} />
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
};
