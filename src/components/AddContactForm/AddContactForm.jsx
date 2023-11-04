import Loader from 'helper/Loader';
import { notifyOptions } from 'helper/NotifyOptions';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import {
  getAddingContactStatus,
  getContacts,
  getIsAddingContact,
} from 'redux/contacts/contactsSelectors';
import { Form } from '../../helper/Styles/Form.styled';
import { Button } from './AddContactForm.styled';

export default function AddContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isAddingContact = useSelector(getIsAddingContact);
  const addingContactStatus = useSelector(getAddingContactStatus);

  useEffect(() => {
    if (addingContactStatus === 201) {
      setName('');
      setNumber('');
    }
  }, [addingContactStatus]);

  function SubmitHandle(event) {
    event.preventDefault();

    const id = nanoid();

    if (contacts.some(e => e.name.toLowerCase() === name.toLowerCase())) {
      Notify.failure(`${name} is already in contacts.`, notifyOptions);
    } else {
      dispatch(addContact({ id, name, number }));
    }
  }

  return (
    <Form onSubmit={SubmitHandle}>
      <label htmlFor="name">
        Name <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        Phone <br />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => {
            setNumber(e.target.value);
          }}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">
        {isAddingContact ? (
          <Loader width="16" height="16" color="black" />
        ) : (
          'Add contact'
        )}
      </Button>
    </Form>
  );
}
