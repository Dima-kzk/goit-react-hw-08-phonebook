import { fetchContacts } from 'redux/contacts/contactsOperations';

export const fetchContactsReducer = builder => {
  builder
    .addCase(fetchContacts.pending, state => {
      state.contacts.isLoadingContacts = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.isLoadingContacts = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.contacts.isLoadingContacts = false;
      state.contacts.error = action.payload;
    });
};
