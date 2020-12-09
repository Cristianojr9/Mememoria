import styled from 'styled-components';
import { shade } from 'polished';

export const Button = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 20px;

  border-radius: 15px;
  border-color: transparent;
  background: #06B781;
  font-size: 25px;
  color: #fafafa;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: ${shade(0.1, '#06B781')};
  }

  .Toastify__toast--success {
    background: #06B781;
  }
`;

export const Span = styled.span`
  color: #33353A;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 400;

  cursor: pointer;
`;

export const Form = styled.div`
  input {
    width: 588px;
    height: 50px;
    border: none; 
    background: #FFFF;
    border-radius: 15px;
    border: 2px solid #06B781;
    font-size: 20px;
    padding: 20px;
  }

  .div-select {
    width: 600px;
    margin-top: 20px;

    select {
      width: 588px;
      height: 64px; 
      border-color: transparent;
      background: #F2FCF9;
      color: #33353A;
      padding: 20px;
      font-size: 18px;
      border-radius: 15px;
    }
  }
`;
