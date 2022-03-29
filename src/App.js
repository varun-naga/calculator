import './App.css';
import Wrapper from './components/wrapper/Wrapper';
import Button from './components/Button/Button';
import ButtonWrapper from './components/ButtonWrapper/ButtonWrapper';
import Display from './components/Display/Display';
import { useState } from 'react';

function App() {
  const [expression,setExpression]=useState("");
  const [result,setResult]=useState("");
  const operators=['/','*','+','-','.','%'];
  const digits=[0,1,2,3,4,5,6,7,8,9];
  
  const btnValues = [
    ["AC", "Del", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1","2","3", "+"],
    ["0", ".", "="],
  ]; 
  const clickHandler = (input) => {
    if ((operators.includes(input) && expression === '') ||
      (operators.includes(input) && operators.includes(expression.slice(-1)))) {
      return;
    }
    else{
      if (input === "AC") {
        setExpression("0")
        setResult("")
        return;
      }
      if (input === "Del") {
        Delete()
        return
      } 
      if (input === '=') {
        setResult(eval(expression).toString())
        return;
        }
      setExpression(expression + input)
    }
  }
  const Delete=()=>{
    if (expression === '0')
      return
      else{
        setExpression(expression.slice(0,-1))
      }
  }
  return (
    <div className="App">
      <Wrapper>
        <Display value={expression === '' ? '0' : expression} />
        <Display value={result}/>
        <ButtonWrapper>
        {
          btnValues.flat().map((btn, i) => 
          {
            return (
              <Button
                key={i}
                className={btn === "="? "equals" : ""}
                value={btn}
                onClick={() => clickHandler(btn)
                }
                id={btn}
                />
                );
          }
          )
        }
        </ButtonWrapper>
      </Wrapper>
    </div>
  );
}

export default App;
