import styled from "styled-components";

const BoardWrapper = styled.img`
	width: 50%;
	display: block;
`
const BoardWrap = styled.div`
	width: 1000px;
`

const BoardTitle = styled.div`
	width: 100px;
`


const BoardDetail = () => {
	return(
		<BoardWrapper>
			<BoardWrap>
				<BoardTitle />
			</BoardWrap>
		</BoardWrapper>
	);
}

export default BoardDetail;