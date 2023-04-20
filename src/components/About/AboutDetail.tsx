import React from "react";
import styled from "styled-components";
import AboutInfo from "./AboutInfo";
import AboutTitle from "./AboutTitle";

const Container = styled.div`
	width: 1200px;
	height: 600px;
	margin: 100px auto 0px auto;
	border:1px solid red;
	display: flex;
`

const AboutImg = styled.div`
	width: 600px;
	border: 1px solid blue;
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