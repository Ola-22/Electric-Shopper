import Menu from "./Menu";
import Navbar from "./Navbar";
import * as S from "./style";

function Header() {
  return (
    <S.HeaderContainer>
      <S.NavContainer>
        <div className="logo-container">
          <img src="./images/logo.png" alt="logo img" />
        </div>

        <Menu />
        <button>download app</button>
      </S.NavContainer>

      <S.ContentDesign>
        <div>
          <h2>Lorem Ipusme Lorem Ipusme Lorem Ipusme </h2>
          <p>
            Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit amet
            consectetur sapien. Etiam dui
          </p>
          <div className="payment">
            <img src="./images/amazon.png" alt="amazon" />
            <img src="./images/stripe.png" alt="stripe" />
            <img src="./images/paypal.png" alt="paypal" />
            <img src="./images/slack.png" alt="slack" />
            <img src="./images/airbnb.png" alt="airbnb" />
          </div>
        </div>
        <div className="container">
          <img src="./images/design.png" alt="" />
          <img className="Bitmap" src="./images/Bitmap.png" alt="" />
        </div>
      </S.ContentDesign>
    </S.HeaderContainer>
  );
}

export default Header;
