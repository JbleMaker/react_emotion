import { css } from "@emotion/react";

export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5rem;
  width: 100%;
  height: 12rem;
  background-color: #f0e4da;

  & > h1 {
    margin-left: 13rem;
    font-size: 5rem;
  }
`;

export const menu = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 13rem;
  width: 64rem;
  font-size: 1.5rem;
`;

export const shopButton = css`
  border: none;
  border-radius: 0.4rem;
  width: 12rem;
  height: 4rem;
  background-color: #d4beab;
`;

export const mainContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75rem;
  background-color: #c3b7b4;
`;

export const mainTitle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64rem;
  color: #ffffff;
  & > h1 {
    margin-bottom: 6rem;
    font-size: 6rem;
  }
  & > h2 {
    margin-bottom: 4.5rem;
    font-size: 3rem;
  }
  & > button {
    border: none;
    border-radius: 0.4rem;
    width: 12rem;
    height: 4rem;
    background-color: #efe3d9;
  }
`;

export const mainBottom = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10rem;
`;

export const icons = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 13rem;
  width: 20rem;
  font-size: 3rem;
  color: #ffffff;
`;

export const mainLink = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 13rem;
  width: 30rem;
  hegiht: 2rem;
  font-size: 2rem;
  color: #ffffff;
  & > span:first-of-type {
    margin-right: 1rem;
  }
`;

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

export const ourServices = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #efe3d9;

  & > div:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20rem;
  }
`;

export const ourServiceTitle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  width: 100%;
  height: 10rem;

  & > span:first-of-type {
    font-size: 1.5rem;
    color: #a1846b;
    margin-bottom: 4.5rem;
  }

  & > span:last-of-type {
    font-size: 4.5rem;
  }
`;

export const productContainer = css`
  display: flex;
  justify-content: space-between;
  margin: 0 25rem;
`;

export const productBox = css`
  width: 36rem;
  height: 55rem;
`;

export const productImg = css`
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  width: 100%;
  height: 29rem;
`;

export const productContents = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 26rem;
  background-color: #d6bdac;

  & > h1 {
    margin-top: 3rem;
    font-size: 3rem;
    font-weight: 600;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > span {
      font-size: 1.5rem;
      margin: 0 4.3rem;
      margin-bottom: 2rem;
      font-weight: 200;
    }
  }

  & > button {
    margin-bottom: 4rem;
    border: none;
    background-color: #d6bdac;
    font-size: 1.2rem;
    font-weight: 800;
  }
`;
