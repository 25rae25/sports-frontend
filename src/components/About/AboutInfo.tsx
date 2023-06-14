import styled from "styled-components";

const Aboutwrap = styled.div`
	text-align: center;
	padding-top: 8%;
	font-size: 18px;
`

const About = styled.div`
	padding: 10px 0;
`

const AboutInfo = () => {
	return(
		<Aboutwrap>
			<About>정식명칭 : Tottenham Hotspur Football Club</About>
			<About>창단 : 1882년 9월 5일 (140주년)</About>
			<About>연고지 : 잉글랜드 런던 해링게이 구 (Haringey) 토트넘 (Tottenham)</About>
			<About>소속리그 : 프리미어 리그 (Premier League)</About>
			<About>홈구장 : 토트넘 홋스퍼 스타디움</About>
			<About>별칭 : 스퍼스 (Spurs)릴리화이츠 (The Lilywhites)</About>
		</Aboutwrap>
	)
}

export default AboutInfo;