import * as S from "./style";

function DownloadFree() {
  return (
    <S.Container>
      <div className="left-section">
        <h6>Download the App</h6>
        <h4>Let's get your free app From Apple and Play Store</h4>
        <p>
          Free instant download from store, just login with your mail account
          from play store and use whatever you want for your business purpose.
        </p>
        <div className="button-container">
          <button>
            <img src="./images/play-store.png" alt="download from play store" />
            <div>
              <h6>Get It On</h6>
              <h3>Google play</h3>
            </div>
          </button>
          <button>
            <img
              src="./images/apple-store.png"
              alt="download from play store"
            />
            <div>
              <h6>Download on the</h6>
              <h3>Apple Store</h3>
            </div>
          </button>
        </div>
      </div>
      <div className="right-section">
        <img
          className="mobile-img"
          src="./images/mobile-design.png"
          alt="design of the mobile"
        />
      </div>
    </S.Container>
  );
}

export default DownloadFree;
