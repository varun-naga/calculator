import { render, screen } from '@testing-library/react';
import Button from '../../Button/Button'
import ButtonWrapper from '../../ButtonWrapper/ButtonWrapper';
import Display from '../../Display/Display';
import Wrapper from '../Wrapper';
const mockedclickHandler = jest.fn();
const btnValues = [
    ["AC", "Del", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
];
const MockButtonWrapper = () => {
    return (
        btnValues.flat().map((btn, i) => {
            return (
                <Button
                    key={i}
                    className={btn === "=" ? "equals" : ""}
                    value={btn}
                    onClick={() => mockedclickHandler(btn)}
                    id={btn}
                />
            );
        }
        )

    )
}
describe("<ButtonWrapper />", () => {
    it("render all buttons", () => {
        render(<Wrapper><MockButtonWrapper /></Wrapper>)
        let buttons
        btnValues.flat().forEach(i => {
            buttons = screen.getAllByRole("button");
        });
        expect(buttons.length).toBe(19)
    });
    it("render expression", () => {
        render(<Wrapper><Display value={"2 * 3"} /></Wrapper>)
        const displayElement = screen.getByText(/2*3/);
        expect(displayElement).toBeInTheDocument();
    });
    it("render result", () => {
        render(<Wrapper><Display value={eval(2 * 3)} /></Wrapper>)
        const displayElement = screen.getByText(/6/i);
        expect(displayElement).toBeInTheDocument();
    });
}
)