import React, { useState, useEffect } from "react";

function LightSwitch() {
  // useState: store light status
  const [isLightOn, setIsLightOn] = useState<boolean>(false);

  // useEffect: react when light status changes
  useEffect(() => {
    if (isLightOn) {
      console.log("Light is ON 💡");
    } else {
      console.log("Light is OFF 🌑");
    }
  }, [isLightOn]); // runs when isLightOn changes

  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>Light Switch Example</h2>

      <p>
        Light Status:{" "}
        <strong>{isLightOn ? "ON" : "OFF"}</strong>
      </p>

      <button onClick={() => setIsLightOn(!isLightOn)}>
        {isLightOn ? "Turn OFF" : "Turn ON"}
      </button>

      <div
        style={{
          marginTop: "20px",
          width: "100px",
          height: "100px",
          backgroundColor: isLightOn ? "yellow" : "gray",
        }}
      />
    </div>
  );
}

export default LightSwitch;
