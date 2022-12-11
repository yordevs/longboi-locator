import styled from "styled-components";

const UserCard = styled.div`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr 1fr;

  p {
      margin: 0.5em 0;
  }
`;

const Picture = styled.img`
  grid-row: 1 / -1;
  grid-column: 1;
`;

export const User = ({ user }) => {
  return (
    <UserCard>
      <p>{user.displayName}</p>
      <p>{user.email}</p>
      <p>{user.uid}</p>
      <Picture src={user.photoURL} alt={user.displayName + "'s profile picture"} />
    </UserCard>
  );
};