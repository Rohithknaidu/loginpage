import React,{ useState } from "react";


export const Login=(props)=>{
    const [email,setEmail]=useState(' ');
    const [pass,setPass]=useState(' ');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }
    return(
    <div className="main1">
        <h2>login form</h2>
      <form  className="main2" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(r)=>setEmail(r.target.value)} type="email" placeholder="please enter u r mail id" id="email" name="email"/>
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(r)=>setPass(r.target.value)} type="password" placeholder="please enter u r password" id="password" name="password"/>
        <button type="submit">submit</button>
      </form>
      <button className="ro" onClick={()=>props.onFormSwitch('Createanaccount')}>don't have an account? register</button>
    </div>
    )
}
export default Login;
