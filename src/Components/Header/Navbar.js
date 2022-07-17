import * as S from "./style";
import { Link } from "react-router-dom";

function Navbar({ open }) {
  return (
    // <div>
    <S.Ul open={open}>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <a href="#who-we-are">Who we are</a>
      </li>

      <li>
        <a href="#features">Features</a>
      </li>

      <li>
        <a href="#testimonials">Testimonials</a>
      </li>

      <li>
        <a href="#contact-us">Contact Us</a>
      </li>
      {/* <button>download app</button> */}
    </S.Ul>
    // </div>
  );
}

export default Navbar;
