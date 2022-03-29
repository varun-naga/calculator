import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
const btnValues = [
  ["AC", "Del", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1","2","3", "+"],
  ["0", ".", "="],
];
test('renders all the buttons', () => {
  render(<App />);
    btnValues.flat().forEach(i => {
      expect(screen.getByTestId(i)).toBeInTheDocument()
    });
  });
test('should have empty input when AC button is cliked', () => {
  render(
      <App/>
  );
  const displayElement = screen.getByText(/0/i);
  fireEvent.change(displayElement, { target: { value: "20" } });
  const buttonElement = screen.getByRole("button", { value: /AC/i }, { hidden: true });
  fireEvent.click(buttonElement)
  expect(displayElement.value).toBe("")
});
