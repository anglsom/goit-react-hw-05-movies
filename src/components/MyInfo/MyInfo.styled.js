import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 16px;
  &.active {
    color: plum;
  }
`;