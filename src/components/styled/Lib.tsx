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
  min-height: 25em;
  max-height: 25em;
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
  max-height: 18em;
  overflow: scroll;
`;

export const RadioChannel = styled.section`
  background: transparent;
  margin: 0em 0em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  :first-of-type {
    border-top: 1px solid rgb(253 252 249);
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  margin: 0px 2em;
`;

export const IconWrapper = styled.button<{ secondary?: boolean }>`
  color: inherit;
  border: 0px;
  outline: none;
  background: transparent;
  cursor: pointer;

  ${props =>
    props.secondary
      ? `:hover {
    color: rgb(235 172 95);
    transition: 1s;
    }`
      : `:hover {
    color: black;
    transition: 1s;
    }`}
`;

export const Hr = styled.hr`
  border: 1px solid #d3d3d321;
  margin-bottom: 0;
  margin-top: 0;
  width: 75%;
`;

export const NameSection = styled.button<{ clicked?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  border: 0;
  border-bottom: 0px;
  color: inherit;
  background: inherit;
  cursor: pointer;
  font-size: 1.2em;
  padding: 1em 2em;

  ${props =>
    !props.clicked &&
    `
    :hover {
    color: rgb(253 252 249);
    background: rgb(235 172 95);

    transition: 1s;
  }`}
`;

export const LogoSection = styled.section<{ clicked?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;

  ${props => (props.clicked ? 'display: flex;' : 'display: none;')}
`;

export const RadioLogo = styled.img`
  width: 6.5em;
  border-radius: 100%;
  border: 2px solid rgb(160 169 188);
`;

export const CurrentlyPlayingSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: inherit;
  height: 5em;
`;

export const Small = styled.small`
  margin-top: 1em;
  color: rgb(235 172 95);
  font-weight: 600;
`;

export const PlayingRadioName = styled.p`
  margin-top: 0;
  font-size: 1.2em;
`;
