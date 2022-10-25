import React from 'react';
import { useContext } from 'react';
//import PropTypes from 'prop-types';
import '../index.css';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
  //const FeedbackList = ({feedback, handleDelete }) => {            // This uses props
  const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Found</p>
  }

    return <div className='feedback-list'>{
                  feedback.map( (item) =>
                                            <FeedbackItem
                                                key={item.id}
                                                item={item}/> )}
        </div>
};

/*  deleted due to incorporation of useContext
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf (
    PropTypes.shape( {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired,

    })
  )

}
*/




export default FeedbackList