import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { fadeInRightBig } from 'react-animations';

import BackgroundImg from '../../assets/login.png';

const fadeInRightAnimation = keyframes`${fadeInRightBig}`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: #FCFCFC;
`;

export const Content = styled.div`
  animation: 1.0s ${fadeInRightAnimation};
  display: flex;
  flex-direction: column;
  align-items: center;
  
  place-content: center;
  width: 100%;
  max-width: 1000px;

  @media (max-width: 780px) {
    & {
      animation: 1s ${fadeInRightAnimation};
      width: 100%;
      margin-left: 20%;
      margin-right: 20%;
    }
  }

  img { 
    margin-right: 80%;
    margin-top: -20px;

    @media (max-width: 780px) {
      & {
        animation: 0.5s;
        margin-top: 60px;
      }
    }
  }

  form {
    display: grid;
    margin: 10px 0; 
    text-align: center;

    h1 {
      font-weight: bold;
      color: #111;
      margin-bottom: 24px;
      font-size: 50px;
    }

    small {
      margin-right: 350px;
    }

    input {
      width: 588px;
      height: 90px;
      border: none; 
      margin-top: 29px;
      background: #F2FCF9;
      border-radius: 15px;
      font-size: 25px;
      padding: 25px;

      &:focus {
        transition: 0.1s;
        border-style: solid;
        border-color: #06B781;
        background: transparent;
      }

      @media (max-width: 780px) {
        & {
          animation: 0.5s;
          width: 400px;
          height: 90px;
        }
      }
    }

    input + input {
      width: 588px;
      height: 90px;
      border: none; 
      margin-top: 29px;
      background: #F2FCF9;
      border-radius: 15px;
      font-size: 25px;
      padding: 25px;

      &:focus {
        transition: 0.1s;
        border-style: solid;
        border-color: #06B781;
        background: transparent;
      }

      @media (max-width: 780px) {
        & {
          animation: 0.5s;
          width: 400px;
          height: 90px;
        }
      }
    }

    div {
      input {
        margin-right: 8px;
        width: 290px;
        height: 90px;

        @media (max-width: 780px) {
          & {
            animation: 0.5s;
            width: 400px;
            height: 90px;
          }
        }
      }
    }

    span {
      margin-top: 35px;
      font-size: 20px;
      color: #595D5C;
      font-weight: normal;

      @media (max-width: 780px) {
        & {
          animation: 0.5s;
          font-size: 20px;
          margin-right: 30px;
        }
      }
    }

    a {
      color: #06B781;
      font-size: 20px;
      text-decoration: underline;
      margin-top: 15px;
      font-weight: 500;
      font-style: italic;
      margin-left: 10px;

      @media (max-width: 780px) {
        & {
          animation: 0.5s;
          font-size: 20px;
        }
      }
    }
  }
`;

export const ButtonGoogle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  width: 588px;
  height: 90px;
  border-radius: 15px;
  margin-top: 10px;
  border-color: transparent;
  background: #FCFCFC;
  color: black;
  font-size: 30px;
  font-weight: bold;
  box-shadow: 0px 3px 6px #1111;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: ${shade(0.02, '#FCFCFC')};
  }

  @media (max-width: 780px) {
    & {
      animation: 0.5s;
      width: 400px;
      height: 90px;

      font-size: 20px;
    }
  }
`;

export const Button = styled.div`
  width: 588px;
  height: 90px;
  border-radius: 15px;
  margin-top: 46px;
  border-color: transparent;
  background: #06B781;
  color: white;
  font-size: 30px;
  font-weight: normal;
  box-shadow: 0px 3px 6px #1111;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: ${shade(0.2, '#06B781')};
  }

  @media (max-width: 780px) {
    & {
      animation: 0.5s;
      width: 400px;
      height: 90px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
`;