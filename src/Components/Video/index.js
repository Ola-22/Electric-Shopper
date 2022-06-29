import * as S from "./style";
import { useState, useRef } from "react";

function Video() {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <S.videoContainer>
      <video
        ref={(video) => {
          videoRef.current = video;
        }}
        className="video"
        src=""
        loop
      />

      {!playing ? (
        <img
          src="./images/play.png"
          alt=""
          onClick={() => videoHandler("play")}
        />
      ) : (
        <img
          //   src="./images/play.png"
          alt=""
          onClick={() => videoHandler("pause")}
        />
      )}
    </S.videoContainer>
  );
}

export default Video;
