import { List } from 'components/List/List.styled';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <li key={option}>
          <Button type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
