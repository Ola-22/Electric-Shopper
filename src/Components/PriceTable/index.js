import * as S from "./style";
import { useState } from "react";

function PriceTable() {
  const [active, setActive] = useState("1");

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  return (
    <S.Container>
      <div className="main">
        <S.PriceTable>
          <h6>Price Table</h6>
          <p>No hidden fees Choose your plan</p>
          <div>
            <button
              key={1}
              className={active === "1" ? "active" : undefined}
              id={"1"}
              onClick={handleClick}
            >
              Monthly
            </button>
            <button
              key={2}
              className={active === "2" ? "active" : undefined}
              id={"2"}
              onClick={handleClick}
            >
              Yearly
            </button>
          </div>
        </S.PriceTable>
        <div className="box-main">
          <S.Box>
            <div className="box-container">
              <h6>small team</h6>
              <p>Powerful and cool items</p>
              <h5>
                $ 49 / <span>mo</span>
              </h5>
              <button>buy plan</button>
              <ul>
                <li>
                  <img src="./images/yes.png" alt="data" />
                  <span>Powerful and cool items</span>
                </li>

                <li>
                  <img src="./images/yes.png" alt="data" />
                  <span>Powerful and cool items</span>
                </li>

                <li>
                  <img src="./images/yes.png" alt="data" />
                  <span>Powerful and cool items</span>
                </li>

                <li>
                  <img src="./images/yes.png" alt="data" />
                  <span>Powerful and cool items</span>
                </li>

                <li>
                  <img src="./images/yes.png" alt="data" />
                  <span>Powerful and cool items</span>
                </li>
                <li>
                  <img src="./images/yes.png" alt="data" />
                  <span>Powerful and cool items</span>
                </li>
              </ul>
            </div>
          </S.Box>
          <S.Box>
            <div className="box-container">
              <h6>small team</h6>
              <p>Powerful and cool items</p>
              <h5>$ 49 / mo</h5>
              <button>buy plan</button>
              <ul>
                <li>
                  <img src="./images/yes.png" alt="data" />
                  <span>Powerful and cool items</span>
                </li>

                <li>
                  <img src="./images/yes.png" alt="data" />
                  <span>Powerful and cool items</span>
                </li>

                <li>
                  <img src="./images/yes.png" alt="data" />
                  <span>Powerful and cool items</span>
                </li>

                <li>
                  <img src="./images/yes.png" alt="data" />
                  <span>Powerful and cool items</span>
                </li>

                <li>
                  <img src="./images/yes.png" alt="data" />
                  <span>Powerful and cool items</span>
                </li>
              </ul>
            </div>
          </S.Box>
        </div>
      </div>
    </S.Container>
  );
}

export default PriceTable;
