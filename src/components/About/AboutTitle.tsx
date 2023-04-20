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

const AboutTitle = () => {
	return(
		<Abouttitle>안녕하세요 조영래입니다</Abouttitle>
	)
}

export default AboutTitle;