import { useState } from "react";

export default function App() {
  const [bgColor, setBgColor] = useState("white");
  function switchMe(color) {
    setBgColor(color);
  }

  return (
    <>
      <div
        style={{
          backgroundColor: bgColor,
          height: "100vh",
          textAlign: "center",
          paddingTop: "100px",
          transition: "background-color 0.5s",
        }}
      >
        <h1>Color Switcher</h1>
        <input
          type="text"
          placeholder="Enter a color... "
          onSubmit={(e) => switchMe(e.target.value)}
        />
        <button onClick={() => switchMe("Blue")}>Switch to Blue</button>
        <button onClick={() => switchMe("Green")}>Switch to Green</button>
        <button onClick={() => switchMe("white")}>Reset</button>
        <p style={{ color: bgColor === "white" ? "black" : "white" }}>
          {bgColor}
        </p>
      </div>
    </>
  );
}
