import styled from 'styled-components';
import { shade } from 'polished';

export const Content = styled.div`

  background: #fafafa;
  width: 100%;

  a {
    margin: 50px 0 0;
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

    &:hover {
      background: #06B781;
      color: #fafafa;
    }
  }

  button {
    margin: 50px 0 0;
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

    &:hover {
      background: #06B781;
      color: #fafafa;
    }

    svg {
      margin-right: 10px;
    }
  }

  .content {
    display: grid;
    margin: 0 50px 0;

    section {
      display: flex;

      button:first-child {
        margin-left: 0;
      }

      button {
        margin-left: 16px;
      }
    }

    h1 {
      height: 50px;
      margin-top: 20px;
    }

    a {
      text-decoration: none;
    }

    .qrcode {
      margin-top: 20px;
    }

    div {
      display: flex;

      input {
        width: 280px;
        height: 44px;
        border: 2px solid #06B781;
        border-radius: 10px;
        padding: 10px;
      }

      button {
        margin: 0 10px 0;
        background: #06B781;
        color: #fafafa;
        height: 44px;
        width: 100px;
        transition: 0.2 linear;

        &:hover {
          background: ${shade(0.2, '#06B781')};
          border: ${shade(0.2, '#06B781')};
        }
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;

`
