import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

import { logIn, logOut, getFirebaseAuth } from "../firebase/clientApp.js";
import { User } from "./User.jsx";

const ContainerDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const auth = getFirebaseAuth();

export const UserManagement = props => {
  const [user, authLoading, authError] = useAuthState(auth);


  if (authLoading) {
    return (
      <ContainerDiv>
        Loading...
      </ContainerDiv>
    );
  }

  return (
    <ContainerDiv>

      {user ?
        <>
          <User user={user} />
          <button onClick={logOut}>Log out</button>
        </> :
        <button onClick={logIn}>Log in</button>
      }

    </ContainerDiv>
  );
};