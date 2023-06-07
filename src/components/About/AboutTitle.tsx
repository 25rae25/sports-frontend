import styled from "styled-components";

const Abouttitle = styled.div`
	width: 100%;
	height: 300px;
	padding-top: 50px;
	border: 1px solid green;
	text-align: center;
	font-size: 30px;
	font-weight: bold;
`

const AboutSub = styled.div`
	width: 100%;
`

const AboutTitle = () => {
	return(
		<div>
		<Abouttitle></Abouttitle>
		<AboutSub></AboutSub>
		</div>
	)
}

export default AboutTitle;