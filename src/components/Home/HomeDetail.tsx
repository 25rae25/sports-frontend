import styled from "styled-components";
import Logo from '../../commons/image/homelogo.jpg'

const DetailWrap = styled.div`
	width: 80%;
	margin: 50px auto 0 auto;
`

const DetailTitle = styled.div`
	font-size: 32px;
	margin: 30px 0 25px 0;

	&::after {
	content: "";
    display: block;
    width: 45px;
    height: 3px;
    background-color: #e0e721;
    margin-top: 2px;
  }
`

const DetailSub = styled.div`
	margin: 30px 0;
`

const LogoWrapper = styled.div`
	margin: 30px 0;
	display: flex;
`

const LogoImg = styled.img`
	width: 50%;
`

const LogoWrap = styled.div`
	padding-left: 92px;
	display: flex;
	flex-direction: column;
`

const LogoTitle = styled.div`
	text-align: center;
    font-size: 30px;
    font-weight: bold;
`

const LogoSub = styled.div`
	padding-top: 20px;
`


const HomeDetail = () => {
	return(
		<DetailWrap>
			<DetailTitle>
				대한민국의 토트넘 핫스퍼 팬 여러분, 환영합니다!
			</DetailTitle>
			<DetailSub>
				사이트 회원가입을 통해 손흥민 선수와 스퍼스의 경기정보와 경기결과를 만나보세요!
			</DetailSub>
			<DetailTitle>축구팬들의 환영</DetailTitle>
			<LogoWrapper>
				<LogoImg src={Logo}/>
				<LogoWrap>
					<LogoTitle>토트넘 핫스퍼 & 손흥민</LogoTitle>
					<LogoSub>저희 사이트는 토트넘 핫스퍼 경기정보, 경기결과 및 손흥민 선수를 응원하는 홈페이지입니다.</LogoSub>
				</LogoWrap>
			</LogoWrapper>
		</DetailWrap>
	)
}

export default HomeDetail;