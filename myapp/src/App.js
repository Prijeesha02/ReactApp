import logo from './logo.svg';
import './App.css';
import'./style.css';
import Home from'./components/home';
import Contact from'./components/contact';
import About from'./components/about';
import{BrowserRouter as Router,Routes,Route,Navigate}from 'react-router-dom';
//import AddEmp from'./components/addemp';
//import ViewEmp from'./components/viewemp';
//import EditEmp from'./components/editemp';
import AddTrans from './components/addtrans';
import ViewTrans from './components/viewtrans';
import EditTrans from './components/edittrans';
function App() {
  return (
   <Router>
    <Routes>
      {/*<Route  path='/'element ={<Home/>}></Route>*/}
      <Route path='/contact' element={<Contact/>}></Route>*/
      <Route path="/about" element={<About/>}></Route>

      <Route exact path="/"element ={<AddTrans/>}></Route>
      <Route path="/viewtrans" element={<ViewTrans/>}></Route>
      <Route path="/edittrans" element={<EditTrans/>}></Route>
      <Route path="*" element={<Navigate to ="/"></Navigate>}></Route>
    </Routes>
   </Router>
   
  );
}

export default App;
