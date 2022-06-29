import styled from "styled-components";

export const appScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  & h6 {
    font-size: 14px;
    color: #6941e7;
    font-weight: normal;
  }
  & p {
    font-size: 27px;
    max-width: 422px;
    margin-top: 18.1px;
    margin-bottom: 50px;

    @media (max-width: 550px) {
      font-size: 14px;
      text-align: center;
    }
  }
  & div {
    width: 83%;
  }
  & img {
    z-index: 22;
    max-width: 100%;
    position: relative;
  }
  &::after {
    content: "";
    background-color: #272a37;
    width: 100%;
    height: 390px;
    position: absolute;
    top: 44%;
  }
`;
