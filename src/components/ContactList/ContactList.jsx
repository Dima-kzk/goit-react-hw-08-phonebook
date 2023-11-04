import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/contactsSelectors';
import { Ul } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = [...contacts];

  if (!Array.isArray(contacts)) {
    return <p>No contacts to display.</p>;
  }

  function getFilterContacts() {
    if (contacts.length > 0) {
      return filteredContacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  }

  return (
    <>
      {filter.trim() !== '' && getFilterContacts().length === 0 ? (
        <p>You don`t have contacts with this name.</p>
      ) : (
        <Ul>
          {getFilterContacts().map(contact => {
            const { id, name, number } = contact;
            return <Contact key={id} id={id} name={name} number={number} />;
          })}
        </Ul>
      )}
    </>
  );
}
