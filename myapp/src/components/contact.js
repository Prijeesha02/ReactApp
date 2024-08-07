import { Link } from "react-router-dom";
import { useState } from "react";
function Contact(){
    const [empdet,setEmpdet]=useState("");
    const handleChange=(event)=>{
const name=event.target.name;
const value=event.target.value;
setEmpdet(values=>({...values,[name]:value}));

    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(empdet);
        console.log(empdet);
    }
    
    return (
        <div>
            <h1>Contact</h1>
            <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <br/>
    <form onSubmit={handleSubmit}>
        EmpName:
        <input type="text" name="empname" value={empdet.empname} onChange={handleChange}></input>
            Age:
            <input type="number" name="empage" value={empdet.empage} onChange={handleChange}></input>
            Emailid:
            <input type="email" name="empmail" value={empdet.empemail} onChange={handleChange}></input>
            Salary:
            <input type="'text" name="empsal" value={empdet.empsal} onChange={handleChange}></input>
            <input type="submit"></input>
        
    </form>
        </div>
    )
}
export default Contact;