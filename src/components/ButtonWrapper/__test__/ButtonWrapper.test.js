import { render, screen } from '@testing-library/react';
import Button from '../../Button/Button'
import ButtonWrapper from '../ButtonWrapper';
const mockedclickHandler = jest.fn();
const btnValues = [
  ["AC", "Del", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1","2","3", "+"],
  ["0", ".", "="],
];
const Helper=()=>{
  return (
    btnValues.flat().map((btn, i) => 
    {
      return (
        <Button
          key={i}
          className={btn === "="? "equals" : ""}
          value={btn}
          onClick={()=>mockedclickHandler(btn)}
          id={btn}
          />
          );
    }
    )
    
  )
}
const MockButtonWrapper = ({children}) => {
  return(
  <ButtonWrapper>
    {children}
  </ButtonWrapper>
  )
}
describe("<ButtonWrapper />", () => {
    it("render all buttons", () => {
      render(<MockButtonWrapper><Helper/></MockButtonWrapper>)
      btnValues.flat().forEach(i => {
        expect(screen.getByTestId(i)).toBeInTheDocument()
      });
    });
  });