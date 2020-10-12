import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: relative;
  width: 392px;
  height: 100vh;
  max-width: 492px;
  background: #F0F1F1;
  box-shadow: 0px 3px 6px #1111;

  display: grid;
  align-items: center;
  justify-content: center;
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
    
    img {
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
    img {
      margin-right: 15px;

      &:focus {
        fill: #06B781;
      }
    }

    a {
      margin-top: 20px;
      display: flex;
      align-items: center;

      font-size: 25px;
      color: #33353A;
      transition: 0.2s;

      &:focus {
        color: #06B781;
      }
    }
  }
`;
