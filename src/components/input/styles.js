import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
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

export const Content = styled.div`
  display: none;

  @media (min-width: 1180px) {
    margin-left: 300px;
    cursor: pointer;
  }
  
`
