import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LinkStyled = styled(Link)`
  display: block;
  padding: 5px;
  border: 1px solid grey;
  border-radius: 4px;

  color: black;
  text-transform: none;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #5187ec;
    transition: background-color 0.5 ms ease-in-out;
  }
`;
