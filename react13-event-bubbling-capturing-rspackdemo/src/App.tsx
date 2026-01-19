import React from "react";

function App() {
  const handleGrandParentClick = () => {
    console.log("Grandparent clicked");
  };

  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation(); // Stop bubbling
    console.log("Child button clicked");
  };

  return (
    <div
      onClickCapture={() => console.log("Grandparent CAPTURE")}
      onClick={handleGrandParentClick}
      style={{
        padding: "40px",
        backgroundColor: "#ffdcdc"
      }}
    >
      Grandparent
      <div
        onClickCapture={() => console.log("Parent CAPTURE")}
        onClick={handleParentClick}
        style={{
          padding: "40px",
          backgroundColor: "#dcf0ff"
        }}
      >
        Parent
        <button
          onClickCapture={() => console.log("Button CAPTURE")}
          onClick={handleChildClick}
          style={{
            padding: "10px",
            marginTop: "10px"
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
