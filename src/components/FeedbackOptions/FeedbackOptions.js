import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
/*const FeedbackOptions = () => {
  return <button type="button">{}</button>;
};*/

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        className={styles.button}
        type="button"
        onClick={onLeaveFeedback}
        key={option}
        name={option}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
