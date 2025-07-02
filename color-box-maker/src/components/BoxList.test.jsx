import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";



// Smoke
it("renders without crashing", () => {
  render(<BoxList />);
});

// Snapshot
it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// Add and remove box
it("can add and remove a box", () => {
  const { getByLabelText, getByText, queryByTestId } = render(<BoxList />);
  const widthInput = getByLabelText(/width/i);
  const heightInput = getByLabelText(/height/i);
  const colorInput = getByLabelText(/background color/i);

  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "100" } });
  fireEvent.change(colorInput, { target: { value: "red" } });
  fireEvent.click(getByText("Add Box"));

  const box = queryByTestId("box");
  expect(box).toBeInTheDocument();

  const removeBtn = getByText("X");
  fireEvent.click(removeBtn);

  expect(queryByTestId("box")).not.toBeInTheDocument();
});
