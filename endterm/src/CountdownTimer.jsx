import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialSeconds }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);

  useEffect(() => {
    if (secondsRemaining > 0) {
      const timer = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [secondsRemaining]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <div style={{ fontSize: "24px" }}>
      <h2>Countdown Timer</h2>
      <p>{secondsRemaining > 0 ? formatTime(secondsRemaining) : "Time's up!"}</p>
    </div>
  );
};

export default CountdownTimer;

// create a PHP program that defines a function doubleValue() which accepts an array of numbers by value, doubles each number inside the function 
// and displays the modified array. After the function call, print the original array to demonstrate that the changes inside the function did not affect the original array (illustrating call by value)