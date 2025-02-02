import { useState, ChangeEvent, useEffect } from "react";
import Input from "../../components/Input/Input";
import Spinner from "../../components/Spinner/Spinner";
import { HW10Wrapper, ErrorBlock, ResultBlock, ImageDog } from "./styles";
import axios from "axios";

function Homework10() {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>("");
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [picture, setPicture] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  const fetchDog = async () => {
    setPicture("");
    setError(undefined);

    try {
        setIsLoading(true);
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      const data = result.data;
      setPicture(data.message);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { inputValue && fetchDog() }, [inputValue]);

  return (
    <HW10Wrapper>
      <Input name="picture" value={inputValue} onChange={onChange}></Input>
      <Input name="picture2" value={inputValue2} onChange={onChange2}></Input>
      {picture && <ResultBlock><ImageDog src={picture} alt="dog" ></ImageDog></ResultBlock>}
      {isLoading && <Spinner />}
      {error && <ErrorBlock>{error}</ErrorBlock>}
    </HW10Wrapper>
  );
}
export default Homework10;
