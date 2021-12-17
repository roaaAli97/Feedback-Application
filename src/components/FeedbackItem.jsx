import React from "react"
import Card from "./shared/Card"
import {FaTimes,FaEdit} from "react-icons/fa"
import {useContext} from "react"
import FeedbackContext from "../Context/FeedbackContext"
function FeedbackItem({item}){
  const {handleDelete,editFeedback}=useContext(FeedbackContext)
  console.log(item)
  return (
      <Card>
        <div className="feedback-rating" >{item.rating}</div>
        <button onClick={()=>handleDelete(item.id)} className="close">
          <FaTimes color='purple'/>
        </button>
        <button onClick={()=>editFeedback(item)} className="edit-icon">

          <FaEdit color='purple'/>
        </button>
        <p className="feedback-text">{item.text}</p>
      </Card>

  )
}
export default FeedbackItem