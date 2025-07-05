import React from "react";

function Todo({ id, task, remove }) {
  return (
    <div>
      <span>{task}</span>
      <button onClick={() => remove(id)}>X</button>
    </div>
  );
}

export default Todo;
