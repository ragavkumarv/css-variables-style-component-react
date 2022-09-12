import "./styles.css";

import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 2rem;

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
  font-size: 2rem;

  :hover {
    background: var(--primary-btn, palevioletred);
    color: white;
    cursor: pointer;
    transform: scale(1.1);
  }

  ${match({
    primary: css`
      --primary-btn: crimson;
    `,
    secondary: css`
      --primary-btn: teal;
    `,
    fun: css`
      --primary-btn: orchid;
    `
  })}
`;

const ButtonCSSCtx = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid var(--primary-btn, palevioletred);
  color: var(--primary-btn, palevioletred);
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s;
  font-size: 2rem;

  :hover {
    background: var(--primary-btn, palevioletred);
    color: white;
    cursor: pointer;
    transform: scale(1.1);
  }

  ${match({
    primary: css`
      --primary-btn: var(--btn-style-1, crimson);
    `,
    secondary: css`
      --primary-btn: var(--btn-style-2, teal);
    `,
    fun: css`
      --primary-btn: var(--btn-style-3, orchid);
    `
  })}
`;

const Wrapper = styled.div`
  text-align: center;
  --primary-btn: seagreen;
  --btn-style-1: orange;
  --btn-style-2: purple;
  --btn-style-3: deepskyblue;
  > div {
    margin: 2rem 0px;
  }
`;

export default function App() {
  return (
    <Wrapper>
      <Button> Nice</Button>
      <Button primary>Cool</Button>
      <div>
        <ButtonCSS primary> Nice</ButtonCSS>
        <ButtonCSS secondary> Nice</ButtonCSS>
        <ButtonCSS fun> Nice</ButtonCSS>
      </div>

      <div>
        <ButtonCSSCtx primary> Improved</ButtonCSSCtx>
        <ButtonCSSCtx secondary> Improved</ButtonCSSCtx>
        <ButtonCSSCtx fun> Improved</ButtonCSSCtx>
      </div>
    </Wrapper>
  );
}
