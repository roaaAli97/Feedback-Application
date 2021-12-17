import {FaQuestion} from "react-icons/fa"
import {Link} from "react-router-dom"
function AboutLink(){
    return(
      <div>
         <Link to="/about">
         <FaQuestion className="auto-link" size={30}/>
         </Link>
      </div>
    )
 
}

export default AboutLink