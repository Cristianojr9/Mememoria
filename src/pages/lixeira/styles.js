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
    width: 800px;
    margin-left: 400px;
  }
  @media (min-width: 1400px) {
    animation: 1s ${fadeInAnimation};
    height: 100vh;
    min-width: 1200px;
    margin-left: 400px;
  }
`;

export const ListMemories = styled.div`
  @media (min-width: 1080px) {
    animation: 1s ${fadeInAnimation};
    width: 100%;
    margin-left: 50px;
    grid-template-columns: repeat(3, 250px);
  }
  @media (min-width: 1400px) {
    margin: 0 50px 0;
    display: grid;
    grid-template-columns: 250px 250px 250px 150px;
    grid-gap: 50px;
  }
`;
