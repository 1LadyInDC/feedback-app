import React , {useContext } from 'react';
//import PropTypes from 'prop-types';

import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {

  const feedback = useContext(FeedbackContext);
  let average = 0.0;

  if (typeof feedback === 'object') {

  } else {
    average = feedback.reduce((acc, cur) => { return acc + cur.rating}, 0) / feedback.length;
  }

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews </h4>
        <h4>Average Rating:  {isNaN(average) ? 0 : average }</h4>
    </div>
  )
}

/*
FeedbackStats.propTypes = {
  feedback: PropTypes.array
}
*/


export default FeedbackStats