import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../src/components/TodoList";

it("renders without crashing", () => {
    render(<TodoList />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new Todo", async () => {
    render(<TodoList />);

    await userEvent.type(screen.getByLabelText(/task/i), "Buy milk");
    await userEvent.click(screen.getByText("Add"));

    expect(screen.getByText("Buy milk")).toBeInTheDocument();
});

it("can remove a Todo", async () => {
    render(<TodoList />);

    await userEvent.type(screen.getByLabelText(/task/i), "Buy milk");
    await userEvent.click(screen.getByText("Add"));
    await userEvent.click(screen.getByText("X"));
    expect(screen.queryByText("Buy milk")).not.toBeInTheDocument();
});
