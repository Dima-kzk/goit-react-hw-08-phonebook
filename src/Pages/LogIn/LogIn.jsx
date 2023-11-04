// import { Button, Form, Input } from 'Services/Styles/Form.styled';
import { Button, Form, Input } from 'helper/Styles/Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (name) {
      case 'email':
        setEmail(value);
        return;

      case 'password':
        setPassword(value);
        return;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Email </label>
      <Input
        type="email"
        name="email"
        value={email}
        onChange={e => handleChange(e)}
        required
      />
      <label>Password </label>
      <Input
        type="password"
        name="password"
        value={password}
        onChange={e => handleChange(e)}
        required
      />
      <Button type="submit">Log in</Button>
    </Form>
  );
};

export default LogIn;
