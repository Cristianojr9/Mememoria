import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { fadeInRight } from 'react-animations';

const fadeInAnimation = keyframes`${fadeInRight}`;

export const Content = styled.div`
  background: #fafafa;
  width: 100%;
  display: flex;
  margin-left: 380px;

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

  .button-group {
      display: grid;

      button {
        width: 150px;
        height: 44px;

        border: none;
        border-radius: 10px;
        background: #06B781;
        padding: 10px;
        margin: 10px 0 10px;
        color: #ffff;
        transition: 0.2 linear;

        &:hover {
          background: ${shade(0.2, '#06B781')};
        }
      }
    }
`;

export const Container = styled.div`
  display: flex;
  background: #ffff;

`
