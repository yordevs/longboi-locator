'use client'

import styled from "styled-components"
import { FaCamera, FaUser, FaImage, FaBars, FaMapMarkerAlt } from "react-icons/fa"
import Link from "next/link"

const Container = styled.nav`
	background-color: #0B3019;
	width: 100vw;
	height: 75px;
	
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 1px;
	grid-row-gap: 0px; 
`

const IconHolder = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export default function Navbar() {
	return (
		<Container>
			<IconHolder href={"/profile"}>
				<FaUser size={30} color="white" />
			</IconHolder>
			<IconHolder href={"/browse"}>
				<FaImage size={30} color="white" />
			</IconHolder>
			<IconHolder href={"/upload"}>
				<FaCamera size={30} color="white" />
			</IconHolder>
			<IconHolder href={"/locate"}>
				<FaMapMarkerAlt size={30} color="white" />
			</IconHolder>
			<IconHolder href={"/settings"}>
				<FaBars size={30} color="white" />
			</IconHolder>
		</Container>
	)
}