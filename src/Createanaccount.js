import React,{ useState } from "react";


export const Createanaccount=(props)=>{
    const [email,setEmail]=useState(' ');
    const [pass,setPass]=useState(' ');
    const [name,setName]=useState(' ');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    
    }
    return(
    <div className="main1">
        <h2>creating an account</h2>
      <form  className="main3"onSubmit={handleSubmit}>
        <label htmlFor="name">full name</label>
        <input value={name} onChange={(r)=>setName(r.target.value)} type="true"  name="name" id="name" placeholder="fullname"/>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(r)=>setEmail(r.target.value)} type="email" placeholder="please enter u r mail id" id="email" name="email"/>
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(r)=>setPass(r.target.value)} type="password" placeholder="please enter u r password" id="password" name="password"/>
        <button type="submit">submit</button>
      </form>
      <button className="ro"onClick={()=>props.onFormSwitch('Login')}>already exist an account?Login here</button>
    </div>
    )
}
export default Createanaccount;
