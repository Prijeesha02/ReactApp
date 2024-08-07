import { useState } from "react";
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
function EditEmp(){
    const location=useLocation();
    const[empdet,setEmpdet]=useState("");
    const id=location.state;
    const navigate=useNavigate();
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                const response=await
                axios.get('http://localhost:8080/employee/profile/'+id);
                setEmpdet(response.data);
                setLoading(false)
}catch(error){
                console.log(error);
                setLoading(false);
            }
        };
        fetchdata()
    },[]);
    //axios.get('http://localhost:8080/employee/profile/'+id).then((res)=>{setEmpdet(res.data)},(error)=>{console.log(error)})
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setEmpdet(values=>({...values,[name]:value}));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:8080/employee/profileupdate/"+id,
            {empname:empdet.empname,empsal:empdet.empsal})
            .then((res)=>{
                console.log(res);
                navigate("/viewemp");
            },(error)=>{console.log(error)})
    };
    
    return(<div>
        <Link to="/viewemp">View Employees</Link>
        <form onSubmit={handleSubmit}>
            <input type='text'name="empname"onChange={handleChange} value={empdet.empname}placeholder='Enter Emp name'></input><br/><br/>
            <input type='number'name="empsal"onChange={handleChange} value={empdet.empsal}placeholder='Enter Emp sal'></input><br/><br/>
            <input type='submit' value="update"></input><br/><br/>
        </form>
    </div>)
}
export default EditEmp;