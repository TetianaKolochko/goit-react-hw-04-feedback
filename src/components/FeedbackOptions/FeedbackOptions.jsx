import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return Object.keys(options).map(key => (
    <button
      className={css.feedback__btn}
      key={key}
      type="button"
      onClick={onLeaveFeedback}
    >
      {key}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
