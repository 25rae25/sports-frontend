import styled from "styled-components";
import BoardDetail from "./BoardDetail";

const BoardWrapper = styled.img`
	width: 50%;
	display: block;
`


const BoardForm = () => {
	return(
		<BoardWrapper>
			<BoardDetail />
		</BoardWrapper>
	);
}

export default BoardForm;