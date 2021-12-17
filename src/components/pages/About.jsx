import Card from "../shared/Card"
import {Link} from "react-router-dom"
function About(){
    return(
        <Card>
           <h2>About page</h2>
           <p>This is a react project to leave feedback to a product or a service</p>
           <p>Version:1.0.0</p>
           <Link to='/'>Back to home</Link>
        </Card>
      
    )
}
export default About