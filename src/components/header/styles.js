import styled from 'styled-components';

export const Container = styled.div`
  zoom: 75%;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 12;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  height: 20vh;
`;

export const NavLinks = styled.div`
  width: 50vw;

  ul {
    margin: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
  }

  li {
    display: block;
    width: 25%;
    margin: 0 5px;
    text-align: center;

    a:hover {
      color: #06B781;
      border-radius: 25px;
      transition: 0.2s;
      -webkit-transition: 0.2s;
    }
  }


  a {
    text-decoration: none;
    display: block;
    color: #111;
    padding: 3px 0;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const Image = styled.div``;


export const Button = styled.div`
  button {
    width: 180px;
    height: 55px;
    border-radius: 15px;
    background: transparent;
    border: 2px solid #06B781;
    font-size: 22px;
    font-weight: 500;
    color: #06B781;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background:  #06B781;
      color: #fffff8;
      transition: 0.2s;
      -webkit-transition: 0.2s;
    }
  }
`;
