import styled from "styled-components";

const Aboutwrap = styled.div`
	text-align: center;
	padding-top: 20px;
`

const About = styled.div`
	padding: 10px 0;
`

const AboutInfo = () => {
	return(
		<Aboutwrap>
			<About>정식명칭 : Tottenham Hotspur Football Club</About>
			<About>나이 : 28살</About>
			<About>이메일 : whdudfo0124@gmail.com</About>
			<About>git : https://github.com/25rae25</About>
			<About>블로그 : https://velog.io/@niceyoungrae</About>
		</Aboutwrap>
	)
}

export default AboutInfo;