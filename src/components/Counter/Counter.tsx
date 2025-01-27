import Button from "../Button/Button";
import { MainCounter, Wrapper_Counter, Result_Container } from "./styles";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const onPlusClick = (): void => {
    setCounter((prevValue) => {
      return prevValue + 1;
    });
  };

  console.log("counter in Counter Component", counter);

  const onMinusClick = (): void => {
    setCounter((prevValue) => prevValue - 1);
  };

  return (
    <MainCounter>
      <Wrapper_Counter>
        <Button name="-" type="button" onClick={onMinusClick} />
      </Wrapper_Counter>
      <Result_Container>{counter}</Result_Container>
      <Wrapper_Counter>
        <Button name="+" type="button" onClick={onPlusClick} />
      </Wrapper_Counter>
    </MainCounter>
  );
}

export default Counter;
