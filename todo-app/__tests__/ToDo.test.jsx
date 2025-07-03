import { render, fireEvent, screen } from "@testing-library/react";
import ToDo from "./components/ToDo";

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

it("calls remove on click", () => {
    const mockRemove = jest.fn();
    render(<Todo id="1" task="Test" remove={mockRemove} />);
    fireEvent.click(screen.getByText("X"));
    expect(mockRemove).toHaveBeenCalledWith("1");
});
