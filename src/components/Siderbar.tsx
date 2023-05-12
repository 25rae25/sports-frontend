import React from "react";
import styled from "styled-components";
import Switch from "./Sidebar/Switch";
import Menu from "./Sidebar/Menu";

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

const NavBar = styled.div`
	width: 100%;
	height: 14vh;
	background-color: ${({theme}) => theme.secondary};
	transition: all 0.25s;
	display: flex;
	justify-content: center;
	position: relative;
`

const ContentContainer = styled.div`
	width: 100%;
	height: 100%;
`

// type any 수정 다른걸로
interface Props {
	children: any;
}

const Sidebar = ({children}: Props) => {
	return (
		<Container>
			<NavBar>
				<Menu />
				<Switch />
			</NavBar>
			<ContentContainer>{children}</ContentContainer>
		</Container>
	)
}

export default Sidebar;