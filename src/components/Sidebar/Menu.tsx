import React from "react";
import MenuItem from "./MenuItem";
import styled from "styled-components";

const Container = styled.div`
	ul {
		display: flex;
		margin: 25px;
		padding: 10px;
	}
`


const menuList = [
	{menuName: 'Home', path: '/'},
	{menuName: 'About', path: '/about'},
	{menuName: 'Board', path: '/board'},
	{menuName: 'Login', path: '/login'}
]

const Menu = () => {
	return (
		<Container>
			<ul>
				{menuList.map((data) => {
					 return (
					 	<MenuItem 
						key={data.menuName} 
						menuName={data.menuName}
						path={data.path}
						/>
					 );
				})}
			</ul>
		</Container>
	)
}

export default Menu