import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}
	body {
		background: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.textColor};
		margin: 0;
		padding: 0;
		transition: all 0.25 line-break;
	}
`