import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setData } from "../Redux/DataSlice";

const ApiHandler = () => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const apiUrl = "https://localhost:4000";

    axios
      .get(apiUrl)
      .then((response) => {
        dispatch(setData(response.data));
        setResponseData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>API Data</h1>
      <ul>
        {responseData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiHandler;
