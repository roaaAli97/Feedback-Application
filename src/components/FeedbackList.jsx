import FeedbackItem from "./FeedbackItem"
import {motion,AnimatePresence} from "framer-motion"
import {useContext} from "react"
import FeedbackContext from "../Context/FeedbackContext"
function FeedbackList(){
    const {feedback}=useContext(FeedbackContext)
    console.log(feedback)
  return (

   <div>
      <AnimatePresence>
       {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
   </div>
  )
}

export default FeedbackList