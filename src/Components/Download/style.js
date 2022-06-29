import styled from "styled-components";

export const DownloadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 83%;
  margin-top: 100px;
  & div {
    background-color: #f4f8fc;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 315px;
    width: 100%;
    height: 228px;
    justify-content: space-around;
    border-radius: 6px;

    &:not(:first-of-type) {
      margin-inline-start: 25px;
      @media (max-width: 600px) {
        margin-inline-start: 0;
        margin-top: 20px;
      }
    }

    & h6 {
      font-size: 18px;
      font-weight: normal;
    }
    & p {
      font-size: 16px;
      color: #716c80;
    }

    @media (max-width: 600px) {
      max-width: 100%;
    }
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    margin-top: 120px;
  }
`;
