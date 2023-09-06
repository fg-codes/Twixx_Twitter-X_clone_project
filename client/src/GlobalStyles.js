import { createGlobalStyle } from 'styled-components';
import "@fontsource/poppins";

export const COLORS = {
	beige: '#E1D4BB',
	matte_blue: '#537188',
	dark_gray: '#343a40',
	background: '#EEEEEE',
	yellow: '#CBB279',
	red: '#9a031e'
}

export const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/

:root {
	--max_width: 90vw;
	--sidebar_width: 240px;
}
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
	max-width: var(--max_width);
	margin: 0 auto;
  font-family: "Poppins", sans-serif;
	background: ${COLORS.background};
	border-left: 1px solid ${COLORS.matte_blue};
	border-right: 1px solid ${COLORS.matte_blue};
	color: ${COLORS.dark_gray};
	min-height: 100vh;
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
`;

export default GlobalStyle;