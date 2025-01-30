import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import Button from "../../components/Button/Button";
import {
  ButtonWrapper,
  ErrorBlock,
  Lesson11Wrapper,
  DataWrapper,
  ResultBlock,
} from "./styles";
import Spinner from "../../components/Spinner/Spinner";

function Lesson11() {
  const [catFact, setCatFact] = useState<string[]>([]);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchJokeData = async () => {
    setError(undefined);

    try {
      setIsLoading(true);
      const result = await axios.get("https://catfact.ninja/fact");
      setCatFact([...catFact, result.data.fact]);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const delAllData = async () => {
    setCatFact([]);
  };

//   useEffect(() => {fetchJokeData() }, []);

  return (
    <Lesson11Wrapper>
      <ButtonWrapper>
        <Button name="GET MORE INFO" onClick={fetchJokeData} />
      </ButtonWrapper>
      {isLoading && <Spinner />}
      {error && <ErrorBlock>{error}</ErrorBlock>}
      {catFact.length > 0 && (
        <DataWrapper>
          {catFact.map((fact, index) => (
            <ResultBlock key={index}>{fact}</ResultBlock>
          ))}
        </DataWrapper>
      )}
      {catFact.length > 0 && (
        <ButtonWrapper>
          <Button name="DELETE ALL DATA" onClick={delAllData} />
        </ButtonWrapper>
      )}
    </Lesson11Wrapper>
  );
}

export default Lesson11;
