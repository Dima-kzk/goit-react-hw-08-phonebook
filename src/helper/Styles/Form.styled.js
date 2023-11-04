import styled from '@emotion/styled';

export const Form = styled.form`
  border-bottom: 2px solid gray;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  margin-top: 5px;
  width: 200px;
  border-radius: 4px;
  border: none;
  outline: 2px solid grey;
  font-weight: 600;
  color: #5187ec;
  &:focus {
    outline: 2px solid #5187ec;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  border: 1px solid grey;
  border-radius: 4px;
  width: 120px;
  height: 20px;
  text-align: center;
  background-color: #fff;
  &:hover {
    cursor: pointer;
    background-color: #5187ec;
  }
`;
