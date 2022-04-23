import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/button';
import { Wrapper, StyledAverage, StyledUserDetails } from './userListItem.styles';

const UserListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledUserDetails>
      <p>{name}</p>
      <p>Attendance: {attendance}</p>
    </StyledUserDetails>
    <Button />
  </Wrapper>
);

// tutaj sprawdza czy propsy mają odpowiedni typ
UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;
