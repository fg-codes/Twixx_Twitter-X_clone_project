import { createGlobalStyle } from 'styled-components';

export const COLORS = {
	background: '#18191A',
	card: '#242526',
	hover: '#3A3B3C',
	primary_blue: '#1DA1F2',
	primary_text: '#E4E6EB',
	secondary_text: '#B1B3B7',
	yellow: '#CBB279',
	red: '#9a031e'
}

export const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/

:root {
	--sidebar_width: 15vw;
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
	margin: 0 auto;
	background: ${COLORS.background};
	color: ${COLORS.primary_blue};
	min-height: 100vh;
	font-family: 'Poppins', sans-serif;
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