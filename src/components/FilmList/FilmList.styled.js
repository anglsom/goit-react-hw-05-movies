import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmListStyled = styled.ul`
  list-style: none;
`;

export const FilmListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FilmLink = styled(Link)`
  color: black;
  &:hover {
    color: pink;
  }
`;