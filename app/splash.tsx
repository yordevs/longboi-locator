import styled, { keyframes } from "styled-components";
import { FaSearch } from "react-icons/fa"

const Container = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-color: #0B3019;
`

const animation = keyframes`
	0% {transform: translate(0px, 0px)}
	33% {transform: translate(86px, -43px)}
	66% {transform: translate(-70px, -120px)}
	100% {transform: translate(0px, 0px)}
`
	
const SearchIcon = styled(FaSearch)`
	animation-name: ${animation};
	animation-duration: 8s;
	animation-iteration-count: infinite;
`


export default function Splash() {
	return (
		<Container>
			<SearchIcon size={70} color="white" />
		</Container>
	);
}