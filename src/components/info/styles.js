import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Content = styled.div`
  animation: 1s ${fadeInAnimation};

  background: #fafafa;
  width: 100%;
  display: flex;

  .memoria {
    margin: 150px 50px 0;
  }

  a {
    margin: -100px 0px 0;
    width: 135px;
    height: 44px;
    border: 2px solid #06B781;
    border-radius: 10px;
    color: #06B781;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    background: transparent;
    transition: 0.2s linear;
    text-decoration: none;

    &:hover {
      background: #06B781;
      color: #fafafa;
    }
  }

  h1 {
    font-weight: normal;
    margin-top: 91px;
    font-size: 42px;
  }

  .options {
    height: 40px;
    width: 300px;
    margin-top: -190px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin: 0 0 0;
      width: 150px;
      height: 44px;
      border: none;
      border-radius: 10px;
      background: transparent;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      transition: 0.2s linear;
      font-size: 20px;

      svg {
        margin-right: 10px;
      }
    }
  }

  .content {
    display: grid;
    position: absolute;
    width: 400px;
    box-shadow: 0px 3px 6px #1111;
    height: 650px;
    border-radius: 10px;
    background: #06B781;
    align-items: center;
    justify-content: center;

    h2 {
      height: 50px;
      font-size: 15px;
      font-weight: bolder;
      margin: 5px 0 -30px;
      text-transform: uppercase;
      color: #fff;
    }

    a {
      text-decoration: none;
    }

    .qrcode {
      text-align: center;
    }

    .input-group {
      display: grid;
      align-items: center;
      justify-content: center;
      width: 300px;
      height: 80px;
      border-radius: 10px;
      margin-top: 20px;

      input {
        width: 300px;
        height: 44px;
        border: none;
        border-radius: 10px;
        background: #F2FCF9;
        padding: 10px;
        margin: 0 0 20px;
        color: #33353A;
      }
    }

    .button-group {
      display: grid;

      button {
        width: 300px;
        height: 44px;
        border: none;
        border-radius: 10px;
        background: #F2FCF9;
        padding: 10px;
        margin: 0 0 10px;
        color: #33353A;
        transition: 0.2 linear;

        &:hover {
          background: ${shade(0.1, '#F2FCF9')};
        }
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  background: #ffff;
`;
