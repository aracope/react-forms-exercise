import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (boxData) => {
    setBoxes((boxes) => [...boxes, { ...boxData, id: uuid() }]);
  };

  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      <div className="box-container">
        {boxes.map((box) => (
          <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            removeBox={removeBox}
          />
        ))}
      </div>
    </div>
  );
}

export default BoxList;
