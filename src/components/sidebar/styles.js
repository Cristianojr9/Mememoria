import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #F0F1F1;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 1180px) {
    position: fixed;
    width: 392px;
    max-width: 392px;
    height: 100%;
    background: #F0F1F1;
    box-shadow: 0px 3px 6px #1111;
    padding: 50px;
    display: grid;
    align-items: center;
    justify-content: center;

    button {
      width: 316px;
      height: 64px;
      border-color: transparent;
      background: #06B781;
      border-radius: 10px;
      color: #F0F1F1;
      font-weight: 500;
      margin: 0 32px 0;
      font-size: 27px;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-left: 15px;
      }

      &:hover {
        background: ${shade(0.1, '#06B781')};
      }
    }

    .drive {
      width: 300px;
      margin: 30px;
    }

    .steps {
      font-weight: bold;
      color: #333;
      display: flex;
      justify-content: space-between;
      padding: 5px 10px;
      font-size: 16px;
    }

    .progress-bar {
      position: relative;
      background: #D8D9D9;
      width: 100%;
      height: 10px;
      border-radius: 50px;
    }

    .progress-bar .bar {
      position: absolute;
      background: #06B781;
      left: 0;
      bottom: 0;
      height: 10px;
      border-radius: 50px;
    }
  }

  @media (min-width: 1400px) {
    position: fixed;
    width: 392px;
    max-width: 392px;
    height: 100%;
    max-width: 492px;
    background: #F0F1F1;
    box-shadow: 0px 3px 6px #1111;
    padding: 100px;
    display: grid;
    align-items: center;
    justify-content: center;

    button {
      width: 316px;
      height: 64px;
      border-color: transparent;
      background: #06B781;
      border-radius: 10px;
      color: #F0F1F1;
      font-weight: 500;
      margin: 0 32px 0;
      font-size: 27px;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-left: 15px;
      }

      &:hover {
        background: ${shade(0.1, '#06B781')};
      }
    }

    .drive {
      width: 300px;
      margin: 30px;
    }

    .steps {
      font-weight: bold;
      color: #333;
      display: flex;
      justify-content: space-between;
      padding: 5px 10px;
      font-size: 16px;
    }

    .progress-bar {
      position: relative;
      background: #D8D9D9;
      width: 100%;
      height: 10px;
      border-radius: 50px;
    }

    .progress-bar .bar {
      position: absolute;
      background: #06B781;
      left: 0;
      bottom: 0;
      height: 10px;
      border-radius: 50px;
    }
  }
`;

export const Option = styled(Link)`
  transition: 0.2s;
  color: ${props => props.selected ? "#06B781" : "#33353A"};

  font-size: 25px;

  span {
    display: none;
  }

  @media (min-width: 1180px) {
    margin-top: 20px;
    display: flex;
    align-items: center;
    position: relative;

    font-size: 25px;
    transition: 0.1s;
    color: ${props => props.selected ? "#06B781" : "#33353A"};
    text-decoration: none;

    &:hover {
      color: #06B781;
    }

    span {
      display: unset;
    }
  }
  
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: #06B781;
    border-radius: 10px;
    margin: 2px 22px 0;
    box-shadow: 0px 3px 6px #1111;

    &:hover {
      background-color: ${shade(0.2, '#06B781')};
    }
  }

  span {
    display: none;
  }

  @media (min-width: 1180px) {
    display: grid;
    margin: -70px 0 16px;

    img {
      margin: 16px 30px 0;
    }

    label {
      margin: 16px 32px 30px;
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
      box-shadow: 0px 3px 6px #1111;

      font-size: 30px;
      color: #fff;
      transition: 0.2s;

      svg {
        margin: 0 15px 0 0;
      }

      input {
        display: none;
      }

      span {
        display: unset;
      }
    }
    
  }
`;

export const Options = styled.div`
  display: none;

  @media (min-width: 1180px) {
    display: grid;
    margin: 0px 36px 0;

    ul {
      a {
        text-decoration: none;
      }

      svg {
        margin-right: 15px;
      }
    }
  }
`;
