import { LinkStyled } from '../AppHeader.styled';
import { Wrapper } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Wrapper>
      <LinkStyled to="login">Log in</LinkStyled>
      <LinkStyled to="register">Sign up</LinkStyled>
    </Wrapper>
  );
};

export default AuthNav;
