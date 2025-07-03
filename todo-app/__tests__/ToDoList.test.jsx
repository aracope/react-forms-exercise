import { render, fireEvent, screen } from "@testing-library/react";
import ToDoList from "../components/ToDoList";

it("renders without crashing", () => {
    render(<TodoList />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByLabelText(/task/i), {
        target: { value: "Buy milk" }
    });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
});

it("can remove a todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByLabelText(/task/i), {
        target: { value: "Buy milk" }
    });
    fireEvent.click(screen.getByText("Add"));
    fireEvent.click(screen.getByText("X"));
    expect(screen.queryByText("Buy milk")).not.toBeInTheDocument();
});