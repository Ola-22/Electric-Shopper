import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: url("./images/Combined-Shape.png") no-repeat;
  /* background-size: 100% 100%; */
  width: 100%;
  padding-top: 47px;

  & .logo-container {
    background-color: #fff;
    width: 67px;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
  }

  @media (max-width: 700px) {
    background-size: inherit;
    background-color: #6140e9;
    padding-bottom: 10px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 83%;

  & ul {
    list-style: none;
    display: flex;
    max-width: 478px;
    width: 100%;
    justify-content: space-between;

    @font-face {
      font-family: "NeoSansArabicMedium";
      src: local("NeoSansArabicMedium"),
        url("./fonts/NeoSansArabicMedium.ttf") format("truetype");
      font-display: fallback;
    }

    font-family: "NeoSansArabicMedium";
    & li {
      & a {
        color: #fff;
        font-size: 16px;
        font-weight: normal;

        @media (max-width: 800px) {
          font-size: 14px;
        }
      }
    }
  }

  & button {
    background: linear-gradient(to left top, #6140e9, #9583ff);
    max-width: 148px;
    width: 100%;
    height: 40px;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    color: #ffffff;
    text-transform: capitalize;
  }
`;

export const ContentDesign = styled.div`
  display: flex;
  justify-content: space-between;
  width: 83%;
  padding-top: 59px;
  & h2 {
    font-weight: normal;
    color: #ffffff;
    font-size: 37px;
    max-width: 486px;
    width: 100%;
    padding-top: 64.5px;

    @media (max-width: 500px) {
      font-size: 16px;
      padding-top: 10px;
    }
  }

  & p {
    color: rgba(255, 255, 255, 0.59);
    font-size: 22px;
    max-width: 531px;
    width: 100%;
    margin-top: 26px;
    line-height: 1.5;
    @media (max-width: 500px) {
      font-size: 14px;
      margin-top: 10px;
    }
  }

  & .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    & img:first-of-type {
      position: relative;
      z-index: 33;
      max-width: 100%;
      max-height: 100%;
    }
    & .Bitmap {
      position: absolute;
      top: 78%;

      @media (max-width: 900px) {
        display: none;
      }
    }
  }

  & .payment {
    position: absolute;
    top: 89%;
    align-items: center;
    display: flex;
    height: 31px;
    justify-content: space-between;
    max-width: 621px;
    width: 100%;

    @media (max-width: 900px) {
      display: none;
    }

    & img {
      max-width: 100%;
    }
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  max-width: 478px;
  width: 100%;
  justify-content: space-between;

  @font-face {
    font-family: "NeoSansArabicMedium";
    src: local("NeoSansArabicMedium"),
      url("./fonts/NeoSansArabicMedium.ttf") format("truetype");
    font-display: fallback;
  }

  font-family: "NeoSansArabicMedium";
  & li {
    margin-left: 20px;
    & a {
      color: #fff;
      font-size: 16px;
      font-weight: normal;

      @media (max-width: 800px) {
        font-size: 14px;
      }
    }
    @media (max-width: 980px) {
      margin-left: 0;
    }
  }

  @media (max-width: 980px) {
    flex-flow: column nowrap;
    background-color: #6140e9;
    position: fixed;
    align-items: center;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: ${({ open }) =>
      open ? "transform 0.3s ease-in-out" : "translateX(100%)"};
    z-index: 222;
    max-width: 100% !important;
    width: 100%;
    padding-bottom: 20px;
  }
`;
