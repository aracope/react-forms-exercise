import React, { useState } from "react";

function NewBoxForm({ addBox }) {
  const INITIAL_STATE = { width: "", height: "", backgroundColor: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Width:
        <input
          type="number"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </label>
      <label>
        Height:
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </label>
      <label>
        Background Color:
        <input
          type="text"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
      </label>
      <button>Add Box</button>
    </form>
  );
}

export default NewBoxForm;
