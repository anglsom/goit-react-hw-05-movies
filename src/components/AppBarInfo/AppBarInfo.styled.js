import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: black;
  font-size: 18px;
  &.active {
    color: pink;
  }
`;