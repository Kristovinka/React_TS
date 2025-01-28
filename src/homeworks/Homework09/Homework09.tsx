import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import {
  HW09Wrapper,
  InputsContainer,
  Result,
  ResultContainer,
} from "./styles";
import Button from "../../components/Button/Button";
function Homework09() {
  const [Value1, setValue1] = useState<string>("");
  const [Value2, setValue2] = useState<string>("");
  const [showResults, setShowResults] = useState(false);

  const onChangeValue1 = (event: ChangeEvent<HTMLInputElement>) => {
    setValue1(event.target.value);
  };

  const onChangeValue2 = (event: ChangeEvent<HTMLInputElement>) => {
    setValue2(event.target.value);
  };

  const handleButtonClick = () => {
    setShowResults(true); // Show results when button is clicked
  };

  return (
    <HW09Wrapper>
      <InputsContainer>
        <Input
          name="Value1"
          label="Value1"
          id="value1_id"
          placeholder="Enter your Value1"
          value={Value1}
          onChange={onChangeValue1}
        />
        <Input
          name="Value2"
          label="Value2"
          id="value2_id"
          placeholder="Enter your Value2"
          value={Value2}
          onChange={onChangeValue2}
        />{" "}
        {showResults && (
          <ResultContainer>
            <Result>{Value1}</Result>
            <Result>{Value2}</Result>
          </ResultContainer>
        )}
        <Button name="Show Results" type="button" onClick={handleButtonClick} />
      </InputsContainer>
    </HW09Wrapper>
  );
}
export default Homework09;
