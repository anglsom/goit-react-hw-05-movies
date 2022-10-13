import { useNavigate } from 'react-router-dom';
import { ButtonStyle }  from './Button.styled';

export default function Button({ backLocation }) {
  const navigate = useNavigate();

  return (
    <ButtonStyle type="button" onClick={() => navigate(backLocation ?? '/')}>
      Go back
    </ButtonStyle>
  );
}