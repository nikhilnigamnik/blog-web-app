import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { login } from "../Redux/authSlice";
import Button from "../components/Button";
import { Input } from "../components/Inputs";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [user, setUser] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        formData
      );
      if (response.data.success) {
        const { user, token } = response.data;
        dispatch(login({ user, token }));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <form>
      <h2>Login</h2>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
      />
      <Button onClick={handleLogin}>Login</Button>
    </form>
  );
};

export default Login;
