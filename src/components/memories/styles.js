import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20%;
  margin-left: 10%;
  width: 273px;
  height: 273px;

  box-shadow: 0px 3px 6px #1111;

  transition: 0.2s linear;
  cursor: pointer;

  li {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    transform: translate(10px,5px);
  }
`;

export const MemoriesInfo = styled.div`
  list-style: none;

  span {
    margin: 20px 50px 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    span {
      width: 45px;
      margin: 0 10px 0;
    }

    strong {
      font-weight: normal;
      font-size: 19px;
    }
  }
`;

export const Preview = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
`;
