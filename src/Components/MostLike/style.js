import styled from "styled-components";

export const LikeContainer = styled.div`
  display: flex;
  width: 83%;
  margin-top: 111.5px;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }

  & .electronic {
    @media (max-width: 1000px) {
      margin: auto;
      width: 90%;
    }
  }

  & .container {
    padding-top: 48px;

    & h3 {
      font-size: 32px;
      font-weight: normal;
      max-width: 420px;
      width: 100%;
      height: 94px;
      margin-bottom: 20px;
    }
    & .para {
      font-size: 18px;
      max-width: 507px;
      width: 100%;
      margin-bottom: 57.6px;
    }
  }

  & img {
    max-width: 100%;
  }
`;

export const box = styled.div`
  display: flex;
  align-items: center;

  & img {
    align-self: flex-start;
    margin-right: 15.8px;
  }
  & h5 {
    font-size: 18px;
    font-weight: normal;
  }

  & .paragraph {
    font-size: 16px;
    color: #716c80;
    height: 47px;
    overflow: hidden;
    margin-top: 15.4px;
  }

  &:not(:first-of-type) {
    margin-top: 31.6px;
  }
`;
