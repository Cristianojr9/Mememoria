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
    margin: 10px 50px 0;
    box-shadow: 0px 3px 6px #1111;
    border-radius: 10px;
    display: grid;
    height: 700px;
  }

  .form {
    animation: 1s ${fadeInAnimation};
    display: flex;

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
      }
    }

    section {
      margin: 0px 40px 0;
      display: grid;

      ul {
        list-style: none;
        background: #F2FCF9; 
        
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
  }

  .button {
    display: flex;
    margin: 357px 20px 0;
    height: 100px;
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

  input[type=radio] {
    width: 20px;
  }

  input[disabled] {
    color :#595D5C; 
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
