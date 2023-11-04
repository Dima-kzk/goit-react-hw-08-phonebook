import styled from '@emotion/styled';

export const Li = styled.li`
  margin-left: 0;
  margin-right: 15px;
  padding: 3px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: baseline;
  border-radius: 4px;
`;

export const Button = styled.button`
  margin-left: 20px;
  border: 1px solid grey;
  border-radius: 4px;
  width: 70px;
  height: 20px;
  text-align: center;
  background-color: #fff;
  &:hover {
    cursor: pointer;
    background-color: lightcoral;
  }
`;

export const Span = styled.span`
  padding-left: 10px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
