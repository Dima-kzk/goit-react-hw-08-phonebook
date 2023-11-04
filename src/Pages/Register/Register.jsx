import { Button, Form, Input } from 'helper/Styles/Form.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (name) {
      case 'name':
        setName(value);
        return;

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
    dispatch(register({ name, email, password }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Username </label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={e => handleChange(e)}
        required
      />
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
      <Button type="submit">Sign up</Button>
    </Form>
  );
};

export default Register;
