import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
	box-sizing: border-box;
}

 /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	font-family: 'Oswald';
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

*{
	body{
		font-family: 'Lato', sans-serif;
	}
}

.swiper {
  width: 100%;
  height: 100%;
  border-radius: 6px;

  @media (min-width: 760px){
    padding-left: 20px;
  }
}

.swiper-slide {
  background: #fff;
  font-style: italic;
  color: #000;
  max-height: 50vh !important;

  @media (min-width: 760px) {
    padding: 10px;
    width: 500px !important;
    border: solid 2px black;
    border-radius: 12px;
    margin-top: 4px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    .info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 50%;
    }

    .buttons{
      width: 140px;
      height: 50px;

      .order{
        width: 140px;
      }
    }

    input{
      width: 60px;
    }
  }
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:root {
   --background-color: rgb(241, 246, 247);
    --light-color: rgb(255, 255, 255);
    --light-dark-font-color: rgb(51, 50, 50);
    --closing-color: rgb(245, 41, 41);
    --grey-color: grey;
    --check-color: rgb(42, 199, 42);
    --aunsh-website-color: rgb(0, 145, 255);
}

/* --------------------------------- GLOBAL STYLES ------------------- */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--background-color) !important;
  font-family: 'Montserrat', sans-serif;
}

/* ------------------------------- BASICS ------------------------ */
.disabled_change_cursor {
    cursor: not-allowed;
}

.closing:hover {
  color: var(--closing-color)
}

.app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cursor_pointer {
  cursor: pointer;
}

.flex_middle {
    display: flex;
    align-items: center;
    justify-content: center;
}

`;

export default GlobalStyle;