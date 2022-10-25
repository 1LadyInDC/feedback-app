import { createContext, useState } from 'react'
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ( {children} ) => {

    /** Global State */
    const [feedback, setFeedback] = useState( [
        {
            id: 1,
            text: 'This item is from context',
            rating: 7
        },
        {
          id: 2,
          text: 'This item is also from context',
          rating: 3
      }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState(
      {
        item: {},
        edit: false,
      }
    )

    /** Global Functions */
    const updateFeedback = (id, updItem) => {
      setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    const editFeedback = (item) =>{
      setFeedbackEdit({
        item,
        edit: true
        })
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
          setFeedback(feedback.filter( item =>
             item.id !== id ))}
      }

    const addFeedback = (newFeedback) => {
        //newFeedback.id = feedback.length+1;
        newFeedback.id = +uuidv4();
        setFeedback([newFeedback, ...feedback]);
      }

    return <FeedbackContext.Provider value={{feedback,
                                             deleteFeedback,
                                             addFeedback,
                                             editFeedback,
                                             feedbackEdit,
                                             updateFeedback}}>
                {children}
            </FeedbackContext.Provider>
}

export default FeedbackContext