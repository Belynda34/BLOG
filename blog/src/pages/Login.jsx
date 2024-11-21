import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const {login} = useContext(AuthContext);



  const [error, setErorr] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/");
    } catch (error) {
      setErorr(error.response?.data || "An unexpected error occured");
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="email" name="email" onChange={handleChange}/>
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>
          Don't have an account?<Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
