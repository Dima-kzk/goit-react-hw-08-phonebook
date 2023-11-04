import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { getUser } from 'redux/auth/authSelectors';
import person from '../../../helper/person.png';
import { Button, P, Wrapper } from './UserMenu.styled';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <img src={person} alt="person" width="20px" />
      <P>{email}</P>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </Wrapper>
  );
};

export default UserMenu;
