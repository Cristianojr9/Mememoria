import styled from 'styled-components';
import { shade } from 'polished';

export const Content = styled.div`
  margin-left: 450px;
  margin-top: 80px;
  
  width: 100%;

  h1 {
    font-weight: 400;
    font-size: 42px;
  }

  textarea {
    width: 1200px;
    height: 340px;

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
`;

export const Container = styled.div`
  display: flex;
  background: #fafafa;
`;

export const ListMemories = styled.div`
  @media (min-width: 1080px) {
    margin: 0 0px 0;
    display: grid;
    grid-template-columns: repeat(3, 250px);
    grid-gap: 50px;
  }
  @media (min-width: 1400px) {
    margin: 0 0 0;
    display: grid;
    grid-template-columns: 250px 250px 250px 150px;
    grid-gap: 50px;
  }
`;
