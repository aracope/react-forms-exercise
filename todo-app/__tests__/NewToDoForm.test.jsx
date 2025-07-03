import { render, fireEvent, screen } from "@testing-library/react";
import NewToDoForm from "../components/NewToDoForm";

it("renders without crashing", () => {
  render(<NewTodoForm addTodo={() => { }} />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm addTodo={() => { }} />);
  expect(asFragment()).toMatchSnapshot();
});

it("submits form and calls addTodo", () => {
  const mockAdd = jest.fn();
  render(<NewTodoForm addTodo={mockAdd} />);
  fireEvent.change(screen.getByLabelText(/task/i), {
    target: { value: "Walk dog" }
  });
  fireEvent.click(screen.getByText("Add"));
  expect(mockAdd).toHaveBeenCalledWith("Walk dog");
});
