import styled from 'styled-components';

export const Container = styled.div`
  width: 273px;
  height: 320px;

  margin: 20px 25px 0;
  box-shadow: 0px 3px 6px #1111;
  border-radius: 10px;

  span {
    margin-top: 45px;
    margin-left: 240px;
    cursor: pointer;

    &:hover {
      color: #06B781;
    }
  }

`;

export const Content = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  h2 {
    font-size: 20px;
    font-weight: bolder;
    text-align: center;
  }

  p {
    font-size: 18px;
    text-align: center;
  }

  span {
    font-size: 20px;
    color: #06B781;
    text-align: center;
    margin-left: 0;
    text-transform: lowercase;
  }
`;
