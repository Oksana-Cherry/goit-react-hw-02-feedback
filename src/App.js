import { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

const feedbackOptions = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackBtn = event => {
    const key = event.target.name;

    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  handleTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handlePositivePercentage() {
    const { good } = this.state;
    const total = this.handleTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }

  render() {
    // console.log(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.handleTotalFeedback();
    const positivePercentage = this.handlePositivePercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleFeedbackBtn}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
