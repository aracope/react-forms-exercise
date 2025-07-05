import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";   
import Todo from "../src/components/Todo";

it("renders without crashing", () => {
  render(<Todo id="1" task="Test" remove={() => { }} />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Todo id="1" task="Test" remove={() => { }} />);
  expect(asFragment()).toMatchSnapshot();
});

it("displays task", () => {
  render(<Todo id="1" task="Test task" remove={() => { }} />);
  expect(screen.getByText("Test task")).toBeInTheDocument();
});

it("calls remove on click", async () => {
  const mockRemove = jest.fn();
  render(<Todo id="1" task="Test" remove={mockRemove} />);
  
  await userEvent.click(screen.getByText("X"));  
  expect(mockRemove).toHaveBeenCalledWith("1");
});
