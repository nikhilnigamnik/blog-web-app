import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Inputs";
import Button from "../components/Button";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/register",
        formData
      );
      if (response.data.success) {
        navigate("/login");
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form>
      <h2>Register</h2>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleInputChange}
      />
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
      <Button onClick={handleRegister}>Register</Button>
    </form>
  );
};

export default Signup;
