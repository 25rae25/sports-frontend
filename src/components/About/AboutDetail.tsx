import React from "react";
import styled from "styled-components";
import AboutInfo from "./AboutInfo";

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

const Abouttitle = styled.div`
	width: 100%;
	height: 300px;
	border: 1px solid green;
`

const AboutDetail = () => {
	return(
		<Container>
			<AboutImg />
			<Aboutinfo>
				<Abouttitle>안녕하세요 조영래입니다</Abouttitle>
				<AboutInfo />
			</Aboutinfo>
		</Container>
	)
}

export default AboutDetail;