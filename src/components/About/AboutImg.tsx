import homelogo from '../../commons/image/homelogo.jpg'
import styled from "styled-components";

const AboutImage = styled.img`
	width: 50%;
	display: block;
`

const AboutImg = () => {
	return(
		<AboutImage src={homelogo}/>
	)
}

export default AboutImg;