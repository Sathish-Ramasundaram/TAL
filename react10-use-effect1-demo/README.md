
* **`useState`** → remembers *whether the video should play or pause*
* **`useEffect`** → actually *plays or pauses the video* when state changes

👉 Same concept as **sound**, just a **video element** instead of audio.

---

## Put a Video File

1. Get a small video file (example: `sample.mp4`)
2. Place it inside the **`public`** folder

```
public/
 └── sample.mp4
```

---

## Video Player Code

### 📄 `src/VideoPlayer.tsx`

```tsx
import React, { useState, useEffect, useRef } from "react";

function VideoPlayer() {
  // 1️⃣ State: should video play or not?
  const [isPlaying, setIsPlaying] = useState(false);

  // 2️⃣ Reference to the video element
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // 3️⃣ Effect: play/pause video when state changes
  useEffect(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.play();
      console.log("Video playing 🎥");
    } else {
      videoRef.current.pause();
      console.log("Video paused ⏸️");
    }
  }, [isPlaying]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Video Player Demo</h2>

      <video
        ref={videoRef}
        width="400"
        controls
        style={{ border: "2px solid black" }}
      >
        <source src="/sample.mp4" type="video/mp4" />
        Your browser does not support video.
      </video>

      <br /><br />

      <button
        onClick={() => setIsPlaying(!isPlaying)}
        style={{ padding: "10px", fontSize: "16px" }}
      >
        {isPlaying ? "Pause Video" : "Play Video"}
      </button>
    </div>
  );
}

export default VideoPlayer;
```

---

## Use in `App.tsx`

### 📄 `src/App.tsx`

```tsx
import React from "react";
import VideoPlayer from "./VideoPlayer";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Video Player</h1>
      <VideoPlayer />
    </div>
  );
}

export default App;
```

---

## Step-by-Step Flow (MOST IMPORTANT)

### Step 1: Button Click

```tsx
setIsPlaying(true);
```

* State changes → `isPlaying = true`

---

### Step 2: React Re-renders

* Component redraws

---

### Step 3: `useEffect` Runs

```ts
useEffect(() => { ... }, [isPlaying]);
```

* React sees `isPlaying` changed

---

### Step 4: Video Reacts

```ts
videoRef.current.play();
```

or

```ts
videoRef.current.pause();
```

🎯 **This is the real magic** —
State change → Effect → Actual video action

---

## 🧠 Beginner Memory Trick

> **State = intention**
> **Effect = action**

* “I want to play the video” → `useState`
* “Okay, play the video now” → `useEffect`

---

## 🔥 Important Interview-Level Note (Still Beginner-Friendly)

* **Never control DOM directly without `useRef`**
* `useRef` lets React safely access video/audio elements
* `useEffect` is the correct place for play/pause logic

---
