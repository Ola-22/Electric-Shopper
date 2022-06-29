import styled from "styled-components";

export const videoContainer = styled.div`
  background: url("./images/background-video.png");
  background-size: cover;
  margin-top: 86px;
  width: 91%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & video {
    width: 100%;
    height: 100%;
  }

  & img {
    position: absolute;
  }
`;
