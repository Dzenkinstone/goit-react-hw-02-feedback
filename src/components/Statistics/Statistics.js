import PropTypes from 'prop-types';

import {
  StatisticContainer,
  StatisticTextWrapper,
  StatisticTitle,
  StatisticText,
} from './Statistics.styled';

import { Notification } from 'components/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticContainer>
      {(good || neutral || bad) > 0 ? (
        <StatisticTextWrapper>
          <StatisticTitle>Statistic</StatisticTitle>
          <StatisticText>Good: {good}</StatisticText>
          <StatisticText>Neutral: {neutral}</StatisticText>
          <StatisticText>Bad: {bad}</StatisticText>
          <StatisticText>Total:{total()}</StatisticText>
          <StatisticText>
            PositiveFeedback:{positivePercentage(good, total)}
          </StatisticText>
        </StatisticTextWrapper>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </StatisticContainer>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
