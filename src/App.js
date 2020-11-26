import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [minVal, setMinVal] = useState("");
  const [maxVal, setMaxVal] = useState("");
  const [randomNum, setRandomNum] = useState("");

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="randomNum">
          <p>
            Random number <span>{randomNum}</span>
          </p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input
              type="number"
              value={minVal}
              onChange={(e) => setMinVal(+e.target.value)}
            />
          </div>
          <div>
            <p>Max:</p>
            <input
              type="number"
              value={maxVal}
              onChange={(e) => setMaxVal(+e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleRandomNum}>Get Random Number</button>
      </div>
    </div>
  );
}
