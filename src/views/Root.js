import React from 'react';
import UsersList from 'components/organisms/userList/userList';
import styled, { ThemeProvider } from 'styled-components';
import UserListItem from 'components/molecules/userListItem/userListItem';
import { GlobalStyles } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme.js';
import { Wrapper } from './Root.styles';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
