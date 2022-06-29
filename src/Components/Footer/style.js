import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #272b38;
  padding-top: 44px;
  padding-bottom: 21px;
  & .copyright {
    font-size: 12px;
    color: #fff;
  }

  & .top-page {
    position: fixed;
    right: 46px;
    bottom: 55px;
    cursor: pointer;
    z-index: 55;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  padding-top: 35px;
  & div {
    align-items: center;
    display: flex;
    justify-content: center;
    &:after {
      content: "";
      width: 50px;
      background-color: #3d4354;
      height: 50px;
      display: flex;
      border-radius: 50%;
    }
    & img {
      position: absolute;
    }

    &:not(:first-of-type) {
      margin-left: 10px;
    }
  }
`;

export const MenuFooter = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 316px;
  width: 100%;
  margin-top: 38px;
  margin-bottom: 61px;
  & a {
    color: #fff;
    font-size: 14px;
  }
`;
