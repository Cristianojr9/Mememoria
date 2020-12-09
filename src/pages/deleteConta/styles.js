import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  background: #fafafa;
  width: 100%;
  margin-left: 380px;

  h1 {
    margin: 120px 50px 0;
  }

  div:last-child {
    animation: 1s ${fadeInAnimation};

    display: grid;
    margin: 10px 50px 0;
    box-shadow: 0px 3px 6px #1111;
    border-radius: 10px;
    height: 700px;

    section {
      display: grid;
      height: 100px;
    }

    span {
      margin: 20px;
      font-size: 25px; 
    }

    input {
      width: 588px;
      height: 64px;
      background: #F2FCF9;
      border: none;
      border-radius: 15px;
      font-size: 25px;
      padding: 25px;
      margin: 20px;

      color: #33353A;

      &:focus {
        transition: 0.1s;
        border-style: solid;
        border-color: #06B781;
        background: transparent;
      }
    }

    button {
      width: 200px;
      height: 64px;
      border: none;
      background: #06B781;
      border-radius: 10px;
      color: #fafafa;
      font-size: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px;

      &:hover {
        background: ${shade(0.1, '#06B781')};
      }
    }
  }
`;

export const NavLinks = styled.div`
  ul {
    display: flex;
    list-style: none;
    margin: 20px 50px 0;

    li:first-child {
      margin: 0px 20px 0px 0px;
    }

    li:nth-child(4) {
      cursor: pointer;
      transition: 0.2s linear;

      a {
        color: #06B781;
      }
    }

    li {
      margin: 0 20px 0;
      cursor: pointer;
      transition: 0.2s linear;

      a {
        color: #33353A;
        text-decoration: none;

        &:hover {
          color: #06B781;
        }
      }
    }

  }

`;

