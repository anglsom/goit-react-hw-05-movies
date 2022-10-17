import { ContainerOne } from './Container.styled';

export default function Container({ children }) {
  return <ContainerOne>{children}</ContainerOne>;
}


Container.propTypes = {
  children: PropTypes.node.isRequired,
};