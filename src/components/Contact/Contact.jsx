import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Button, Li } from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactData => {
    dispatch(deleteContact(contactData));
  };

  return (
    <Li>
      <span>{name}:</span>
      <span>{number}</span>

      <Button type="button" onClick={() => handleDeleteContact({ id, name })}>
        Delete
      </Button>
    </Li>
  );
};
