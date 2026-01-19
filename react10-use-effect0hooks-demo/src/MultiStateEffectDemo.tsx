import React, { useState, useEffect } from "react";

function MultiStateEffectDemo() {
  // 5 States
  const [isLightOn, setIsLightOn] = useState<boolean>(false);
  const [isFanOn, setIsFanOn] = useState<boolean>(false);
  const [isDoorLocked, setIsDoorLocked] = useState<boolean>(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState<boolean>(false);
  const [isACOn, setIsACOn] = useState<boolean>(false);

  // Status message state
  const [statusMessage, setStatusMessage] = useState<string>("All systems initialized.");

  // useEffect: runs whenever ANY state changes
  useEffect(() => {
    // 1️⃣ Console log
    console.log("Current Room Status:");
    console.log({
      Light: isLightOn,
      Fan: isFanOn,
      Door: isDoorLocked ? "Locked" : "Unlocked",
      Music: isMusicPlaying,
      AC: isACOn,
    });

    // 2️⃣ Update status message on screen
    const messages = [
      `Light: ${isLightOn ? "ON 💡" : "OFF 🌑"}`,
      `Fan: ${isFanOn ? "ON 🌬️" : "OFF 🛑"}`,
      `Door: ${isDoorLocked ? "Locked 🔒" : "Unlocked 🔓"}`,
      `Music: ${isMusicPlaying ? "Playing 🎵" : "Stopped ⏹️"}`,
      `AC: ${isACOn ? "ON ❄️" : "OFF 🛑"}`,
    ];
    setStatusMessage(messages.join(" | "));

    // 3️⃣ Change background color depending on light
    document.body.style.backgroundColor = isLightOn ? "#fffacd" : "#d3d3d3";

    // 4️⃣ Optional alert (commented out to avoid annoying popups)
    // alert("Room state changed! Check console and status message.");

    // 5️⃣ Simulated side effect: log “Energy usage” based on states
    let energyUsage = 0;
    if (isLightOn) energyUsage += 10;
    if (isFanOn) energyUsage += 20;
    if (isACOn) energyUsage += 30;
    console.log("Estimated Energy Usage:", energyUsage, "Watts");
  }, [isLightOn, isFanOn, isDoorLocked, isMusicPlaying, isACOn]);

  return (
    <div style={{ border: "2px solid black", padding: "20px", maxWidth: "600px", margin: "20px auto" }}>
      <h2>Multi-State & Multi-Effect Demo</h2>
      <p><strong>Status:</strong> {statusMessage}</p>

      {/* 5 Buttons to control 5 states */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button onClick={() => setIsLightOn(!isLightOn)}>
          {isLightOn ? "Turn Light OFF" : "Turn Light ON"}
        </button>
        <button onClick={() => setIsFanOn(!isFanOn)}>
          {isFanOn ? "Turn Fan OFF" : "Turn Fan ON"}
        </button>
        <button onClick={() => setIsDoorLocked(!isDoorLocked)}>
          {isDoorLocked ? "Unlock Door" : "Lock Door"}
        </button>
        <button onClick={() => setIsMusicPlaying(!isMusicPlaying)}>
          {isMusicPlaying ? "Stop Music" : "Play Music"}
        </button>
        <button onClick={() => setIsACOn(!isACOn)}>
          {isACOn ? "Turn AC OFF" : "Turn AC ON"}
        </button>
      </div>
    </div>
  );
}

export default MultiStateEffectDemo;
