import React from "react";

function Box({ id, width, height, backgroundColor, removeBox }) {
  const handleRemove = () => removeBox(id);

  return (
    <div className="box-wrapper">
      <div data-testid="box"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor,
          margin: "10px",
        }}
      />
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Box;
