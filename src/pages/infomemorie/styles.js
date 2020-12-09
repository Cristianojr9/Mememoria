import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Content = styled.div`
  background: #fafafa;
  width: 100%;
  display: flex;
  margin-left: 400px;

  .memoria {
    margin: 140px 50px 0;
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
    margin-top: -180px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
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
      cursor: pointer;

      svg {
        margin-right: 10px;
      }
    }
  }

  .content {
    display: grid;
    margin: 130px 50px 0;
    width: 400px;
    box-shadow: 0px 3px 6px #1111;
    height: 750px;
    border-radius: 10px;
    background: #06B781;
    align-items: center;
    justify-content: center;
    animation: 1s ${fadeInAnimation};

    @media (min-width: 1400px) {
      display: grid;
      margin: 130px 350px 0;
      width: 400px;
      box-shadow: 0px 3px 6px #1111;
      height: 750px;
      border-radius: 10px;
      background: #06B781;
      align-items: center;
      justify-content: center;
      animation: 1s ${fadeInAnimation};
    }
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
      position: relative;
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

      .excluir {
        color: #FF0000;
      }

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

`
