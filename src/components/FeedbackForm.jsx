import React, { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';

import FeedbackContext from '../context/FeedbackContext';
import '../index.css';


function FeedbackForm() {

    /* Global State */
 const {addFeedback, feedbackEdit, updateFeedback}  = useContext(FeedbackContext);


 /* Component-Specific State */
 const [text, setText] = useState('');
 const [rating, setRating] = useState(7);
 //const [id, setId] = useState(0);
 const [btnDisabled, setBtnDisabled] = useState(true);
 const [message, setMessage] = useState('');

 useEffect( () => {
    if (feedbackEdit.edit === true) {
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
    }
 }, [feedbackEdit])

 /* Component Level Functions */
 const handleTextChange = (e) => {
    if (text === '') {
        setBtnDisabled(true)
        setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
        setMessage("Feedback text must be at least 10 characters")
        setBtnDisabled(true)
    } else {
        setMessage(null)
        setBtnDisabled(false)
    }

    setText(e.target.value);
 }

 const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
        const newFeedback = {
            text: text,
            rating: rating,
        };
        if (feedbackEdit.edit === true) {
            updateFeedback(feedbackEdit.item.id, newFeedback)
        }
        else {
            addFeedback(newFeedback);
        }
        setText('');
    }


 }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <input type='text' onChange={handleTextChange} placeholder='Write a review' value={text}/>
            <Button version='primary'
                    type='submit'
                    color='white'
                    isDisabled={btnDisabled}>Send
            </Button>

            {message && <div className='message'>{message}</div> }
        </form>

    </Card>
  )
}

export default FeedbackForm