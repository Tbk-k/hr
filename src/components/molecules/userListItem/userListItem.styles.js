import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 75%;
  margin: 0 auto;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledAverage = styled.div`
  background-color: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    return theme.colors.error;
  }};
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-right: 24px;
`;

export const StyledUserDetails = styled.div`
  margin-right: 14px;
  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  p:first-of-type {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-bottom: 2px;
  }
  p:last-of-type {
    margin-top: 0;
  }
`;
