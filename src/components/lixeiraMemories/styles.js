import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  width: 243px;
  height: 243px;
  position: relative;

  display: flex;
  box-shadow: 0px 3px 6px #1111;

  transition: 0.1s linear;
  cursor: pointer;
  border-radius: 10px;

  li {
    list-style: none;
    display: grid;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  &::selection {
    border-style: solid;
    border-color: #06B781;
  }
`;

export const MemoriesInfo = styled.div`
  list-style: none;

  small {
    margin-left: 5px;
  }

  span {

    .icon {
      margin: 0;
      height: 180px;
    }

    img {
      margin: -10px 0px 0;
      margin-right: 1px;
      width: 237px;
      height: 190px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      flex: 1;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    span {
      position: absolute;
      width: 45px;
      margin: 0px 10px 0px;
      margin-right: 160px;
    }

    strong {
      position: relative;
      font-weight: normal;
      font-size: 19px;
      margin-left: 10px;
      width: 120px;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const Preview = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
`;
