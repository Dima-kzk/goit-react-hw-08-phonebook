import { deleteContact } from 'redux/contacts/contactsOperations';

export const deleteContactReducer = builder => {
  builder
    .addCase(deleteContact.pending, state => {
      state.contacts.isLoadingContacts = true;
      state.contacts.deletingContact.isDeletingContact = true;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts.isLoadingContacts = false;
      state.contacts.deletingContact.isDeletingContact = false;

      state.contacts.error = null;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.contacts.isLoadingContacts = false;
      state.contacts.deletingContact.isDeletingContact = false;
      state.contacts.deletingContact.deletingStatusCode = null;
      state.contacts.error = action.payload;
    });
};
