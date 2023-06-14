import React from "react";
import styled from "styled-components";
import AboutInfo from "./AboutInfo";
// import AboutTitle from "./AboutTitle";
import AboutImg from "./AboutImg";

const Container = styled.div`
	width: 80%;
	height: 500px;
	margin: 150px auto 0px auto;
	display: flex;
	justify-content: center;
`

// const Aboutinfo = styled.div`
// 	width: 600px;
// 	display: flex;
// 	flex-direction: column;
// `


const AboutDetail = () => {
	return(
		<Container>
			<AboutImg />
				<AboutInfo />
		</Container>
	)
}

export default AboutDetail;