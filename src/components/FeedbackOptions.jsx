import PropTypes from 'prop-types';
import { FeedbackOptionsUi, FeedbackButton } from './FeedbackOptionsStyles';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsUi>
      {options.map(option => (
        <FeedbackButton key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbackButton>
      ))}
    </FeedbackOptionsUi>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
