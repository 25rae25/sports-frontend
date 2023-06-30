import styled from "styled-components";

const BoardWrapper = styled.img`
	width: 50%;
	display: block;
`
const BoardWrap = styled.div`
	width: 1000px;
`


const BoardDetail = () => {
	return(
		<BoardWrapper>
			<BoardWrap />
		</BoardWrapper>
	);
}

export default BoardDetail;