import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { Input } from "../components/Inputs";
const CreateBlog = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });
  // input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/blog/createBlog",
        {
          title: inputs.title,
          description: inputs.description,
          image: inputs.image,
          user: user._id,
        }
      );
      if (data?.success) {
        console.log("Blog Created");
        navigate("/user");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Create A Pots</h1>
          <p sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}>
            Title
          </p>
          <Input
            name="title"
            value={inputs.title}
            onChange={handleChange}
            required
          />
          <h1 sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}>
            Description
          </h1>
          <Input
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <h1 sx={{ mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }}>
            Image URL
          </h1>
          <Input
            name="image"
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Button type="submit" color="primary" variant="contained">
            SUBMIT
          </Button>
        </div>
      </form>
    </>
  );
};

export default CreateBlog;
