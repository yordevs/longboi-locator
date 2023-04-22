'use client'

import styled from "styled-components";
import { FaTimes } from "react-icons/fa"
import { useRouter } from "next/navigation";

const OuterContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: end;
	flex-direction: column;

	background-color: #0B3019;
	height: calc((100vh - 75px) * 0.9);
	width: 100vw;
	border-top-right-radius: 12px;
	border-top-left-radius: 12px;
`
const InnerContainer = styled.div`
	background-color: #fff;
	height: calc(((100vh - 75px) * 0.9) - 55px);
	width: 100vw;
	border-top-right-radius: 12px;
	border-top-left-radius: 12px;
`

const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 45px;
	width: 95vw;
`

const Title = styled.h1`
	padding: 0%;
	margin: 0%;
	color: #fff;
`

const CloseButton = styled(FaTimes)`
	position: absolute;
	right: 10px;
	top: 10px;
	color: #fff;
	cursor: pointer;
`


export default function Sheet({ title, children }: { title: string, children: React.ReactNode }) {
	const navigate = useRouter();
	const onClose = () => {
		navigate.push("/")
	}

	return (
		<OuterContainer>
			<CloseButton size={30} onClick={onClose}/>
			<TitleContainer>
				<Title>{title}</Title>
			</TitleContainer>
			<InnerContainer>
				{children}
			</InnerContainer>
		</OuterContainer>
	);
}