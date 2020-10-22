import styled from 'styled-components';
import { shade } from 'polished';

export const DropContainer = styled.div`
  margin-top: 30px;
  display: inline-block;
  cursor: pointer;
  width: 316px;
  height: 64px;
  border-radius: 15px;
  background: #06B781;
  border-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  color: #fff;
  transition: 0.2s;
  
  svg {
    margin-right: 10px;
  }

  input {
    display: none;
  }

  &:hover {
    background: ${shade(0.1, '#06B781')};
  }
`;
