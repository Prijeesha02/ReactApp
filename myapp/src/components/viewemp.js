import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
function ViewEmp(){
const[empdet,setEmpdet]=useState([]);
axios.get("http://localhost:8080/employee/fetchEmployee").then(response=>{
    setEmpdet(response.data);
}).catch(error=>{
    console.error(error);

});
function delemp(id){
    axios.delete('http://localhost:8080/employee/deleEmp/'+id)
    .then((res)=>{},(error)=>{console.log(error)})
}
const navigate=useNavigate();
function updateemp(id){
navigate("/editemp",{state:id});
}
    return(<div>
        <Link to="/">Add Employee</Link>
        <h1>view Employee</h1>
        <table>
            <tr>
                <th>Empname</th>
                <th>Empsal</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            {
                empdet.map(
                    emp=>
            <tr key={empdet.empid}>
                <td>{emp.empname}</td>
                <td>{emp.empsal}</td>
                <td><button onClick={(e)=>updateemp(emp.empid)}>Update</button></td>
                <td><button onClick={(e)=>delemp(emp.empid)}>Delete</button></td>
            </tr>
                )}
        </table>
        </div>);
}
export default ViewEmp;