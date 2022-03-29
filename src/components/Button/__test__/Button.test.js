import { render, screen } from '@testing-library/react';
import Button from '../Button'
const mockedonClick = jest.fn();
describe("Button", () => {
    it('should render Button with number 3', () => {
        render(
            <Button
                className={""}
                onClick={mockedonClick}
                value={"3"}
                id={"3"}
            />
        );
        const buttonElement = screen.getByTestId("3");
        expect(buttonElement).toBeInTheDocument();
    });
    it('should render equal Button with Read colour', () => {
        render(
            <Button
                className={"equals"}
                onClick={mockedonClick}
                value={"="}
                id={"="}
            />
        );
        const buttonElement = screen.getByTestId("=");
        expect(buttonElement).toBeInTheDocument();
    });
})
    