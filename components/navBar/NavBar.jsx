import styled from "styled-components";
import Link from "next/link";

const NavBarDiv = styled.div`
    width: 100%;
    background-color: black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: stretch;
    position: fixed;
    height: 5em;
    bottom: 0;
`;

const TabButton = styled.a`
    padding: 1em;
    color: white;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
`;

const NavBar = () => {


    return (
        <NavBarDiv>
            <Link href="/profile" passHref><TabButton>Profile</TabButton></Link>
            <Link href="/browse" passHref><TabButton>Browse</TabButton></Link>
            <Link href="/upload" passHref><TabButton>Upload</TabButton></Link>
            <Link href="/locate" passHref><TabButton>Locate</TabButton></Link>
            <Link href="/settings" passHref><TabButton>Settings</TabButton></Link>
        </NavBarDiv>
    );
};

export default NavBar;