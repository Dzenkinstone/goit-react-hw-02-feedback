import PropTypes from 'prop-types';

import {
  ButtonContainer,
  ButtonContainerTitle,
  ButtonWrapper,
  Button,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map(option => {
        return (
          <Button key={option} onClick={() => onLeaveFeedback(option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </Button>
        );
      })}
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
