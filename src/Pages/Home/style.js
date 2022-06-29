import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const buttonContainer = styled.div`
  max-width: 423px;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #ebebeb;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 23px;
  padding-right: 3px;
  margin-bottom: 39px;
  & input {
    border: none;
    font-size: 16px;
    &::placeholder {
      color: rgba(180, 180, 180, 0.94);
    }
  }

  & button {
    background: linear-gradient(to left top, #6140e9, #9583ff);
    max-width: 147px;
    width: 100%;
    height: 44px;
    color: #fff;
    font-size: 16px;
    border-radius: 25px;
    border: none;
  }

  @media (max-width: 550px) {
    width: 90%;
  }
`;
