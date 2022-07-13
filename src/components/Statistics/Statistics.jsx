import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <p className={css.statistics__item}>Good:{good}</p>
      <p className={css.statistics__item}>Neutral:{neutral}</p>
      <p className={css.statistics__item}>Bad:{bad}</p>
      <p className={css.statistics__item}>Total: {total}</p>
      <p className={css.statistics__item}>
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
