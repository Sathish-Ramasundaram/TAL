
---

## First: What is a “Hook”?

In React:

* A **hook** is a special function
* It lets a **functional component** do extra things

Two very important hooks:

* `useState` → store & change data
* `useEffect` → run code at certain times

---

## `useState` (Component Memory)

### What is `useState`?

`useState` gives your component a **memory** 🧠

If data:

* changes
* and affects what you see on screen

👉 That data should be **state**

---

### Very Simple Example (Idea Only)

```ts
const [count, setCount] = useState(0);
```

Meaning:

* `count` → current value
* `setCount` → function to change value
* `0` → starting value

---

### Real-Life Example

Think of a **scoreboard**:

* Score changes
* Display updates

Score = **state**

---

## `useEffect` (Doing Something When Things Happen)

### What is `useEffect`?

`useEffect` runs **side effects**.

Side effects = things that are **not UI**
Examples:

* Console logging
* Fetching data
* Timers
* Reacting to state changes

---

### Real-Life Example

Think of a **door sensor** 🚪:

* When door opens → light turns ON
* When door closes → light turns OFF

The **reaction** = `useEffect`

---

## Key Difference (Very Important Table)

| Feature             | useState         | useEffect       |
| ------------------- | ---------------- | --------------- |
| Purpose             | Store data       | Run code        |
| Changes UI?         | ✅ Yes            | ❌ No            |
| Runs automatically? | ❌ No             | ✅ Yes           |
| Used for            | Counters, inputs | Logs, API calls |
| Affects render      | Directly         | Indirectly      |

---

## Simple Rule to Remember 🧠

* **If you want to STORE something → `useState`**
* **If you want to DO something → `useEffect`**

---

### 📄 `src/UseStateVsUseEffect.tsx`

```tsx
import React, { useState, useEffect } from "react";

function UseStateVsUseEffect() {
  // useState: stores data
  const [count, setCount] = useState<number>(0);

  // useEffect: runs code when something changes
  useEffect(() => {
    console.log("Count changed to:", count);
  }, [count]); // runs when count changes

  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h2>useState vs useEffect</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default UseStateVsUseEffect;
```

---

### 📄 `src/LightSwitch.tsx`

```tsx
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
```

---

* **Switch position** → `useState`
* **Light reaction** → `useEffect`

---

### 📄 `src/MultiStateEffectDemo.tsx`

```tsx
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
```

---
