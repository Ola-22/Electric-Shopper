import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 83%;
  padding-top: 96.5px;

  & h6 {
    font-size: 14px;
    color: #6941e7;
    font-weight: normal;
    text-align: center;
  }

  & p {
    font-size: 27px;
    max-width: 520px;
    margin-top: 24.6px;
    margin-bottom: 40.4px;
    text-align: center;
  }
  & .slick-slider {
    width: 100%;
  }
`;

export const CardContainer = styled.div`
  max-width: 315px;
  width: 100%;
  height: 285px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 550px) {
    margin: auto;
  }
  /* background-color: #f4f8fc; */

  /* &:nth-child(odd) {
    background-color: #f4f8fc;
  }

  &:nth-child(even) {
    box-shadow: 0 12px 55px rgba(0, 0, 0, 0.05);
    background-color: #fff;
  } */
  & .card-body {
    width: 85%;
    display: flex;
    flex-direction: column;
    & .img-container {
      display: flex;
      align-items: center;

      & img {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        object-fit: contain;
      }
      & h6 {
        font-size: 16px;
      }
    }

    & p {
      color: #9b9997;
      font-size: 15px;
      max-width: 262px;
      text-align: start;
    }

    & h5 {
      font-size: 13px;
      color: #616161;
    }
  }

  &:not(:first-of-type) {
    margin-left: 25px;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  & span {
    color: #f4c01e;
    & svg {
      width: 22px;
      height: 21px;
    }
  }
`;
