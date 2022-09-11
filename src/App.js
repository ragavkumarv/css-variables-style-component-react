import "./styles.css";

import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;

      :hover {
        border: 2px solid seagreen;
        background: seagreen;
      }
    `};
`;

const match = (obj) => (props) => {
  return obj[Object.keys(props).find((key) => props[key])];
};

const ButtonCSS = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid var(--primary-btn, palevioletred);
  color: var(--primary-btn, palevioletred);
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s;

  :hover {
    background: var(--primary-btn, palevioletred);
    color: white;
    cursor: pointer;
    transform: scale(1.1);
  }

  ${match({
    primary: css`
      --primary-btn: orangered;
    `,
    secondary: css`
      --primary-btn: teal;
    `,
    fun: css`
      --primary-btn: orchid;
    `
  })}
`;

const Wrapper = styled.div`
  text-align: center;
  --primary-btn: seagreen;
`;

export default function App() {
  return (
    <Wrapper>
      <Button> Nice</Button>
      <Button primary>Cool</Button>
      <ButtonCSS primary> Nice</ButtonCSS>
      <ButtonCSS secondary> Nice</ButtonCSS>
      <ButtonCSS fun> Nice</ButtonCSS>
    </Wrapper>
  );
}
