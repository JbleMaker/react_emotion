import { css } from "@emotion/react";

export const container = css`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #fafafa;
  font-size: 2rem;

  & > h1 > a {
    text-decoration: none;
    color: #000000;
  }

  & > ul {
    display: flex;

    & > li {
      margin-right: 2rem;

      & > a {
        color: black;
        text-decoration: none;
      }
    }
  }
`;