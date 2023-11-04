import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { LinkStyled, Nav, Wrapper } from './AppHeader.styled';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';

const AppHeader = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Wrapper>
      <Nav>
        <LinkStyled to="/">Home</LinkStyled>
        {isLoggedIn && <LinkStyled to="contacts">Contacts</LinkStyled>}
      </Nav>
      <Nav>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Nav>
    </Wrapper>
  );
};

export default AppHeader;
