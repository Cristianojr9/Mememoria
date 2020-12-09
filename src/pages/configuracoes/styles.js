import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  background: #fafafa;
  width: 100%;
  margin-left: 380px;

  h1 {
    margin: 120px 50px 0;
  }

  div:last-child {
    animation: 1s ${fadeInAnimation};

    display: flex;
    margin: 10px 50px 0;
    box-shadow: 0px 3px 6px #1111;
    border-radius: 10px;
    height: 700px;

    section:first-child {
      display: grid;
      margin: 10px 20px 0;

      input {
        margin: 10px 0 10px;
      }

      ul {
        list-style: none;
        background: #F2FCF9; 
        margin-top: 10px;
        
        &:checked {
          transition: 0.1s;
          border-style: solid;
          border-color: #06B781;
          background: transparent;
        }

        
        li {
          display: flex;
          align-items: center;
          margin: 0 20px 0;

          label {
            font-size: 20px;
            font-weight: normal;
            color: #595D5C;
            margin: 5px 10px 0;
          }
        }
      }

      label {
        font-size: 25px;
        font-weight: 500;
        height: 35px;
        color: #33353A;
      }
    }

    section {
      margin: 10px 40px 0;

      display: grid;

      label {
        font-size: 25px;
        font-weight: 500;
        height: 35px;
        color: #33353A;
      }

      input {
        margin: -50px 0 -60px;
      }

      div {
        display: flex;
        margin: 0 0 0;
        height: 20px;
        background: transparent;
        box-shadow: none;

        button:last-child {
          width: 200px;
          margin-left: 20px;
          height: 64px;
          border: 2px solid #06B781;
          background: transparent;
          border-radius: 10px;
          color: #06B781;
          font-size: 25px;

          &:hover {
            background: ${shade(0.1, '#ffff')};
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

          &:hover {
            background: ${shade(0.1, '#06B781')};
          }
        }
      }
    }
  }

  input[type=radio] {
    width: 20px;
  }

  input[disabled] {
    color :#595D5C; 
  }

  input {
    width: 588px;
    height: 64px;
    background: #F2FCF9;
    border: none;
    border-radius: 15px;
    font-size: 25px;
    padding: 25px;

    color: #33353A;

    &:focus {
      transition: 0.1s;
      border-style: solid;
      border-color: #06B781;
      background: transparent;
    }
  }

`;

export const NavLinks = styled.div`
  ul {
    display: flex;
    list-style: none;
    margin: 20px 50px 0;

    li:first-child {
      cursor: pointer;
      transition: 0.2s linear;
      margin: 0px 20px 0px 0px;

      a {
        color: #06B781;
        text-decoration: none;
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
