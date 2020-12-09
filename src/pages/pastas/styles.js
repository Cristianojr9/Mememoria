import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 25px 20px;

  input {
    width: 1000px;
    height: 52px;
    border-color: transparent;
    box-shadow: 0px 3px 6px #1111;
    padding: 0 60px 0;
    font-size: 18px;
    position: relative;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }

  button {
    position: absolute;
    border-color: transparent;
    background: transparent;

    margin-left: 20px;
  }

  @media (min-width: 1180px) {
    display: flex;
    align-items: center;
    margin-top: 64px;
    margin-left: 50px;

    input {
      width: 1000px;
      height: 52px;
      border-color: transparent;
      box-shadow: 0px 3px 6px #1111;
      padding: 0 60px 0;
      font-size: 18px;
      position: relative;
      border-radius: 10px;
    }

    button {
      position: absolute;
      border-color: transparent;
      background: transparent;

      margin-left: 20px;
    }
  }
`;

export const Container = styled.div`
  h1 {
    font-size: 35px;
    margin: 0 25px 0;
  }

  height: 100vh;

  @media (min-width: 1180px) {

    background: #FCFCFC;
    display: flex;

    h1 {
      font-weight: 400;
      font-size: 42px;
      margin-top: 69px;
      margin-left: 50px;
    }

    h2 {
      margin-left: 50px;
      font-size: 20px;
      font-weight: 200;
      font-style: italic;
    }
  }
`;

export const Content = styled.div`
  @media (min-width: 1080px) {
    width: 900px;
    margin-left: 400px;

    a {
      margin: 50px 50px 0;
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
  }

  @media (min-width: 1400px) {
    animation: 1s ${fadeInAnimation};
    height: 100vh;
    min-width: 1200px;
    width: 100%;
    margin-left: 400px;

    a {
      margin: 50px 50px 0;
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
  }
`;

export const ListMemories = styled.div`
  @media (min-width: 1080px) {
    margin: 0 50px 0;
    display: grid;
    grid-template-columns:  repeat(3, 250px);
    grid-gap: 50px;
  }

  @media (min-width: 1400px) {
    margin: 0 50px 0;
    display: grid;
    grid-template-columns: 250px 250px 250px 150px;
    grid-gap: 50px;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  position: fixed;

  margin: -30px 1220px 0; 

  svg {
    margin-left: 10px;

    &:hover {
      color: #06B781;
    }
  }
`;
