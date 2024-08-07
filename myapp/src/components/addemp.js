import {useState}from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

function AddEmp(){
const[empdet,setEmpdet]=useState("");
const navigate=useNavigate();
const handleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setEmpdet(values=>({...values,[name]:value}))
}
const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post("http://localhost:8080/employee/addEmployee",
        {empname:empdet.empname,empsal:empdet.empsal})
        .then((res)=>{
            console.log(res);
            navigate("/viewemp");
        },(error)=>{console.log(error)})
    
}
return(<div>
    <Link to="/viewemp">View Employees</Link>
    <form onSubmit={handleSubmit}>
        <input type='text'name="empname"onChange={handleChange} value={empdet.empname}placeholder='Enter Emp name'></input><br/><br/>
        <input type='number'name="empsal"onChange={handleChange} value={empdet.empsal}placeholder='Enter Emp sal'></input><br/><br/>
        <input type='submit'></input><br/><br/>
    </form>
</div>)
}
export default AddEmp;