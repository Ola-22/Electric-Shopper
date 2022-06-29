import { Link } from "react-router-dom";
import * as S from "./style";
import { useState } from "react";

function Footer() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <S.FooterContainer>
      <img src="./images/Bakesh-Logo.png" alt="Bakesh-Logo" />

      <S.SocialMedia>
        <div>
          <img src="./images/facebook.png" alt="facebook" />
        </div>
        <div>
          <img src="./images/twitter.png" alt="facebook" />
        </div>
        <div>
          <img src="./images/instagram.png" alt="facebook" />
        </div>
        <div>
          <img src="./images/linkedin.png" alt="facebook" />
        </div>
      </S.SocialMedia>

      <S.MenuFooter>
        <Link to="/">Services</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">FAQ</Link>
        <Link to="/">Contact Us</Link>
      </S.MenuFooter>
      <img
        className="top-page"
        src="./images/previous.png"
        alt="top the page"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
      <div className="copyright">© 2020 NewSolutions All Rights Reserved</div>
    </S.FooterContainer>
  );
}

export default Footer;
