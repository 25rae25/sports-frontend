import styled from "styled-components";

const Aboutwrap = styled.div`
	text-align: center;
	padding-top: 8%;
	font-size: 18px;
`

const About = styled.div`
	padding: 10px 0;
`

const Title = styled.span`
	font-weight: bold;
`

const AboutInfo = () => {
	return(
		<Aboutwrap>
			<About>
				<Title>정식명칭</Title> 
				: Tottenham Hotspur Football Club
			</About>
			<About>
				<Title>창단</Title>
				 : 1882년 9월 5일 (140주년)
			</About>
			<About>
				<Title>연고지</Title> 
				: 잉글랜드 런던 해링게이 구 (Haringey) 토트넘 (Tottenham)</About>
			<About>
				<Title>소속리그</Title>
				 : 프리미어 리그 (Premier League)</About>
			<About>
				<Title>홈구장</Title>
				 : 토트넘 홋스퍼 스타디움
			</About>
			<About>
				<Title>별칭</Title>
				 : 스퍼스 (Spurs)릴리화이츠 (The Lilywhites)
			</About>
		</Aboutwrap>
	)
}

export default AboutInfo;