import React from "react";
import { useFormik } from "formik";

function NewTodoForm({ addTodo }) {
  const formik = useFormik({
    initialValues: { task: "" },
    onSubmit: (values, { resetForm }) => {
      addTodo(values.task);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        id="task"
        name="task"
        type="text"
        placeholder="Enter a task"
        aria-label="Task"
        onChange={formik.handleChange}
        value={formik.values.task}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NewTodoForm;