import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { shade } from 'polished';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  display: flex;

`;

export const Content = styled.div`
  width: 100%;
  background: #fafafa;
  margin-left: 380px;

  h1 {
    margin: 120px 50px 0;
  }

  .content-form {
    margin: 10px 25px 0;
    border-radius: 10px;
    display: grid;
    height: 700px;
  }

  .form {
    animation: 1s ${fadeInAnimation};
    display: flex;

    .listHerdeiro {
      margin: 0 0px 0;
      display: grid;
      grid-template-columns: 250px 250px 250px 10px;
      grid-gap: 10px 75px;
    }

    ul {
      margin: 20px 25px 0;
      width: 273px;
      height: 320px;
      border: 5px dashed #06B781;
      display: flex;
      align-items: center;
      justify-content: center;

      list-style: none;
      cursor: pointer;
    }
  }
`;

export const NavLinks = styled.div`
  ul {
    display: flex;
    list-style: none;
    margin: 20px 50px 0;

    li:first-child {
      margin: 0px 20px 0px 0px;
    }

    li:nth-child(3) {
      cursor: pointer;
      transition: 0.2s linear;

      a {
        color: #06B781;
      }
    }

    li {
      margin: 0 20px 0;
      cursor: pointer;
      transition: 0.2s linear;

      a {
        color: #33353A;
        text-decoration: none;

        &:hover {
          color: #06B781;
        }
      }
    }

  }

`;
