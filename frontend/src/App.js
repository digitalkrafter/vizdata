import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/members") // Make sure the URL is correct
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data.members); // Access the members array directly
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>App</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li> // Directly displaying the item
        ))}
      </ul>
    </div>
  );
}

export default App;
