import { Link } from "react-router-dom";
import aa from '../image/aa.jpg.jpg' ;
function About(){
    return(
    <div><h1>about page</h1>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <img src={aa}></img>
    </div>)
}
export default About;