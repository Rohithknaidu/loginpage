import React ,{useState} from "react";
import './App.css';
import  Login  from "./login"
import Createanaccount from "./Createanaccount";

function App() {
  const [currentwork,setCurrentwork]=useState('Login ');
  const togglework=(workName)=>{
    setCurrentwork(workName);
  }
  return (
    <div className='main'>
       {
        currentwork==="Login"?<Login onFormSwitch={togglework}/>:<Createanaccount onFormSwitch={togglework}/>
       }
    </div>
  );
}

export default App;
