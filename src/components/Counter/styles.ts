import styled from '@emotion/styled';

export const MainCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  min-width: 400px;
  padding: 20px;
  background-color: rgb(184, 235, 235);
  border: 2px solid rgb(31, 31, 141);
  border-radius: 4px;
`
export const Wrapper_Counter = styled.div`
  width: 100px;
  &:hover Button {
  min-width: 200px;
  background-color: rgb(25, 146, 252);
}
`

export const Result_Container = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: rgb(15, 15, 75);
`