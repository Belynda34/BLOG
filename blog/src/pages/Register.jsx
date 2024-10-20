import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  const [inputs,setInputs] =useState({
    username:"",
    email:"",
    password:""
  })
  const [error,setErorr] = useState(null);
  const handleChange = (e) => {
      setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const navigate = useNavigate();

  const handleSubmit = async e =>{
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register",inputs); 
      navigate("/login");
    } catch (error) {
      setErorr(error.response.data);
      console.log(error);
    }
    
  }


  return (
   
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required  type='text' name='username' placeholder='Username' onChange={handleChange}/>
        <input required  type='email' name='email' placeholder='Email' onChange={handleChange}/>
        <input required  type='password' name='password'  placeholder='Password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
          {error && <p>{error}</p>}
        <span>Already have an account?<Link to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register;