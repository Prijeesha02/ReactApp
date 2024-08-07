import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
function ViewTrans(){
const[transdet,setTransdet]=useState([]);
axios.get("http://localhost:8080/transinfo/fetchTransactionInfo").then(response=>{
    setTransdet(response.data);
}).catch(error=>{
    console.error(error);

});
/*function delemp(id){
    axios.delete('http://localhost:8080/employee/deleEmp/'+id)
    .then((res)=>{},(error)=>{console.log(error)})
}*/
const navigate=useNavigate();
function updatetrans(id){
navigate("/edittrans",{state:id});
}
return(<div>
    <Link to="/">Add TransactionInfo</Link>
    <h1>view TransactionInfo</h1>
    <table>
        <tr>
            <th>account_number</th><br/>
            <th>transaction_date</th><br/>
            <th>transaction_type</th><br/>
            <th>balance_before</th><br/>
            <th>balance_after</th><br/>
        </tr>
        {
            transdet.map(
                trans=>
        <tr key={transdet.transaction_id}>
            <td>{trans.transaction_type}</td>
            <td>{trans.balance_before}</td>
            <td>{trans.balance_after}</td>
            <td><button onClick={(e)=>updatetrans(trans.transaction_type)}>Update</button></td>
            <td><button onClick={(e)=>updatetrans(trans.balance_before)}>Update</button></td>
            <td><button onClick={(e)=>updatetrans(trans.balance_after)}>Update</button></td>
            
        </tr>
            )}
    </table>
    </div>);
}
export default ViewTrans;