import { render, screen, fireEvent } from '@testing-library/react';
//import Button from '../../Button/Button'
import Display from "../Display"
//const mockedonClick = jest.fn();

jest.mock('../../Button/Button')

describe("Display", () => {
    it('should display the expression', () => {
        render(
            <Display
                value={"2*3"}
            />
        );
        const displayElement = screen.getByText(/2*3/i);
        expect(displayElement).toBeInTheDocument();
    });
    it('should display the result 10', () => {
        render(
            <Display
                value={10}
            />
        );
        const displayElement = screen.getByText(/10/i);
        expect(displayElement).toBeInTheDocument();
    });
    // it('should be able to type into input', () => {
    //     render(
    //         <Display 
    //            value={10}
    //         />
    //     );
    //     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    //     fireEvent.click(inputElement)
    //     fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
    //     const buttonElement = screen.getByRole("button", { name: /Add/i});
    //     fireEvent.click(buttonElement)
    //     expect(mockedSetTodo).toBeCalled()
    // });

    
})