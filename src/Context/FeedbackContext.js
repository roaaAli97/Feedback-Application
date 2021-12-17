import { createContext,useState,useEffect } from "react";
import { FaCreativeCommonsShare } from "react-icons/fa";
import {v4 as uuidv4} from "uuid"
const FeedbackContext=createContext()

export const FeedbackProvider=({children})=>{
  const[feedback,setFeedback]=useState(
     [{ id:1,
      text:"This is a feedback",
      rating:5}]

  )
  useEffect( ()=>{
    fetchData()
  },[])

  const fetchData=async ()=>{
     const response=await fetch('/feedback')
     const feedbackData=await response.json()
     setFeedback(feedbackData)
  }
  const [feedbackEditState,setFeedbackEditState]=useState({
      item:{},
      edit:true
  })
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    setFeedback([data, ...feedback])
  }
const editFeedback=(item)=>{
   setFeedbackEditState({
       item,
       edit:true
   })
}
const handleDelete=async (id)=>{
   await fetch(`/feedback/${id}`,{
       method:'DELETE'
   })
    if(window.confirm('Are you sure you want to delete')){
        setFeedback(feedback.filter(item=>{
            return item.id !== id
        }))
    }
}
const updateFeedback= async (id,newFeedback)=>{
    const response=await fetch(`/feedback/${id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newFeedback)
    })
    const data=await response.json()
   setFeedback(feedback.map((item)=>{
       return id===item.id?{...item,...data}:item
   }))
}
  return <FeedbackContext.Provider 
         value={{feedback,
                addFeedback,
                handleDelete,
                feedbackEditState,
                setFeedbackEditState,
                editFeedback,
                updateFeedback}}>
       {children}
  </FeedbackContext.Provider>
}
export default FeedbackContext