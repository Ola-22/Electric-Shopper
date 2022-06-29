import * as S from "./style";

function MostLike() {
  return (
    <S.LikeContainer>
      <div className="container">
        <h3>You will most likely get better application at all</h3>
        <p className="para">
          Just login with your mail account from play store and use whatever you
          want for your business purpose or dummy text. Don't miss your chance,
          it just started.
        </p>

        <S.box>
          <img src="./images/download.png" alt="download" />
          <div>
            <h5>Free DownLoad</h5>
            <p className="paragraph">
              Just login with your mail account from play store and use whatever
              you want for your business purpose or dummy text. Don't miss your
              chance, it just started.
            </p>
          </div>
        </S.box>

        <S.box>
          <img src="./images/trusted.png" alt="download" />
          <div>
            <h5>Trusted</h5>
            <p className="paragraph">
              Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
              amet consectetur sapien. Etiam dui ipsum, viverra vel tur
            </p>
          </div>
        </S.box>

        <S.box>
          <img src="./images/insured.png" alt="download" />
          <div>
            <h5>Fully Insured</h5>
            <p className="paragraph">
              Just login with your mail account from play store and use whatever
              you want for your business purpose or dummy text. Don't miss your
              chance, it just started.
            </p>
          </div>
        </S.box>
      </div>
      <img
        className="electronic"
        src="./images/electronic.png"
        alt="electronic img"
      />
    </S.LikeContainer>
  );
}

export default MostLike;
