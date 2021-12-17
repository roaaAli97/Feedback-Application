import { BrowserRouter as Router ,Route,Routes,Link } from "react-router-dom"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import About from "./components/pages/About"
import AboutLink from "./components/AboutLink"
import { FeedbackProvider } from "./Context/FeedbackContext"
import "./index.css"
function App(){
    
   
    return(
        <FeedbackProvider>
        <Router>
        <Header/>
         <Routes>
        <Route exact path='/' element={
            <>
             <FeedbackForm />
            <FeedbackStats/>
            <FeedbackList/>
            <Link to='/reviews'>
                <div className="review-link"> All Reviews</div>
            </Link>
            <AboutLink/>
            </>
        }/>
       
       {/* <Route exact path='/reviews' element={
         <FeedbackList handleDelete={handleDelete}/>
       }/> */}
        <Route exact path='/about' element={<About/>}/>
        </Routes>
        </Router>
        </FeedbackProvider>
    )
}
export default App