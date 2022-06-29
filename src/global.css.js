import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@font-face {
font-family: "NeoSansArabic";
src: local("NeoSansArabic"),
    url("./fonts/NeoSansArabic.ttf") format("truetype");
    font-display: fallback;
   }


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.App{
  font-family: "NeoSansArabic";
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
}

a{
text-decoration: none;
}

input, select{
outline: none;
}


`;
