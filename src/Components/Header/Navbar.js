import * as S from "./style";

function Navbar({ open }) {
  return (
    // <div>
    <S.Ul open={open}>
      <li>
        <a href="/">Home</a>
      </li>

      <li>
        <a href="/">Who we are</a>
      </li>

      <li>
        <a href="/">Features</a>
      </li>

      <li>
        <a href="/">Testimonials</a>
      </li>

      <li>
        <a href="/">Contact Us</a>
      </li>
      {/* <button>download app</button> */}
    </S.Ul>
    // </div>
  );
}

export default Navbar;
