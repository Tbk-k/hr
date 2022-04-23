import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/molecules/userListItem/userListItem';
import { Wrapper, styledList } from 'components/organisms/userList/userList.styles';

const UsersList = () => (
  <Wrapper>
    <styledList>
      {users.map((userData) => (
        <UserListItem userData={userData} />
      ))}
    </styledList>
  </Wrapper>
);

export default UsersList;
