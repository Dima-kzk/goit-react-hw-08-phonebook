import { addContact } from 'redux/contacts/contactsOperations';

export const addContactReducer = builder => {
  builder
    .addCase(addContact.pending, state => {
      state.contacts.isLoadingContacts = true;
      state.contacts.addingContact.isAddingContact = true;
      state.contacts.addingContact.addingContactStatus = null;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.contacts.isLoadingContacts = false;
      state.contacts.addingContact.isAddingContact = false;
      state.contacts.addingContact.addingContactStatus = action.payload.status;

      state.contacts.error = null;
      state.contacts.items.push(action.payload.data);
    })
    .addCase(addContact.rejected, (state, action) => {
      state.contacts.isLoadingContacts = false;
      state.contacts.addingContact.isAddingContact = false;
      state.contacts.addingContact.addingContactStatus = null;
      state.contacts.error = action.payload;
    });
};
