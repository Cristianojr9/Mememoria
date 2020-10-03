import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { fadeInLeftBig } from 'react-animations';

import BackgroundImg from '../../assets/login.png';

const fadeInLeftAnimation = keyframes`${fadeInLeftBig}`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: #FCFCFC;
`;

export const Content = styled.div`
  animation: 0.5s ${fadeInLeftAnimation};
  display: flex;
  flex-direction: column;
  align-items: center;
  
  place-content: center;
  width: 100%;
  max-width: 1000px;

  @media (max-width: 780px) {
    & {
      animation: 1s ${fadeInLeftAnimation};
      width: 100%;
      margin-left: 20%;
      margin-right: 20%;
      max-width: 220px;
    }
  }

  @media (max-width: 950px) {
    & {
      animation: 1s ${fadeInLeftAnimation};
      width: 100%;
      margin-left: 20%;
      margin-right: 20%;
      max-width: 246px;
    }
  }

  img { 
    margin-right: 80%;
    margin-top: 0px;
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

    span {
      margin-top: 29px;
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
      transition: 0.5s;

      &:hover {
        color: ${shade(0.2, '#06B781')};
      }

      @media (max-width: 780px) {
        & {
          animation: 0.5s;
          font-size: 20px;
        }
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-around;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 90px; 
        font-size: 20px;
        font-weight: normal;
        color: #595D5C;
        margin-top: 0px;

        @media (max-width: 780px) {
          & {
            animation: 0.5s;
            font-size: 15px;
            margin-left: 170px; 
          }
        }
      }

      a {
          color: #06B781;
          font-size: 20px;
          text-decoration: underline;
          margin-top: 0px;
          font-weight: 500;
          font-style: italic;

          @media (max-width: 780px) {
            & {
              animation: 0.5s;
              font-size: 15px;
            }
          }
        }

      label {
        display: flex;
        align-items: center;

        @media (max-width: 780px) {
          & {
            display: flex;
            align-items: center;
            justify-content: space-around;
          }
        }

        input {
          width: 26px;
          margin-top: 0%;
          margin-right: 0;
          border-radius: 15px;
          border-color: transparent;
          cursor: pointer;

          &:checked {
            border: 1px solid blue;
          }

          @media (max-width: 780px) {
            & {
              animation: 0.5s;
              width: 36px;
            }
          }
        }

        p {
          font-size: 20px;
          margin-top: 0px;
          margin-left: 10px;

          @media (max-width: 780px) {
            & {
              animation: 0.5s;
              font-size: 15px;
              margin-left: 10px;
            }
          }
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
    }
  }
`;

export const Button = styled.div`
  width: 588px;
  height: 90px;
  border-radius: 15px;
  margin-top: 10px;
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