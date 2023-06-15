import React from "react";
import { useThemeContext } from "../../context/themeContext";
import styled from "styled-components";

const Container = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
`

const AddButton = styled.button`
	border:none;
	font-size: 15px;
	background-color: none;
	padding: 20px 30px;
	cursor: pointer;
`

const Switch = () => {
	const { toggleTheme } = useThemeContext();
	return (
		<Container>
			<AddButton onClick={toggleTheme}>{`테마 변경`}</AddButton>
		</Container>
	)
}

export default Switch