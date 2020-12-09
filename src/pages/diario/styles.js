import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;
export const Content = styled.div`
  background: #fafafa;
  
  width: 100%;
  display: flex;



  .nice-dates-day:before {
    background-color: #06B781;
  }

  

  section {
    margin-left: 450px;
    margin-top: 80px;
    animation: 1s ${fadeInAnimation};

    button {
      width: 200px;
      height: 64px;
      border: none;
      background: #06B781;
      border-radius: 10px;
      color: #fafafa;
      font-size: 25px;
      margin-top: 20px;

      &:hover {
        background: ${shade(0.1, '#06B781')};
      }
    }
  }

  textarea {
    width: 100%;
    height: 540px;

    display: flex;
    justify-content: flex-start;
    border-color: transparent;

    padding: 20px;
    font-size: 25px;
    box-shadow: 0px 3px 6px #1111;

    @media (min-width: 1080px) {
      width: 800px;
      height: 340px;
    }
  }

  h1 {
    font-weight: 400;
    font-size: 42px;
  }

  .ant-picker:hover, .ant-picker-focused {
    border-color: #06B781;
  }

  .ant-picker-input > input:hover {
    border-color: #06B781;
  }

  .ant-picker {
    margin: 0 0 20px;
  }
`;

export const Container = styled.div`
  display: flex;
`;
