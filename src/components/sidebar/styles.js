import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  width: 392px;
  max-width: 392px;
  height: 100vh;
  max-width: 492px;
  background: #F0F1F1;
  box-shadow: 0px 3px 6px #1111;

  display: grid;
  align-items: center;
  justify-content: center;
`;

export const Option = styled(Link)`
  margin-top: 20px;
  display: flex;
  align-items: center;

  font-size: 25px;
  transition: 0.2s;
  color: ${props => props.selected ? "#06B781" : "#33353A"};
`;

export const Content = styled.div`
  margin-top: -30%;

  label {
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
  }
`;

export const Options = styled.div`
  margin-top: -60%;
  display: grid;
  align-items: center;
  justify-content: center;

  ul {
    svg {
      margin-right: 15px;
    }
  }
`;
