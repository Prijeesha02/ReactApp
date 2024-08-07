import {useState}from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

function AddTrans(){
const[transdet,setTransdet]=useState("");
const navigate=useNavigate();
const handleChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setTransdet(values=>({...values,[name]:value}))
}
const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post("http://localhost:8080/transinfo/addTransactionInfo",
        {account_number:transdet.account_number,transaction_type:transdet.transaction_type,transaction_date:transdet.transaction_date,balance_before:transdet.balance_before,balance_after:transdet.balance_after})
        .then((res)=>{
            console.log(res);
            navigate("/viewtrans");
        },(error)=>{console.log(error)})
    
}
return(<div>
    <Link to="/viewtrans">View TransactionInfo</Link>
    <form onSubmit={handleSubmit}>
        
        <input type='number'name="account_number"onChange={handleChange} value={transdet.account_number}placeholder='Enter Account Number'></input><br/><br/>
        <input type='text'name="transaction_type"onChange={handleChange} value={transdet.transaction_type}placeholder='Enter Transaction Type'></input><br/><br/>
        <input type='number'name="balance_before"onChange={handleChange} value={transdet.balance_before}placeholder='Enter Before Balance'></input><br/><br/>
        <input type='number'name="balance_after"onChange={handleChange} value={transdet.balance_after}placeholder='Enter After Balance'></input><br/><br/>
        <input type='text'name="transaction_date"onChange={handleChange} value={transdet.transaction_date}placeholder='Enter Date'></input><br/><br/>

        <input type='submit'></input><br/><br/>
    </form>
</div>)
}
export default AddTrans;