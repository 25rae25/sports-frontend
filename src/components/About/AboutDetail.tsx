import React from "react";
import styled from "styled-components";
import AboutInfo from "./AboutInfo";
import AboutTitle from "./AboutTitle";
import AboutImg from "./AboutImg";

const Container = styled.div`
	width: 80%;
	height: 500px;
	margin: 150px auto 0px auto;
	border:1px solid red;
	display: flex;
	justify-content: center;
`

const Aboutinfo = styled.div`
	width: 600px;
	border: 1px solid green;
	display: flex;
	flex-direction: column;
`


const AboutDetail = () => {
	return(
		<Container>
			<AboutImg />
			<Aboutinfo>
				<AboutTitle />
				<AboutInfo />
			</Aboutinfo>
		</Container>
	)
}

export default AboutDetail;