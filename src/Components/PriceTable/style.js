import styled from "styled-components";

export const Container = styled.div`
  background: url("./images/background.png");
  position: relative;
  width: 100%;
  margin-top: 7%;
  color: #fff;
  height: 100%;
  min-height: 685px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;

  & .main {
    display: flex;
    width: 83%;

    @media (max-width: 1000px) {
      flex-wrap: wrap;
      align-items: center;
      padding-bottom: 20px;
      padding-top: 20px;
    }
    & .box-main {
      display: flex;
      width: 100%;

      @media (max-width: 1000px) {
        margin-top: 20px;
      }

      @media (max-width: 550px) {
        flex-wrap: wrap;
      }
    }
  }

  /* @media (max-width: 550px) {
    background-size: cover;
  } */
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-width: 358px;
  width: 100%;
  height: 463px;
  color: #000000;
  align-items: center;
  border-radius: 6px;

  & .box-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    padding-top: 44px;
  }
  & h6 {
    font-size: 15px;
    font-weight: normal;
    color: #000000;
    margin-bottom: 4px;
  }

  & p {
    font-size: 21px;
    color: #807c8e;
  }

  & h5 {
    font-size: 29px;
    font-weight: normal;
    margin-top: 9px;
    margin-bottom: 32px;
    & span {
      font-size: 16px;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-top: 27px;
    & li {
      font-size: 15px;
      & span {
        margin-left: 9px;
      }
      &:not(:first-of-type) {
        margin-top: 15px;
      }
    }
  }

  & button {
    background: linear-gradient(to left top, #6140e9, #9583ff);
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 20px;
    color: #fff;
    text-transform: capitalize;
  }

  &:last-of-type {
    margin-left: 23px;
    @media (max-width: 550px) {
      margin-left: 0;
      margin-top: 10px;
    }
  }

  @media (max-width: 550px) {
    max-width: 100%;
  }
`;

export const PriceTable = styled.div`
  margin-right: 47px;
  & h6 {
    font-size: 15px;
    font-weight: normal;
  }
  & p {
    font-size: 27px;
    width: 209px;
    font-weight: normal;
    margin-top: 8px;
    margin-bottom: 43px;
  }

  & div {
    width: 182px;
    background: #fff;
    height: 46px;
    border-radius: 23px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    & button {
      background: #fff;
      border: none;
      width: 80px;
      &.active {
        background: linear-gradient(to left top, #6140e9, #9583ff);
        color: #fff;
        width: 90px;
        height: 38px;
        border-radius: 23px;
      }

      &:first-of-type {
        margin-left: 4px;
      }
    }
  }
`;
