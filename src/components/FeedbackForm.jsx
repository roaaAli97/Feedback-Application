import {useState,useContext,useEffect} from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

import FeedbackContext from "../Context/FeedbackContext"

function FeedbackForm(){
  const {addFeedback,feedbackEditState,setFeedbackEditState,updateFeedback}=useContext(FeedbackContext)
  const [review,setReview]=useState('')
  const [isDisabled,setBtnDisabled]= useState(true)
  const [rating,setRating]=useState(0)
  const [message,setMessage]=useState('')
  useEffect(()=>{
    if(feedbackEditState.item){
        setReview(feedbackEditState.item.text)
        setRating(feedbackEditState.item.rating)
        setBtnDisabled(false)
    }
  },[feedbackEditState])
  const handleAddFeedback=(event)=>{
      event.preventDefault()
      const newFeedback={
          rating,
          text:review
      }
      if(feedbackEditState.edit===true){
         updateFeedback(feedbackEditState.item.id,newFeedback)
         setFeedbackEditState({
             item:{},
             edit:false
         })
      }
      else{
     addFeedback(newFeedback)
     
      }
      setReview('')
  }
  const handleChange=(event)=>{
    const review=event.target.value;
      if(review===''){
          setBtnDisabled(true)
          setMessage(null)
      }
      else if(review.trim().length<10){
        setBtnDisabled(true)
        setMessage('Review must be at least 10 characters')
      }
      else{
          setBtnDisabled(false)
          setMessage(null)
      }
      
      setReview(review)
  }
  return(
      <Card>
          <h2>How would you rate the service with us</h2>
          <RatingSelect select={(rating)=>setRating(rating)}/>
          <form onSubmit={handleAddFeedback}>
              <input onChange={handleChange} 
                    value={review} 
                    className="review-input" 
                    type="text" 
                    placeholder="write a review"/>
              <Button type='submit' isDisabled={isDisabled} >Send</Button>
               {message }
          </form>
      </Card>
  )
}

export default FeedbackForm