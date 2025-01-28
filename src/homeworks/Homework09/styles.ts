import styled from "@emotion/styled";

export const HW09Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 20px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;
  padding: 20px;
  background-color: #ebf8a9;
`;
export const Result = styled.div`
  font-size: 34px;
`;
export const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 30px;

  &:hover Input {
    background-color: #f3f5e6;
  }
`;


