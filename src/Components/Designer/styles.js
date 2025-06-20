import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 120rem;
  background-color: #faf1f2;
`;

export const header = css`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 2px solid #000000;
  width: 100rem;
  height: 10rem;
  font-size: 2rem;
  font-weight: 600;

  & > div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    & > span {
      margin-right: 5rem;
    }
  }
  & > div:last-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const main = css`
  display: flex;
  flex-direction: column;
  width: 100rem;
`;

export const titleContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 10rem;
  margin-bottom: 8rem;
  width: 100%;
  font-size: 12rem;
  & > span:first-of-type {
    margin-bottom: 2rem;
  }
`;

export const skillContainer = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
  width: 100%;
  gap: 2rem;
  font-size: 3rem;
  font-weight: 400;

  & > div:first-of-type {
    width: 49rem;
    flex-grow: 1;

    & > h2 {
      box-sizing: border-box;
      border-top: 2px solid #000000;
      border-bottom: 2px solid #000000;
      padding: 3rem 0;
    }

    & > div {
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      font-size: 2rem;

      & > span {
        margin-bottom: 1.5rem;
      }
    }
  }

  & > div:last-of-type {
    width: 49rem;
    flex-grow: 1;

    & > h2 {
      box-sizing: border-box;
      border-top: 2px solid #000000;
      border-bottom: 2px solid #000000;
      padding: 3rem 0;
    }

    & > div {
      display: flex;
      flex-direction: column;
      margin-top: 3rem;
      font-size: 2rem;
      & > span {
        margin-bottom: 1.5rem;
      }
    }
  }
`;

export const contentTitle = css`
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  padding: 1.5rem 0;
  font-size: 3rem;
  font-weight: 400;
`;

export const mainContent = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3 1fr);
  gap: 4rem;
  margin: 5rem 0;
`;

export const content = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #000;
  border-radius: 0.3rem;
  height: 30rem;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    & > img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const spanLink = css`
  display: block;
  margin-top: 1rem;
  width: 100%;
  text-align: end;
  text-decoration: underline;
  font-size: 2rem;
`;

export const footerContainer = css`
  display: flex;
  justify-content: space-between;
  width: 100rem;
  margin-bottom: 8rem;
`;

export const contact = css`
  display: flex;
  flex-direction: column;
  align-content: center;
  font-size: 2rem;
  & > div:first-of-type {
    display: flex;
    margin-bottom: 2rem;
    & > span:first-of-type {
      margin-right: 1rem;
    }
  }
  & > div:last-of-type {
    display: flex;
    & > span:first-of-type {
      margin-right: 1rem;
    }
  }
`;

export const snsContainer = css`
  display: flex;
  justify-content: end;
  align-items: end;
  padding-bottom: 1rem;
  width: 15rem;
  font-size: 3.5rem;
  gap: 1rem;
`;
