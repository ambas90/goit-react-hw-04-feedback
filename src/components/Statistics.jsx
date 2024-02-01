import PropTypes from 'prop-types';
import { StatisticsUi } from './StatisticsStyles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsUi>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage} %</p>
    </StatisticsUi>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
