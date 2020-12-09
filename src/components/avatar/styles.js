import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  display: grid;
  margin-left: 250px;
  position: relative;
  cursor: pointer;
`;

export const Detail = styled.div`
  animation: 1s ${fadeInAnimation};
  position: absolute;

  ul {
    margin-top: 50px;
    li {
      font-size: 18px;
      list-style: none;

      span {
        display: flex;
        align-items: center;
        color: #111;
        text-decoration: none;
        transition: 0.2s linear;

        &:hover {
          color: #06B781;
        }
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`
