import { useEffect, useState } from 'react';

import ContactList from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelectors';

import Loader from 'helper/Loader';
import ContactsForm from 'components/AddContactForm/AddContactForm';
import Filter from 'components/Filter/Filter';
import { H1 } from './Contacts.styled';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [isMounting, setIsMounting] = useState(true);

  useEffect(() => {
    dispatch(fetchContacts());
    setIsMounting(false);
  }, [dispatch]);

  return (
    <>
      <H1>Phonebook</H1>
      <ContactsForm />
      <h2>Contacts</h2>

      {isMounting ? (
        <Loader />
      ) : contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>
          No contacts yet. <br /> It's time to create new contacts!
        </p>
      )}
    </>
  );
};

export default Contacts;
