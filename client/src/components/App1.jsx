import React, { useState, useEffect } from "react";
import axios from "axios";

const App1 = () => {
  const [apiMessage, setApiMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/namay");
      setApiMessage(response.data.message); // Assuming your API returns { message: '...' }
      console.log("Data from Flask API:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>App1 Component</h1>
      <p>Message from Flask API: {apiMessage}</p>
      {/* Your frontend content specific to App1 component */}
    </div>
  );
};

export default App1;
