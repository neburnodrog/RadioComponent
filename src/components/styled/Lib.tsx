import styled from 'styled-components';

export const Background = styled.div`
  background: rgb(31 31 41);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  text-align: center;
`;

export const Container = styled.div`
  color: rgb(160 169 188);
  background: rgb(31 31 41);
  border-radius: 1em;
  box-shadow: 0px 0.5em 0.5em -0.1em black;
  padding-bottom: 4em;
`;

export const Nav = styled.nav`
  display: flex;
  padding: 1.5em 1em;
  justify-content: center;
  align-items: center;
  color: rgb(253 252 249);
  background: rgb(235 172 95);
  height: 2em;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
`;

export const Main = styled.main`
  display: flex;
  flex-flow: column;
  background-color: rgb(45 45 55);
  padding-bottom: 0em;
`;

interface RadioChannelProps {
  clicked: boolean;
}

export const RadioChannel = styled.button<RadioChannelProps>`
  background: transparent;
  outline: none;
  border: 0;
  border-bottom: 0px;
  color: inherit;
  cursor: pointer;
  font-size: 1.2em;
  margin: 0em 0em;
  padding: 1em 1em;
  display: flex;
  justify-content: space-between;
  :hover {
    color: rgb(253 252 249);
    background: rgb(235 172 95);

    transition: 1s;
  }
  :first-of-type {
    border-top: 1px solid rgb(253 252 249);
  }
  ${props =>
    props.clicked &&
    `
    height: 100px;
    `}
`;

export const Title = styled.h1`
  font-weight: 600;
  margin: 0px 2em;
`;

export const IconWrapper = styled.button`
  color: inherit;
  border: 0px;
  outline: none;
  background: transparent;
  :hover {
    cursor: pointer;
    color: black;
    transition: 1s;
  }
`;

export const Hr = styled.hr`
  border: 1px solid #d3d3d321;
  margin-bottom: 0;
  margin-top: 0;
  width: 75%;
`;
