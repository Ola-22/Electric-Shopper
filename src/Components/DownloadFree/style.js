import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: url("./images/Group-back.png");
  /* background-size: cover; */
  background-repeat: no-repeat;
  background-size: 100% 484px;
  width: 83%;
  color: #fff;
  align-items: center;
  line-height: 1.5;
  justify-content: space-evenly;
  position: relative;
  margin-top: 159.8px;
  margin-bottom: 131.5px;
  height: 484px;

  & .left-section {
    width: 74%;
    & h6 {
      font-size: 15px;
      font-weight: normal;
    }
    & h4 {
      font-size: 27px;
      max-width: 316px;
      font-weight: normal;
      margin-top: 7.4px;
      margin-bottom: 19px;
    }
    & p {
      font-weight: normal;
      font-size: 13px;
      max-width: 327px;
      margin-bottom: 24.6px;
    }

    & .button-container {
      display: flex;
      & button {
        max-width: 156px;
        width: 100%;
        height: 61px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 6px;
        border: none;

        &:last-of-type {
          margin-left: 15px;
        }

        & h6 {
          font-size: 11px;
          color: #767184;
          font-weight: normal;
        }
        & h3 {
          font-size: 15px;
          font-weight: normal;
        }
      }
    }

    @media (max-width: 550px) {
      width: 90%;
    }
  }

  & .right-section {
    position: absolute;
    top: -36px;
    left: 52%;
    & .mobile-img {
      max-width: 100%;
      @media (max-width: 900px) {
        width: 80%;
        margin: auto;
        display: flex;
      }
    }

    @media (max-width: 900px) {
      position: relative;
      left: 0;
      top: 20px;
    }
  }

  @media (max-width: 900px) {
    flex-wrap: wrap;
    margin-bottom: 250px;
  }
`;
