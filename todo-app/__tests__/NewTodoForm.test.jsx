import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewTodoForm from "../src/components/NewTodoForm";

it("renders without crashing", () => {
  render(<NewTodoForm addTodo={() => { }} />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm addTodo={() => { }} />);
  expect(asFragment()).toMatchSnapshot();
});

it("submits form and calls addTodo", async () => {
  const mockAdd = jest.fn();
  render(<NewTodoForm addTodo={mockAdd} />);
  
  await userEvent.type(screen.getByLabelText(/task/i), "Walk dog"); 
  await userEvent.click(screen.getByText("Add"));                    

  expect(mockAdd).toHaveBeenCalledWith("Walk dog");
});
